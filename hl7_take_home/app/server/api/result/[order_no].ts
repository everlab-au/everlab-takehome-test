import { results } from './../../db/schema';
import { text } from "drizzle-orm/mysql-core";
import { ConsoleLogWriter, eq } from "drizzle-orm";
import { useRoute } from 'nuxt/app';
import { useDB } from "~/server/db/drizzle.js";
import * as tables from "~/server/db/schema.js";
import type { SelectDiagnosticMetric } from "../../db/schema"
export default defineEventHandler(async (event) => {
    if (event.context.params) {
        const id = event.context.params.order_no;
        const decoded = decodeURIComponent(id);
        const db = useDB();
        const data = await db.select().from(tables.results).where(eq(tables.results.orderInfoId, parseInt(id))).execute();
        const res = await db.select().from(tables.diagnosticMetricTable).innerJoin(tables.results, eq(tables.diagnosticMetricTable.oruSonicCodes, tables.results.test));
        const output = res.filter((el) => {
            return data.find((content) => content.test == el.diagnostic_metric.oruSonicCodes)
        })
        return { data, output };
        // Access the request data with typed properties (optional)
    }
});