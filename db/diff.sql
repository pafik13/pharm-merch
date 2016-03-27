
DROP VIEW vw_attendance_min_dist;

DROP VIEW vw_attendance_promos;

DROP VIEW vw_last_attendances;

DROP VIEW vw_merchant_pharmacies;

DROP TABLE attendancecoordinates;

DROP TABLE valuetype;

DROP SEQUENCE attendancecoordinates_id_seq;

DROP SEQUENCE valuetype_id_seq;

CREATE SEQUENCE attendancegpspoint_id_seq
	START WITH 1
	INCREMENT BY 1
	NO MAXVALUE
	NO MINVALUE
	CACHE 1;

CREATE TABLE attendancegpspoint (
	attendance integer,
	longitude real,
	latitude real,
	provider text,
	stamp timestamp with time zone,
	id integer DEFAULT nextval('attendancegpspoint_id_seq'::regclass) NOT NULL,
	"createdAt" timestamp with time zone,
	"updatedAt" timestamp with time zone
);

ALTER TABLE attendancephoto
	ADD COLUMN "fileName" text;

ALTER SEQUENCE attendancegpspoint_id_seq
	OWNED BY attendancegpspoint.id;

ALTER TABLE attendancegpspoint
	ADD CONSTRAINT attendancegpspoint_pkey PRIMARY KEY (id);

CREATE VIEW vw_attendance_min_dist AS
	SELECT a.id AS attendance,
    min(distance(p.latitude, p.longitude, ap.latitude, ap.longitude)) AS min_dist
   FROM ((attendance a
     JOIN attendancephoto ap ON ((ap.attendance = a.id)))
     JOIN pharmacy p ON ((a.pharmacy = p.id)))
  GROUP BY a.id;

CREATE VIEW vw_attendance_promos AS
	SELECT ap.attendance_promos AS attendance,
    string_agg(p.name, ', '::text) AS names,
    array_agg(p.id) AS ids,
    string_agg(p.key, ', '::text) AS keys
   FROM (attendance_promos__promo_promos_promo ap
     JOIN promo p ON ((ap.promo_promos_promo = p.id)))
  GROUP BY ap.attendance_promos;

CREATE VIEW vw_last_attendances AS
	SELECT a.merchant,
    a.pharmacy,
    a.date,
    a.distance,
    a.category_net,
    a.telephone,
    a."purchaserFIO",
    a."pharmacistCount",
    a.id,
    a."createdAt",
    a."updatedAt"
   FROM attendance a,
    ( SELECT attendance.merchant,
            attendance.pharmacy,
            max(attendance.date) AS max_date
           FROM attendance
          GROUP BY attendance.merchant, attendance.pharmacy) x
  WHERE (((a.merchant = x.merchant) AND (a.pharmacy = x.pharmacy)) AND (a.date = x.max_date));

CREATE VIEW vw_merchant_pharmacies AS
	SELECT p.id AS pharmacy,
    m.id AS merchant,
    p."shortName",
    p."fullName",
    p.address,
    p.tradenet,
    ( SELECT COALESCE(tn."shortName", tn."fullName", 'NONE'::text) AS "coalesce"
           FROM tradenet tn
          WHERE (tn.id = p.tradenet)) AS tradenet_desc,
    p.territory,
    ( SELECT NULLIF(t.name, 'NONE'::text) AS "nullif"
           FROM territory t
          WHERE (t.id = p.territory)) AS territory_desc,
    p."categoryOTC",
    p."categorySBL"
   FROM pharmacy p,
    merchant m
  WHERE (p.territory = m.territory);
