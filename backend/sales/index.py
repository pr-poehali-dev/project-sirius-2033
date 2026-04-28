import json
import os
import psycopg2
from datetime import datetime


def get_conn():
    return psycopg2.connect(os.environ["DATABASE_URL"])


def handler(event: dict, context) -> dict:
    """Управление учётом продаж: получение списка и добавление новых записей."""
    cors = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors, "body": ""}

    method = event.get("httpMethod", "GET")

    if method == "GET":
        conn = get_conn()
        cur = conn.cursor()
        cur.execute("""
            SELECT id, item_name, quantity, amount, sold_at
            FROM sales
            ORDER BY sold_at DESC
            LIMIT 200
        """)
        rows = cur.fetchall()
        cur.close()
        conn.close()

        sales = [
            {
                "id": r[0],
                "item_name": r[1],
                "quantity": r[2],
                "amount": float(r[3]),
                "sold_at": r[4].isoformat(),
            }
            for r in rows
        ]

        total_amount = sum(s["amount"] for s in sales)
        total_quantity = sum(s["quantity"] for s in sales)

        return {
            "statusCode": 200,
            "headers": cors,
            "body": json.dumps({
                "sales": sales,
                "stats": {
                    "total_amount": total_amount,
                    "total_quantity": total_quantity,
                    "total_records": len(sales),
                }
            }, ensure_ascii=False),
        }

    if method == "POST":
        body = json.loads(event.get("body") or "{}")
        item_name = body.get("item_name", "").strip()
        quantity = int(body.get("quantity", 0))
        amount = float(body.get("amount", 0))

        if not item_name or quantity <= 0 or amount < 0:
            return {
                "statusCode": 400,
                "headers": cors,
                "body": json.dumps({"error": "Заполните все поля корректно"}, ensure_ascii=False),
            }

        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO sales (item_name, quantity, amount) VALUES (%s, %s, %s) RETURNING id, sold_at",
            (item_name, quantity, amount),
        )
        row = cur.fetchone()
        conn.commit()
        cur.close()
        conn.close()

        return {
            "statusCode": 201,
            "headers": cors,
            "body": json.dumps({
                "id": row[0],
                "item_name": item_name,
                "quantity": quantity,
                "amount": amount,
                "sold_at": row[1].isoformat(),
            }, ensure_ascii=False),
        }

    return {"statusCode": 405, "headers": cors, "body": json.dumps({"error": "Method not allowed"})}
