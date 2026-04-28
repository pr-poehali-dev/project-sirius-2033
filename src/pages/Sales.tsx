import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const SALES_URL = "https://functions.poehali.dev/6af7fc50-9ba0-49b1-bc62-df887e13ad51";

interface Sale {
  id: number;
  item_name: string;
  quantity: number;
  amount: number;
  sold_at: string;
}

interface Stats {
  total_amount: number;
  total_quantity: number;
  total_records: number;
}

export default function Sales() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [stats, setStats] = useState<Stats>({ total_amount: 0, total_quantity: 0, total_records: 0 });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ item_name: "", quantity: "", amount: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const fetchSales = async () => {
    const res = await fetch(SALES_URL);
    const data = JSON.parse(await res.json());
    setSales(data.sales);
    setStats(data.stats);
    setLoading(false);
  };

  useEffect(() => { fetchSales(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.item_name || !form.quantity || !form.amount) {
      setError("Заполните все поля");
      return;
    }
    setSubmitting(true);
    const res = await fetch(SALES_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        item_name: form.item_name,
        quantity: parseInt(form.quantity),
        amount: parseFloat(form.amount),
      }),
    });
    setSubmitting(false);
    if (res.ok) {
      setForm({ item_name: "", quantity: "", amount: "" });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
      fetchSales();
    } else {
      setError("Ошибка при сохранении");
    }
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" }) +
      " " + d.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">RELAX*CAFÉ</div>
        <nav>
          <Link to="/" style={{ textDecoration: "none", color: "var(--dark)", fontWeight: 700, marginLeft: 30, textTransform: "uppercase", fontSize: 14 }}>
            ← На сайт
          </Link>
        </nav>
        <div style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: 14, textTransform: "uppercase" }}>
          Учёт продаж
        </div>
      </header>

      <main style={{ padding: "40px 20px", maxWidth: 1100, margin: "0 auto" }}>

        {/* Статистика */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 40 }}>
          {[
            { label: "Выручка", value: `${stats.total_amount.toLocaleString("ru-RU")} ₽`, icon: "TrendingUp", color: "var(--primary)" },
            { label: "Продано позиций", value: stats.total_quantity.toLocaleString("ru-RU"), icon: "ShoppingBag", color: "var(--secondary)" },
            { label: "Записей", value: stats.total_records.toLocaleString("ru-RU"), icon: "ClipboardList", color: "var(--accent)" },
          ].map((s) => (
            <div key={s.label} style={{ border: "3px solid var(--dark)", padding: "24px 28px", background: "white", boxShadow: "6px 6px 0 var(--dark)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <Icon name={s.icon} size={20} />
                <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>{s.label}</span>
              </div>
              <div style={{ fontFamily: "Unbounded, sans-serif", fontSize: 28, fontWeight: 800, color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 30, alignItems: "start" }}>

          {/* Форма */}
          <div style={{ border: "3px solid var(--dark)", background: "white", boxShadow: "6px 6px 0 var(--dark)" }}>
            <div style={{ padding: "20px 24px", borderBottom: "3px solid var(--dark)", background: "var(--dark)" }}>
              <span style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: 14, textTransform: "uppercase", color: "white" }}>
                Добавить продажу
              </span>
            </div>
            <form onSubmit={handleSubmit} style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontWeight: 700, fontSize: 12, textTransform: "uppercase", marginBottom: 6 }}>
                  Позиция
                </label>
                <input
                  type="text"
                  placeholder="Напр.: Лавандовый раф"
                  value={form.item_name}
                  onChange={(e) => setForm({ ...form, item_name: e.target.value })}
                  style={{ width: "100%", border: "3px solid var(--dark)", padding: "10px 14px", fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: 14, background: "var(--bg)", outline: "none" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 700, fontSize: 12, textTransform: "uppercase", marginBottom: 6 }}>
                  Количество
                </label>
                <input
                  type="number"
                  min={1}
                  placeholder="1"
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                  style={{ width: "100%", border: "3px solid var(--dark)", padding: "10px 14px", fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: 14, background: "var(--bg)", outline: "none" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 700, fontSize: 12, textTransform: "uppercase", marginBottom: 6 }}>
                  Сумма (₽)
                </label>
                <input
                  type="number"
                  min={0}
                  step="0.01"
                  placeholder="295"
                  value={form.amount}
                  onChange={(e) => setForm({ ...form, amount: e.target.value })}
                  style={{ width: "100%", border: "3px solid var(--dark)", padding: "10px 14px", fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: 14, background: "var(--bg)", outline: "none" }}
                />
              </div>

              {error && (
                <div style={{ background: "#ffe5e5", border: "2px solid var(--primary)", padding: "10px 14px", fontWeight: 600, fontSize: 13, color: "var(--primary)" }}>
                  {error}
                </div>
              )}
              {success && (
                <div style={{ background: "#e5ffe8", border: "2px solid #2d7a3a", padding: "10px 14px", fontWeight: 600, fontSize: 13, color: "#2d7a3a" }}>
                  Продажа записана!
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-cta"
                style={{ background: "var(--primary)", color: "white", width: "100%", padding: "14px", fontSize: 14, opacity: submitting ? 0.7 : 1 }}
              >
                {submitting ? "Сохранение..." : "Записать продажу"}
              </button>
            </form>
          </div>

          {/* Таблица */}
          <div style={{ border: "3px solid var(--dark)", background: "white", boxShadow: "6px 6px 0 var(--dark)" }}>
            <div style={{ padding: "20px 24px", borderBottom: "3px solid var(--dark)", background: "var(--dark)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: 14, textTransform: "uppercase", color: "white" }}>
                История продаж
              </span>
              <span style={{ color: "#aaa", fontSize: 12 }}>последние 200</span>
            </div>

            {loading ? (
              <div style={{ padding: 40, textAlign: "center", fontWeight: 700, color: "#888" }}>Загрузка...</div>
            ) : sales.length === 0 ? (
              <div style={{ padding: 40, textAlign: "center" }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>☕</div>
                <div style={{ fontWeight: 700, color: "#888" }}>Продаж пока нет. Добавьте первую!</div>
              </div>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "3px solid var(--dark)", background: "var(--bg)" }}>
                      {["Позиция", "Кол-во", "Сумма", "Дата"].map((h) => (
                        <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: 1 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sales.map((s, i) => (
                      <tr key={s.id} style={{ borderBottom: "1px solid #eee", background: i % 2 === 0 ? "white" : "var(--bg)" }}>
                        <td style={{ padding: "13px 16px", fontWeight: 600, fontSize: 14 }}>{s.item_name}</td>
                        <td style={{ padding: "13px 16px", fontWeight: 700, fontSize: 14 }}>{s.quantity}</td>
                        <td style={{ padding: "13px 16px", fontWeight: 800, fontSize: 14, color: "var(--primary)", fontFamily: "Unbounded, sans-serif" }}>
                          {s.amount.toLocaleString("ru-RU")} ₽
                        </td>
                        <td style={{ padding: "13px 16px", fontSize: 13, color: "#666" }}>{formatDate(s.sold_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}