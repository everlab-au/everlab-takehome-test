CREATE TABLE `condition` (
	`name` text NOT NULL,
	`diagnostic` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `diagnostic_metric` (
	`name` text NOT NULL,
	`oru_sonic_codes` text NOT NULL,
	`diagnostic` text NOT NULL,
	`diagnostic_groups` text NOT NULL,
	`oru_sonic_units` text NOT NULL,
	`units` text NOT NULL,
	`min_age` integer NOT NULL,
	`max_age` integer NOT NULL,
	`standard_lower` integer NOT NULL,
	`standard_higher` integer NOT NULL,
	`everlab_lower` integer NOT NULL,
	`everlab_higher` integer NOT NULL,
	`gender` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `diagnostic` (
	`name` text NOT NULL,
	`diagnostic_groups` text NOT NULL,
	`diagnostic_metrics` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `order_info` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`test_ordered` text,
	`observation_date_time` text,
	`order_status` text
);
--> statement-breakpoint
CREATE TABLE `results` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`test` text,
	`value` text,
	`units` text,
	`reference_range` text,
	`result_status` text,
	`order_info_id` integer,
	FOREIGN KEY (`order_info_id`) REFERENCES `order_info`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`patientID` text NOT NULL,
	`username` text NOT NULL,
	`dob` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`order_info_table_id` integer,
	FOREIGN KEY (`order_info_table_id`) REFERENCES `order_info`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
DROP TABLE `todos`;