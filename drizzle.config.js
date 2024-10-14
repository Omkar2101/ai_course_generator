import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: './app/db/schema',
  dbCredentials:{
    url:"postgresql://Ai_course_database_owner:OFN8p7mwPsgx@ep-super-tree-a55w8ip8.us-east-2.aws.neon.tech/Ai_course_database?sslmode=require"
  }
})