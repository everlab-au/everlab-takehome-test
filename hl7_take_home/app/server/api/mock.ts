import { MockData } from "../../parser/index.js";
import type { Mocky } from "../../parser/index.js";
import { InsertUser, userTable, orderInfoTable } from "../db/schema"
import { useDB } from "../db/drizzle"
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
	//const data = await MockData();
	const db = useDB();
	const data = await db.select().from(userTable)
		.leftJoin(orderInfoTable, eq(userTable.orderInfoTableId, orderInfoTable.id)).execute();
	return { data };
});
