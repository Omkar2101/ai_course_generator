import { integer, pgTable, varchar, json} from "drizzle-orm/pg-core";

// Define the CourseList table schema
export const CourseList = pgTable("course_list", {
  id: integer("id").primaryKey().autoIncrement(), // Primary key with auto-increment
  courseId: varchar("course_id", { length: 50 }).notNull(), // Course ID, a required string
  name: varchar("name", { length: 100 }).notNull(), // Name of the course, a required string
  category: varchar("category", { length: 50 }).notNull(), // Category of the course, a required string
  level: varchar("level", { length: 20 }).notNull(), // Level of the course (e.g., beginner, intermediate)
  courseOutput: json("course_output").notNull(), // Course output in JSON format
  createdBy: varchar("created_by", { length: 50 }).notNull(), // User ID or identifier for the creator
  userName: varchar("user_name", { length: 100 }).notNull(), // Name of the user who created the course
  userProfileImage: varchar("user_profile_image", { length: 255 }).notNull(), // URL or path to the user's profile image
});
