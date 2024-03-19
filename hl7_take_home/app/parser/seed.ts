import { eq } from 'drizzle-orm';
import { MockData } from "./index"
import { useDB } from '~/server/db/drizzle';
import * as tables from '~/server/db/schema';
import type { diagnostic_metric } from './index';

export type Mockdata = ReturnType<typeof MockData>








const main = () => {
    let db = useDB()


    type Mockdata = ReturnType<typeof MockData>





    const injectBaseHL7Data = async (InputData: Mockdata) => {

        InputData.then((data) => {
            data?.transformed.forEach(async (element) => {
                const order_data = await db.insert(tables.orderInfoTable).values({
                    testOrdered: element.orderInfo.testOrdered,
                    observationDateTime: element.orderInfo.observationDateTime,
                    orderStatus: element.orderInfo.orderStatus
                }).returning().execute()
                if (order_data) {
                    order_data[0].id
                    const patient_data = db.insert(tables.userTable).values({
                        patientID: element.patientInfo.patientID,
                        name: element.patientInfo.name,
                        dob: element.patientInfo.dob,
                        orderInfoTableId: order_data[0].id
                    }).returning().execute()
                    element.orderInfo.results.forEach(async (result) => {
                        const result_data = await db.insert(tables.results).values({
                            test: result.test,
                            value: result.value,
                            units: result.units,
                            referenceRange: result.referenceRange,
                            resultStatus: result.resultStatus,
                            orderInfoId: order_data[0].id
                        }).returning().execute()
                    })
                }
            })

        })

    }

    const checkIfDataExists = async () => {

        if (!db) {
            db = useDB()
        }
        return db.select().from(tables.userTable).execute().then((data) => {
            if (data.length > 0) {
                return true
            }
            return false
        })
    }


    const should_duplicate_diag = (data: diagnostic_metric) => {
        const duplicate = data.oru_sonic_codes.split(";")
        if (duplicate.length == 1) {
            return false
        }
        else {
            return true
        }
    }
    const duplicate_if_required = (input: Mockdata) => {
        return input.then((data) => {

            const output = data?.database_data.diag_metric.filter(should_duplicate_diag)
            if (output) {
                return output.map((el) => {
                    return el.oru_sonic_codes.split(";").map((content) => {
                        return { ...el, oru_sonic_codes: content }

                    }).flat()


                }).flat()
            }


        }

        )


    }


    const injectCSVdata = (input: Mockdata) => {
        const safeParse = (value: string) => {
            if (value == "")
                return 0
            else
                return parseInt(value)
        }
        //get the sigle thing too
        const value = duplicate_if_required(input)

        input.then(async (data) => {
            const val = await value
            val?.forEach(async (element) => {

                //may caus issue
                if (element.oru_sonic_codes.includes(";") == false) {

                    db.insert(tables.diagnosticMetricTable).values({
                        name: element.name,
                        oruSonicCodes: element.oru_sonic_codes,
                        diagnostic: element.diagnostic,
                        diagnosticGroups: element.diagnostic_groups,
                        oruSonicUnits: element.oru_sonic_units,
                        units: element.units,
                        minAge: safeParse(element.min_age),
                        maxAge: safeParse(element.max_age),
                        standardLower: safeParse(element.standard_lower),
                        standardHigher: safeParse(element.standard_higher),
                        everlabLower: safeParse(element.everlab_lower),
                        everlabHigher: safeParse(element.everlab_higher),
                        gender: element.gender
                    }).execute()
                }
            })
            data?.database_data.diag.forEach(async (element) => {
                db.insert(tables.diagnosticTable).values({
                    name: element.name,
                    diagnosticGroups: element.diagnostic_groups,
                    diagnosticMetrics: element.diagnostic_metrics
                }).execute()
            })
            data?.database_data.condition.forEach(async (element) => {
                db.insert(tables.conditionTable).values({
                    name: element.name,
                    diagnostic: element.diagnostic_metrics ?? ""
                }).execute()
            })





        })












    }
    const data = MockData();
    injectBaseHL7Data(data)
    injectCSVdata(data)

}


main()
console.log("what")

