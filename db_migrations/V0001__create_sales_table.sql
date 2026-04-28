CREATE TABLE sales (
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    amount NUMERIC(10, 2) NOT NULL CHECK (amount >= 0),
    sold_at TIMESTAMP NOT NULL DEFAULT NOW()
);