import { MockData, inject_data_from_post } from "../../parser/index.js";
import type { Mocky } from "../../parser/index.js";
import { InsertUser, userTable, orderInfoTable } from "../db/schema.js"
import { useDB } from "../db/drizzle.js"
import { eq } from "drizzle-orm";
import { HL7Parser } from "../../parser/index.js";
import type { Mockdata } from "~/parser/seed.js";
import { injectDataHl7 } from "~/parser/InjectHL7.js";
export default defineEventHandler(async (event) => {
    const body = await readRawBody(event, "utf8");

    if (body) {
        const data = inject_data_from_post(body)
        return injectDataHl7(data).then((output: boolean) => {
            return output


        })


    }
}



);