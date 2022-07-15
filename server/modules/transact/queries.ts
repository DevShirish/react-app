import sql from "@databases/sql";

export const createTransact = (walletId: number, amount: number) => sql`INSERT INTO TRANSACT (WALLET_ID, AMOUNT) VALUES (${sql.value(walletId)}, ${sql.value(amount)})`