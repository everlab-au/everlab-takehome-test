import { orderInfoTable } from './../db/schema';
import { MockData } from "../../parser/index.js";
import type { Mocky } from "../../parser/index.js";
import { InsertUser, userTable, orderInfoTable, results, diagnosticMetricTable } from "../db/schema"
import { useDB } from "../db/drizzle"
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
    //const data = await MockData();
    const db = useDB();
    // delete all the data from the user table and orderInfoTable table


    await db.delete(results).execute();
    await db.delete(userTable).execute();
    await db.delete(orderInfoTable).execute();


    return { data: "All data deleted" };

});

