import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
export const users = pgTable("users", {
    id: varchar("id").primaryKey().default(sql `gen_random_uuid()`),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
});
export const insertUserSchema = createInsertSchema(users).pick({
    username: true,
    password: true,
});
export const enquiries = pgTable("enquiries", {
    id: varchar("id").primaryKey().default(sql `gen_random_uuid()`),
    name: text("name").notNull(),
    phone: text("phone").notNull(),
    email: text("email"),
    service: text("service").notNull(),
    message: text("message"),
    createdAt: timestamp("created_at").defaultNow(),
});
export const insertEnquirySchema = createInsertSchema(enquiries).omit({
    id: true,
    createdAt: true,
});
