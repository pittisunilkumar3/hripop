CREATE TABLE `enquiries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`mode` text DEFAULT 'experience' NOT NULL,
	`name` text NOT NULL,
	`organization` text DEFAULT '',
	`email` text NOT NULL,
	`phone` text DEFAULT '',
	`enquiry_type` text NOT NULL,
	`location` text DEFAULT '',
	`audience` text DEFAULT '',
	`timeline` text DEFAULT '',
	`budget` text DEFAULT '',
	`idea` text NOT NULL,
	`brief_url` text DEFAULT '',
	`status` text DEFAULT 'new' NOT NULL
);
