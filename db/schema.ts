import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

/** Enquiries submitted through the Experience Lab / contact form. */
export const enquiries = sqliteTable("enquiries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  mode: text("mode").notNull().default("experience"), // experience | partner
  name: text("name").notNull(),
  organization: text("organization").default(""),
  email: text("email").notNull(),
  phone: text("phone").default(""),
  enquiryType: text("enquiry_type").notNull(),
  location: text("location").default(""),
  audience: text("audience").default(""),
  timeline: text("timeline").default(""),
  budget: text("budget").default(""),
  idea: text("idea").notNull(),
  briefUrl: text("brief_url").default(""),
  status: text("status").notNull().default("new"),
});
