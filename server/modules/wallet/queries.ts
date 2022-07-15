import {sql} from "@databases/mysql";

export const createNewWallet = (name: string, balance: number) => sql`INSERT INTO WALLET(NAME, BALANCE) VALUES("${sql.value(name)}", ${sql.value(balance)});`
export const updateWallet = (id: number, balance: number) => sql`UPDATE WALLET SET BALANCE=${sql.value(balance)} WHERE ID=${sql.value(id)}`
export const hasWalletByName = (name: string) => sql`SELECT COUNT(ID) WHERE NAME=${sql.value(name.trim())}`
