import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm';
//replace / with %2F

export const userTable = sqliteTable('patient', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  patientID: text('patientID').notNull(),
  name: text('username').notNull(),
  dob: text('dob').notNull(),
  createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  orderInfoTableId: integer('order_info_table_id').references(() => orderInfoTable.id),
});


export const orderInfoTable = sqliteTable('order_info', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  testOrdered: text('test_ordered'),
  observationDateTime: text('observation_date_time'),
  orderStatus: text('order_status'),
});
export const results = sqliteTable('results', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  test: text('test'),
  value: text('value'),
  units: text('units'),
  referenceRange: text('reference_range'),
  resultStatus: text('result_status'),
  orderInfoId: integer('order_info_id').references(() => orderInfoTable.id),
});

export const diagnosticMetricTable = sqliteTable('diagnostic_metric', {
  name: text('name').notNull(),
  oruSonicCodes: text('oru_sonic_codes').notNull(),
  diagnostic: text('diagnostic').notNull(),
  diagnosticGroups: text('diagnostic_groups').notNull(),
  oruSonicUnits: text('oru_sonic_units').notNull(),
  units: text('units').notNull(),
  minAge: integer('min_age').notNull(),
  maxAge: integer('max_age').notNull(),
  standardLower: integer('standard_lower').notNull(),
  standardHigher: integer('standard_higher').notNull(),
  everlabLower: integer('everlab_lower').notNull(),
  everlabHigher: integer('everlab_higher').notNull(),
  gender: text('gender').notNull()
});

export const diagnosticTable = sqliteTable('diagnostic', {
  name: text('name').notNull(),
  diagnosticGroups: text('diagnostic_groups').notNull(),
  diagnosticMetrics: text('diagnostic_metrics').notNull()
});

export const conditionTable = sqliteTable('condition', {
  name: text('name').notNull(),
  diagnostic: text('diagnostic').notNull()
});

export type InsertCondition = typeof conditionTable.$inferInsert
export type SelectCondition = typeof conditionTable.$inferSelect

export type InsertDiagnostic = typeof diagnosticTable.$inferInsert
export type SelectDiagnostic = typeof diagnosticTable.$inferSelect

export type InsertDiagnosticMetric = typeof diagnosticMetricTable.$inferInsert
export type SelectDiagnosticMetric = typeof diagnosticMetricTable.$inferSelect








export type InsertUser = typeof userTable.$inferInsert;
export type SelectUser = typeof userTable.$inferSelect;
export type InsertResults = typeof results.$inferInsert;
export type SelectResults = typeof results.$inferSelect;
export type InsertOrderInfo = typeof orderInfoTable.$inferInsert;
export type SelectOrderInfo = typeof orderInfoTable.$inferSelect
