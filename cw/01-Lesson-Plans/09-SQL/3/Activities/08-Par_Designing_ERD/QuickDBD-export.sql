-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "GYM" (
    "gym_id" int   NOT NULL,
    "gym_name" string   NOT NULL,
    "gym_address" string   NOT NULL,
    CONSTRAINT "pk_GYM" PRIMARY KEY (
        "gym_id"
     )
);

CREATE TABLE "FACILITY" (
    "f_id" int   NOT NULL,
    "Name" string   NOT NULL,
    "gym_id" int   NOT NULL,
    CONSTRAINT "pk_FACILITY" PRIMARY KEY (
        "f_id"
     )
);

CREATE TABLE "TRAINERS" (
    "ID" int   NOT NULL,
    "Name" String   NOT NULL,
    "Phone" int   NOT NULL,
    "gym_id" int   NOT NULL,
    "f_id" int   NOT NULL,
    "member_id" int   NOT NULL,
    CONSTRAINT "pk_TRAINERS" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "MEMBERS" (
    "m_id" int   NOT NULL,
    "gym_id" int   NOT NULL,
    "m_name" string   NOT NULL,
    "m_address" string   NOT NULL,
    "enrolled_pgm_id" int   NOT NULL,
    "start_date" date   NOT NULL,
    "end_date" date   NOT NULL,
    CONSTRAINT "pk_MEMBERS" PRIMARY KEY (
        "m_id"
     )
);

CREATE TABLE "PROGRAMS" (
    "p_id" int   NOT NULL,
    "p_name" string   NOT NULL,
    "trainer_id" int   NOT NULL,
    "gym_id" int   NOT NULL,
    "f_id" int   NOT NULL,
    CONSTRAINT "pk_PROGRAMS" PRIMARY KEY (
        "p_id"
     )
);

ALTER TABLE "FACILITY" ADD CONSTRAINT "fk_FACILITY_f_id" FOREIGN KEY("f_id")
REFERENCES "PROGRAMS" ("f_id");

ALTER TABLE "FACILITY" ADD CONSTRAINT "fk_FACILITY_gym_id" FOREIGN KEY("gym_id")
REFERENCES "GYM" ("gym_id");

ALTER TABLE "TRAINERS" ADD CONSTRAINT "fk_TRAINERS_gym_id" FOREIGN KEY("gym_id")
REFERENCES "GYM" ("gym_id");

ALTER TABLE "TRAINERS" ADD CONSTRAINT "fk_TRAINERS_f_id" FOREIGN KEY("f_id")
REFERENCES "FACILITY" ("f_id");

ALTER TABLE "TRAINERS" ADD CONSTRAINT "fk_TRAINERS_member_id" FOREIGN KEY("member_id")
REFERENCES "MEMBERS" ("m_id");

ALTER TABLE "MEMBERS" ADD CONSTRAINT "fk_MEMBERS_gym_id" FOREIGN KEY("gym_id")
REFERENCES "GYM" ("gym_id");

ALTER TABLE "MEMBERS" ADD CONSTRAINT "fk_MEMBERS_enrolled_pgm_id" FOREIGN KEY("enrolled_pgm_id")
REFERENCES "PROGRAMS" ("p_id");

ALTER TABLE "PROGRAMS" ADD CONSTRAINT "fk_PROGRAMS_trainer_id" FOREIGN KEY("trainer_id")
REFERENCES "TRAINERS" ("ID");

ALTER TABLE "PROGRAMS" ADD CONSTRAINT "fk_PROGRAMS_gym_id" FOREIGN KEY("gym_id")
REFERENCES "GYM" ("gym_id");

