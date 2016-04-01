--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET search_path = public, pg_catalog;

--
-- Name: distance(real, real, real, real); Type: FUNCTION; Schema: public; Owner: adminaqvlyey
--

CREATE FUNCTION distance(lat1 real, lon1 real, lat2 real, lon2 real) RETURNS real
    LANGUAGE plpgsql
    AS $$ 
DECLARE
  radius real := 6371000;
BEGIN
    --http://www.movable-type.co.uk/scripts/latlong.html
    --http://rosettacode.org/wiki/Haversine_formula
    /*
    -- 6371.0 km is the authalic radius based on/extracted from surface area;
    -- 6372.8 km is an approximation of the radius of the average circumference
    (i.e., the average great-elliptic or great-circle radius), where the
     boundaries are the meridian (6367.45 km) and the equator (6378.14 km)
    */
    return acos(sin(radians(lat1))*sin(radians(lat2))+cos(radians(lat1))*cos(radians(lat2))*cos(radians(lon2)-radians(lon1)))*radius;
END;
$$;


ALTER FUNCTION public.distance(lat1 real, lon1 real, lat2 real, lon2 real) OWNER TO adminaqvlyey;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: attendance; Type: TABLE; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

CREATE TABLE attendance (
    merchant integer,
    pharmacy integer,
    date timestamp with time zone,
    distance real,
    category_net integer,
    telephone text,
    "purchaserFIO" text,
    "pharmacistCount" integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.attendance OWNER TO adminaqvlyey;

--
-- Name: attendance_id_seq; Type: SEQUENCE; Schema: public; Owner: adminaqvlyey
--

CREATE SEQUENCE attendance_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.attendance_id_seq OWNER TO adminaqvlyey;

--
-- Name: attendance_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adminaqvlyey
--

ALTER SEQUENCE attendance_id_seq OWNED BY attendance.id;


--
-- Name: attendance_promos__promo_promos_promo; Type: TABLE; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

CREATE TABLE attendance_promos__promo_promos_promo (
    id integer NOT NULL,
    attendance_promos integer,
    promo_promos_promo integer
);


ALTER TABLE public.attendance_promos__promo_promos_promo OWNER TO adminaqvlyey;

--
-- Name: attendance_promos__promo_promos_promo_id_seq; Type: SEQUENCE; Schema: public; Owner: adminaqvlyey
--

CREATE SEQUENCE attendance_promos__promo_promos_promo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.attendance_promos__promo_promos_promo_id_seq OWNER TO adminaqvlyey;

--
-- Name: attendance_promos__promo_promos_promo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adminaqvlyey
--

ALTER SEQUENCE attendance_promos__promo_promos_promo_id_seq OWNED BY attendance_promos__promo_promos_promo.id;


--
-- Name: attendancegpspoint; Type: TABLE; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

CREATE TABLE attendancegpspoint (
    attendance integer,
    longitude real,
    latitude real,
    provider text,
    stamp timestamp with time zone,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.attendancegpspoint OWNER TO adminaqvlyey;

--
-- Name: attendancegpspoint_id_seq; Type: SEQUENCE; Schema: public; Owner: adminaqvlyey
--

CREATE SEQUENCE attendancegpspoint_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.attendancegpspoint_id_seq OWNER TO adminaqvlyey;

--
-- Name: attendancegpspoint_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adminaqvlyey
--

ALTER SEQUENCE attendancegpspoint_id_seq OWNED BY attendancegpspoint.id;


--
-- Name: attendancephoto; Type: TABLE; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

CREATE TABLE attendancephoto (
    attendance integer,
    drug integer,
    "subType" integer,
    longitude real,
    latitude real,
    "photoPath" text,
    "storagePath" text,
    stamp timestamp with time zone,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "fileName" text
);


ALTER TABLE public.attendancephoto OWNER TO adminaqvlyey;

--
-- Name: attendancephoto_id_seq; Type: SEQUENCE; Schema: public; Owner: adminaqvlyey
--

CREATE SEQUENCE attendancephoto_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.attendancephoto_id_seq OWNER TO adminaqvlyey;

--
-- Name: attendancephoto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adminaqvlyey
--

ALTER SEQUENCE attendancephoto_id_seq OWNED BY attendancephoto.id;


--
-- Name: attendanceresult; Type: TABLE; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

CREATE TABLE attendanceresult (
    attendance integer,
    drug integer,
    info integer,
    value text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.attendanceresult OWNER TO adminaqvlyey;

--
-- Name: attendanceresult_id_seq; Type: SEQUENCE; Schema: public; Owner: adminaqvlyey
--

CREATE SEQUENCE attendanceresult_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.attendanceresult_id_seq OWNER TO adminaqvlyey;

--
-- Name: attendanceresult_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adminaqvlyey
--

ALTER SEQUENCE attendanceresult_id_seq OWNED BY attendanceresult.id;


--
-- Name: categoryinnet; Type: TABLE; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

CREATE TABLE categoryinnet (
    name text,
    key text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.categoryinnet OWNER TO adminaqvlyey;

--
-- Name: categoryinnet_categoryinnet_categoryinnet__project_categoryinne; Type: TABLE; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

CREATE TABLE categoryinnet_categoryinnet_categoryinnet__project_categoryinne (
    id integer NOT NULL,
    "project_categoryInNet" integer,
    "categoryinnet_categoryInNet_categoryinnet" integer
);


ALTER TABLE public.categoryinnet_categoryinnet_categoryinnet__project_categoryinne OWNER TO adminaqvlyey;

--
-- Name: categoryinnet_categoryinnet_categoryinnet__project_categ_id_seq; Type: SEQUENCE; Schema: public; Owner: adminaqvlyey
--

CREATE SEQUENCE categoryinnet_categoryinnet_categoryinnet__project_categ_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categoryinnet_categoryinnet_categoryinnet__project_categ_id_seq OWNER TO adminaqvlyey;

--
-- Name: categoryinnet_categoryinnet_categoryinnet__project_categ_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adminaqvlyey
--

ALTER SEQUENCE categoryinnet_categoryinnet_categoryinnet__project_categ_id_seq OWNED BY categoryinnet_categoryinnet_categoryinnet__project_categoryinne.id;


--
-- Name: categoryinnet_id_seq; Type: SEQUENCE; Schema: public; Owner: adminaqvlyey
--

CREATE SEQUENCE categoryinnet_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categoryinnet_id_seq OWNER TO adminaqvlyey;

--
-- Name: categoryinnet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adminaqvlyey
--

ALTER SEQUENCE categoryinnet_id_seq OWNED BY categoryinnet.id;


--
-- Name: categoryinnet_netcats_categoryinnet__project_netcats; Type: TABLE; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

CREATE TABLE categoryinnet_netcats_categoryinnet__project_netcats (
    id integer NOT NULL,
    "project_netCats" integer,
    "categoryinnet_netCats_categoryinnet" integer
);


ALTER TABLE public.categoryinnet_netcats_categoryinnet__project_netcats OWNER TO adminaqvlyey;

--
-- Name: categoryinnet_netcats_categoryinnet__project_netcats_id_seq; Type: SEQUENCE; Schema: public; Owner: adminaqvlyey
--

CREATE SEQUENCE categoryinnet_netcats_categoryinnet__project_netcats_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categoryinnet_netcats_categoryinnet__project_netcats_id_seq OWNER TO adminaqvlyey;

--
-- Name: categoryinnet_netcats_categoryinnet__project_netcats_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adminaqvlyey
--

ALTER SEQUENCE categoryinnet_netcats_categoryinnet__project_netcats_id_seq OWNED BY categoryinnet_netcats_categoryinnet__project_netcats.id;


--
-- Name: company; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE company (
    "fullName" text,
    "shortName" text,
    "officialName" text,
    company_type text,
    description text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.company OWNER TO postgres;

--
-- Name: company_drugs__drug_drugs_drug; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE company_drugs__drug_drugs_drug (
    id integer NOT NULL,
    company_drugs integer,
    drug_drugs_drug integer
);


ALTER TABLE public.company_drugs__drug_drugs_drug OWNER TO postgres;

--
-- Name: company_drugs__drug_drugs_drug_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE company_drugs__drug_drugs_drug_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.company_drugs__drug_drugs_drug_id_seq OWNER TO postgres;

--
-- Name: company_drugs__drug_drugs_drug_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE company_drugs__drug_drugs_drug_id_seq OWNED BY company_drugs__drug_drugs_drug.id;


--
-- Name: company_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE company_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.company_id_seq OWNER TO postgres;

--
-- Name: company_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE company_id_seq OWNED BY company.id;


--
-- Name: device; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE device (
    iemi text,
    info text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.device OWNER TO postgres;

--
-- Name: device_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE device_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.device_id_seq OWNER TO postgres;

--
-- Name: device_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE device_id_seq OWNED BY device.id;


--
-- Name: drug; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE drug (
    "fullName" text,
    "officialName" text,
    description text,
    barcode text,
    articul text,
    instruction text,
    reseller integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.drug OWNER TO postgres;

--
-- Name: drug_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE drug_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.drug_id_seq OWNER TO postgres;

--
-- Name: drug_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE drug_id_seq OWNED BY drug.id;


--
-- Name: drug_projects__project_drugs; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE drug_projects__project_drugs (
    id integer NOT NULL,
    drug_projects integer,
    project_drugs integer
);


ALTER TABLE public.drug_projects__project_drugs OWNER TO postgres;

--
-- Name: drug_projects__project_drugs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE drug_projects__project_drugs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.drug_projects__project_drugs_id_seq OWNER TO postgres;

--
-- Name: drug_projects__project_drugs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE drug_projects__project_drugs_id_seq OWNED BY drug_projects__project_drugs.id;


--
-- Name: druginfotype; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE druginfotype (
    name text,
    "valueType" text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.druginfotype OWNER TO postgres;

--
-- Name: druginfotype_druginfotypes_druginfotype__project_druginfotypes; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE druginfotype_druginfotypes_druginfotype__project_druginfotypes (
    id integer NOT NULL,
    project_druginfotypes integer,
    druginfotype_druginfotypes_druginfotype integer
);


ALTER TABLE public.druginfotype_druginfotypes_druginfotype__project_druginfotypes OWNER TO postgres;

--
-- Name: druginfotype_druginfotypes_druginfotype__project_druginf_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE druginfotype_druginfotypes_druginfotype__project_druginf_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.druginfotype_druginfotypes_druginfotype__project_druginf_id_seq OWNER TO postgres;

--
-- Name: druginfotype_druginfotypes_druginfotype__project_druginf_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE druginfotype_druginfotypes_druginfotype__project_druginf_id_seq OWNED BY druginfotype_druginfotypes_druginfotype__project_druginfotypes.id;


--
-- Name: druginfotype_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE druginfotype_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.druginfotype_id_seq OWNER TO postgres;

--
-- Name: druginfotype_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE druginfotype_id_seq OWNED BY druginfotype.id;


--
-- Name: druginfotype_infos_druginfotype__project_infos; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE druginfotype_infos_druginfotype__project_infos (
    id integer NOT NULL,
    project_infos integer,
    druginfotype_infos_druginfotype integer
);


ALTER TABLE public.druginfotype_infos_druginfotype__project_infos OWNER TO postgres;

--
-- Name: druginfotype_infos_druginfotype__project_infos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE druginfotype_infos_druginfotype__project_infos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.druginfotype_infos_druginfotype__project_infos_id_seq OWNER TO postgres;

--
-- Name: druginfotype_infos_druginfotype__project_infos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE druginfotype_infos_druginfotype__project_infos_id_seq OWNED BY druginfotype_infos_druginfotype__project_infos.id;


--
-- Name: hospital; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE hospital (
    "fullName" text,
    "shortName" text,
    "officialName" text,
    description text,
    address text,
    phone text,
    email text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.hospital OWNER TO postgres;

--
-- Name: hospital_hospitals_hospital__pharmacy_hospitals; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE hospital_hospitals_hospital__pharmacy_hospitals (
    id integer NOT NULL,
    pharmacy_hospitals integer,
    hospital_hospitals_hospital integer
);


ALTER TABLE public.hospital_hospitals_hospital__pharmacy_hospitals OWNER TO postgres;

--
-- Name: hospital_hospitals_hospital__pharmacy_hospitals_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE hospital_hospitals_hospital__pharmacy_hospitals_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hospital_hospitals_hospital__pharmacy_hospitals_id_seq OWNER TO postgres;

--
-- Name: hospital_hospitals_hospital__pharmacy_hospitals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE hospital_hospitals_hospital__pharmacy_hospitals_id_seq OWNED BY hospital_hospitals_hospital__pharmacy_hospitals.id;


--
-- Name: hospital_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE hospital_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hospital_id_seq OWNER TO postgres;

--
-- Name: hospital_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE hospital_id_seq OWNED BY hospital.id;


--
-- Name: hospital_pharmacies__pharmacy_pharmacies_pharmacy; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE hospital_pharmacies__pharmacy_pharmacies_pharmacy (
    id integer NOT NULL,
    hospital_pharmacies integer,
    pharmacy_pharmacies_pharmacy integer
);


ALTER TABLE public.hospital_pharmacies__pharmacy_pharmacies_pharmacy OWNER TO postgres;

--
-- Name: hospital_pharmacies__pharmacy_pharmacies_pharmacy_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE hospital_pharmacies__pharmacy_pharmacies_pharmacy_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.hospital_pharmacies__pharmacy_pharmacies_pharmacy_id_seq OWNER TO postgres;

--
-- Name: hospital_pharmacies__pharmacy_pharmacies_pharmacy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE hospital_pharmacies__pharmacy_pharmacies_pharmacy_id_seq OWNED BY hospital_pharmacies__pharmacy_pharmacies_pharmacy.id;


--
-- Name: manager; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE manager (
    "firstName" text,
    "middleName" text,
    "lastName" text,
    "shortName" text,
    "fullName" text,
    sex integer,
    phone text,
    email text,
    job_role text,
    head integer,
    "user" integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.manager OWNER TO postgres;

--
-- Name: manager_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE manager_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.manager_id_seq OWNER TO postgres;

--
-- Name: manager_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE manager_id_seq OWNED BY manager.id;


--
-- Name: merchant; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE merchant (
    "firstName" text,
    "middleName" text,
    "lastName" text,
    sex integer,
    phone text,
    email text,
    job_role text,
    manager integer,
    "user" integer,
    project integer,
    territory integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "initPwd" text,
    "shortName" text,
    "fullName" text
);


ALTER TABLE public.merchant OWNER TO postgres;

--
-- Name: merchant_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE merchant_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.merchant_id_seq OWNER TO postgres;

--
-- Name: merchant_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE merchant_id_seq OWNED BY merchant.id;


--
-- Name: passport; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE passport (
    protocol text,
    password text,
    provider text,
    identifier text,
    tokens json,
    "user" integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.passport OWNER TO postgres;

--
-- Name: passport_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE passport_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.passport_id_seq OWNER TO postgres;

--
-- Name: passport_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE passport_id_seq OWNED BY passport.id;


--
-- Name: pharmacy; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE pharmacy (
    "fullName" text,
    "shortName" text,
    "officialName" text,
    address text,
    territory integer,
    longitude real,
    latitude real,
    subway text,
    phone text,
    email text,
    "avgTicket" real,
    traffic integer,
    tradenet integer,
    valid boolean,
    "validatedAt" timestamp with time zone,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "categoryOTC" text,
    "categorySBL" text,
    "codeSBL" text,
    "layoutType" integer,
    validated integer
);


ALTER TABLE public.pharmacy OWNER TO postgres;

--
-- Name: pharmacy_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE pharmacy_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pharmacy_id_seq OWNER TO postgres;

--
-- Name: pharmacy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE pharmacy_id_seq OWNED BY pharmacy.id;


--
-- Name: pharmacy_pharmacies_pharmacy__route_pharmacies; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE pharmacy_pharmacies_pharmacy__route_pharmacies (
    id integer NOT NULL,
    route_pharmacies integer,
    pharmacy_pharmacies_pharmacy integer
);


ALTER TABLE public.pharmacy_pharmacies_pharmacy__route_pharmacies OWNER TO postgres;

--
-- Name: pharmacy_pharmacies_pharmacy__route_pharmacies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE pharmacy_pharmacies_pharmacy__route_pharmacies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pharmacy_pharmacies_pharmacy__route_pharmacies_id_seq OWNER TO postgres;

--
-- Name: pharmacy_pharmacies_pharmacy__route_pharmacies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE pharmacy_pharmacies_pharmacy__route_pharmacies_id_seq OWNED BY pharmacy_pharmacies_pharmacy__route_pharmacies.id;


--
-- Name: pharmacylayouttype; Type: TABLE; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

CREATE TABLE pharmacylayouttype (
    name text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.pharmacylayouttype OWNER TO adminaqvlyey;

--
-- Name: pharmacylayouttype_id_seq; Type: SEQUENCE; Schema: public; Owner: adminaqvlyey
--

CREATE SEQUENCE pharmacylayouttype_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pharmacylayouttype_id_seq OWNER TO adminaqvlyey;

--
-- Name: pharmacylayouttype_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adminaqvlyey
--

ALTER SEQUENCE pharmacylayouttype_id_seq OWNED BY pharmacylayouttype.id;


--
-- Name: photosubtype; Type: TABLE; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

CREATE TABLE photosubtype (
    name text,
    type integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.photosubtype OWNER TO adminaqvlyey;

--
-- Name: photosubtype_id_seq; Type: SEQUENCE; Schema: public; Owner: adminaqvlyey
--

CREATE SEQUENCE photosubtype_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.photosubtype_id_seq OWNER TO adminaqvlyey;

--
-- Name: photosubtype_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adminaqvlyey
--

ALTER SEQUENCE photosubtype_id_seq OWNED BY photosubtype.id;


--
-- Name: phototype; Type: TABLE; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

CREATE TABLE phototype (
    name text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.phototype OWNER TO adminaqvlyey;

--
-- Name: phototype_id_seq; Type: SEQUENCE; Schema: public; Owner: adminaqvlyey
--

CREATE SEQUENCE phototype_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.phototype_id_seq OWNER TO adminaqvlyey;

--
-- Name: phototype_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adminaqvlyey
--

ALTER SEQUENCE phototype_id_seq OWNED BY phototype.id;


--
-- Name: phototype_phototypes_phototype__project_phototypes; Type: TABLE; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

CREATE TABLE phototype_phototypes_phototype__project_phototypes (
    id integer NOT NULL,
    "project_photoTypes" integer,
    "phototype_photoTypes_phototype" integer
);


ALTER TABLE public.phototype_phototypes_phototype__project_phototypes OWNER TO adminaqvlyey;

--
-- Name: phototype_phototypes_phototype__project_phototypes_id_seq; Type: SEQUENCE; Schema: public; Owner: adminaqvlyey
--

CREATE SEQUENCE phototype_phototypes_phototype__project_phototypes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.phototype_phototypes_phototype__project_phototypes_id_seq OWNER TO adminaqvlyey;

--
-- Name: phototype_phototypes_phototype__project_phototypes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adminaqvlyey
--

ALTER SEQUENCE phototype_phototypes_phototype__project_phototypes_id_seq OWNED BY phototype_phototypes_phototype__project_phototypes.id;


--
-- Name: project; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE project (
    "fullName" text,
    description text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    "drugsInWeek" integer,
    "startWeek" integer
);


ALTER TABLE public.project OWNER TO postgres;

--
-- Name: project_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE project_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.project_id_seq OWNER TO postgres;

--
-- Name: project_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE project_id_seq OWNED BY project.id;


--
-- Name: project_promos__promo_promos_promo; Type: TABLE; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

CREATE TABLE project_promos__promo_promos_promo (
    id integer NOT NULL,
    project_promos integer,
    promo_promos_promo integer
);


ALTER TABLE public.project_promos__promo_promos_promo OWNER TO adminaqvlyey;

--
-- Name: project_promos__promo_promos_promo_id_seq; Type: SEQUENCE; Schema: public; Owner: adminaqvlyey
--

CREATE SEQUENCE project_promos__promo_promos_promo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.project_promos__promo_promos_promo_id_seq OWNER TO adminaqvlyey;

--
-- Name: project_promos__promo_promos_promo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adminaqvlyey
--

ALTER SEQUENCE project_promos__promo_promos_promo_id_seq OWNED BY project_promos__promo_promos_promo.id;


--
-- Name: promo; Type: TABLE; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

CREATE TABLE promo (
    name text,
    key text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.promo OWNER TO adminaqvlyey;

--
-- Name: promo_id_seq; Type: SEQUENCE; Schema: public; Owner: adminaqvlyey
--

CREATE SEQUENCE promo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.promo_id_seq OWNER TO adminaqvlyey;

--
-- Name: promo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adminaqvlyey
--

ALTER SEQUENCE promo_id_seq OWNED BY promo.id;


--
-- Name: report; Type: TABLE; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

CREATE TABLE report (
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    query text,
    "desc" text,
    fields json
);


ALTER TABLE public.report OWNER TO adminaqvlyey;

--
-- Name: report_id_seq; Type: SEQUENCE; Schema: public; Owner: adminaqvlyey
--

CREATE SEQUENCE report_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.report_id_seq OWNER TO adminaqvlyey;

--
-- Name: report_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adminaqvlyey
--

ALTER SEQUENCE report_id_seq OWNED BY report.id;


--
-- Name: route; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE route (
    name text,
    description text,
    merchant integer,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.route OWNER TO postgres;

--
-- Name: route_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE route_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.route_id_seq OWNER TO postgres;

--
-- Name: route_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE route_id_seq OWNED BY route.id;


--
-- Name: territory; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE territory (
    name text,
    info text,
    "baseCity" text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.territory OWNER TO postgres;

--
-- Name: territory_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE territory_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.territory_id_seq OWNER TO postgres;

--
-- Name: territory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE territory_id_seq OWNED BY territory.id;


--
-- Name: tradenet; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE tradenet (
    "fullName" text,
    "shortName" text,
    description text,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public.tradenet OWNER TO postgres;

--
-- Name: tradenet_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE tradenet_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tradenet_id_seq OWNER TO postgres;

--
-- Name: tradenet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE tradenet_id_seq OWNED BY tradenet.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE "user" (
    username text NOT NULL,
    email text NOT NULL,
    id integer NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE user_id_seq OWNED BY "user".id;


--
-- Name: vw_attendance_min_dist; Type: VIEW; Schema: public; Owner: adminaqvlyey
--

CREATE VIEW vw_attendance_min_dist AS
SELECT a.id AS attendance, min(distance(p.latitude, p.longitude, ap.latitude, ap.longitude)) AS min_dist FROM ((attendance a JOIN attendancephoto ap ON ((ap.attendance = a.id))) JOIN pharmacy p ON ((a.pharmacy = p.id))) GROUP BY a.id;


ALTER TABLE public.vw_attendance_min_dist OWNER TO adminaqvlyey;

--
-- Name: vw_attendance_promos; Type: VIEW; Schema: public; Owner: adminaqvlyey
--

CREATE VIEW vw_attendance_promos AS
SELECT ap.attendance_promos AS attendance, string_agg(p.name, ', '::text) AS names, array_agg(p.id) AS ids, string_agg(p.key, ', '::text) AS keys FROM (attendance_promos__promo_promos_promo ap JOIN promo p ON ((ap.promo_promos_promo = p.id))) GROUP BY ap.attendance_promos;


ALTER TABLE public.vw_attendance_promos OWNER TO adminaqvlyey;

--
-- Name: vw_last_attendances; Type: VIEW; Schema: public; Owner: adminaqvlyey
--

CREATE VIEW vw_last_attendances AS
SELECT a.merchant, a.pharmacy, a.date, a.distance, a.category_net, a.telephone, a."purchaserFIO", a."pharmacistCount", a.id, a."createdAt", a."updatedAt" FROM attendance a, (SELECT attendance.merchant, attendance.pharmacy, max(attendance.date) AS max_date FROM attendance GROUP BY attendance.merchant, attendance.pharmacy) x WHERE (((a.merchant = x.merchant) AND (a.pharmacy = x.pharmacy)) AND (a.date = x.max_date));


ALTER TABLE public.vw_last_attendances OWNER TO adminaqvlyey;

--
-- Name: vw_merchant_pharmacies; Type: VIEW; Schema: public; Owner: adminaqvlyey
--

CREATE VIEW vw_merchant_pharmacies AS
SELECT p.id AS pharmacy, m.id AS merchant, p."shortName", p."fullName", p.address, p.tradenet, (SELECT COALESCE(tn."shortName", tn."fullName", 'NONE'::text) AS "coalesce" FROM tradenet tn WHERE (tn.id = p.tradenet)) AS tradenet_desc, p.territory, (SELECT NULLIF(t.name, 'NONE'::text) AS "nullif" FROM territory t WHERE (t.id = p.territory)) AS territory_desc, p."categoryOTC", p."categorySBL" FROM pharmacy p, merchant m WHERE (p.territory = m.territory);


ALTER TABLE public.vw_merchant_pharmacies OWNER TO adminaqvlyey;

--
-- Name: id; Type: DEFAULT; Schema: public; Owner: adminaqvlyey
--

ALTER TABLE ONLY attendance ALTER COLUMN id SET DEFAULT nextval('attendance_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: adminaqvlyey
--

ALTER TABLE ONLY attendance_promos__promo_promos_promo ALTER COLUMN id SET DEFAULT nextval('attendance_promos__promo_promos_promo_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: adminaqvlyey
--

ALTER TABLE ONLY attendancegpspoint ALTER COLUMN id SET DEFAULT nextval('attendancegpspoint_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: adminaqvlyey
--

ALTER TABLE ONLY attendancephoto ALTER COLUMN id SET DEFAULT nextval('attendancephoto_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: adminaqvlyey
--

ALTER TABLE ONLY attendanceresult ALTER COLUMN id SET DEFAULT nextval('attendanceresult_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: adminaqvlyey
--

ALTER TABLE ONLY categoryinnet ALTER COLUMN id SET DEFAULT nextval('categoryinnet_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: adminaqvlyey
--

ALTER TABLE ONLY categoryinnet_categoryinnet_categoryinnet__project_categoryinne ALTER COLUMN id SET DEFAULT nextval('categoryinnet_categoryinnet_categoryinnet__project_categ_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: adminaqvlyey
--

ALTER TABLE ONLY categoryinnet_netcats_categoryinnet__project_netcats ALTER COLUMN id SET DEFAULT nextval('categoryinnet_netcats_categoryinnet__project_netcats_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY company ALTER COLUMN id SET DEFAULT nextval('company_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY company_drugs__drug_drugs_drug ALTER COLUMN id SET DEFAULT nextval('company_drugs__drug_drugs_drug_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY device ALTER COLUMN id SET DEFAULT nextval('device_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY drug ALTER COLUMN id SET DEFAULT nextval('drug_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY drug_projects__project_drugs ALTER COLUMN id SET DEFAULT nextval('drug_projects__project_drugs_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY druginfotype ALTER COLUMN id SET DEFAULT nextval('druginfotype_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY druginfotype_druginfotypes_druginfotype__project_druginfotypes ALTER COLUMN id SET DEFAULT nextval('druginfotype_druginfotypes_druginfotype__project_druginf_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY druginfotype_infos_druginfotype__project_infos ALTER COLUMN id SET DEFAULT nextval('druginfotype_infos_druginfotype__project_infos_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hospital ALTER COLUMN id SET DEFAULT nextval('hospital_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hospital_hospitals_hospital__pharmacy_hospitals ALTER COLUMN id SET DEFAULT nextval('hospital_hospitals_hospital__pharmacy_hospitals_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hospital_pharmacies__pharmacy_pharmacies_pharmacy ALTER COLUMN id SET DEFAULT nextval('hospital_pharmacies__pharmacy_pharmacies_pharmacy_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY manager ALTER COLUMN id SET DEFAULT nextval('manager_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY merchant ALTER COLUMN id SET DEFAULT nextval('merchant_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY passport ALTER COLUMN id SET DEFAULT nextval('passport_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY pharmacy ALTER COLUMN id SET DEFAULT nextval('pharmacy_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY pharmacy_pharmacies_pharmacy__route_pharmacies ALTER COLUMN id SET DEFAULT nextval('pharmacy_pharmacies_pharmacy__route_pharmacies_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: adminaqvlyey
--

ALTER TABLE ONLY pharmacylayouttype ALTER COLUMN id SET DEFAULT nextval('pharmacylayouttype_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: adminaqvlyey
--

ALTER TABLE ONLY photosubtype ALTER COLUMN id SET DEFAULT nextval('photosubtype_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: adminaqvlyey
--

ALTER TABLE ONLY phototype ALTER COLUMN id SET DEFAULT nextval('phototype_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: adminaqvlyey
--

ALTER TABLE ONLY phototype_phototypes_phototype__project_phototypes ALTER COLUMN id SET DEFAULT nextval('phototype_phototypes_phototype__project_phototypes_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY project ALTER COLUMN id SET DEFAULT nextval('project_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: adminaqvlyey
--

ALTER TABLE ONLY project_promos__promo_promos_promo ALTER COLUMN id SET DEFAULT nextval('project_promos__promo_promos_promo_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: adminaqvlyey
--

ALTER TABLE ONLY promo ALTER COLUMN id SET DEFAULT nextval('promo_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: adminaqvlyey
--

ALTER TABLE ONLY report ALTER COLUMN id SET DEFAULT nextval('report_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY route ALTER COLUMN id SET DEFAULT nextval('route_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY territory ALTER COLUMN id SET DEFAULT nextval('territory_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY tradenet ALTER COLUMN id SET DEFAULT nextval('tradenet_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "user" ALTER COLUMN id SET DEFAULT nextval('user_id_seq'::regclass);


--
-- Name: attendance_pkey; Type: CONSTRAINT; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

ALTER TABLE ONLY attendance
    ADD CONSTRAINT attendance_pkey PRIMARY KEY (id);


--
-- Name: attendance_promos__promo_promos_promo_pkey; Type: CONSTRAINT; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

ALTER TABLE ONLY attendance_promos__promo_promos_promo
    ADD CONSTRAINT attendance_promos__promo_promos_promo_pkey PRIMARY KEY (id);


--
-- Name: attendancegpspoint_pkey; Type: CONSTRAINT; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

ALTER TABLE ONLY attendancegpspoint
    ADD CONSTRAINT attendancegpspoint_pkey PRIMARY KEY (id);


--
-- Name: attendancephoto_pkey; Type: CONSTRAINT; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

ALTER TABLE ONLY attendancephoto
    ADD CONSTRAINT attendancephoto_pkey PRIMARY KEY (id);


--
-- Name: attendanceresult_pkey; Type: CONSTRAINT; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

ALTER TABLE ONLY attendanceresult
    ADD CONSTRAINT attendanceresult_pkey PRIMARY KEY (id);


--
-- Name: categoryinnet_categoryinnet_categoryinnet__project_categor_pkey; Type: CONSTRAINT; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

ALTER TABLE ONLY categoryinnet_categoryinnet_categoryinnet__project_categoryinne
    ADD CONSTRAINT categoryinnet_categoryinnet_categoryinnet__project_categor_pkey PRIMARY KEY (id);


--
-- Name: categoryinnet_netcats_categoryinnet__project_netcats_pkey; Type: CONSTRAINT; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

ALTER TABLE ONLY categoryinnet_netcats_categoryinnet__project_netcats
    ADD CONSTRAINT categoryinnet_netcats_categoryinnet__project_netcats_pkey PRIMARY KEY (id);


--
-- Name: categoryinnet_pkey; Type: CONSTRAINT; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

ALTER TABLE ONLY categoryinnet
    ADD CONSTRAINT categoryinnet_pkey PRIMARY KEY (id);


--
-- Name: company_drugs__drug_drugs_drug_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY company_drugs__drug_drugs_drug
    ADD CONSTRAINT company_drugs__drug_drugs_drug_pkey PRIMARY KEY (id);


--
-- Name: company_fullName_key; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY company
    ADD CONSTRAINT "company_fullName_key" UNIQUE ("fullName");


--
-- Name: company_officialName_key; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY company
    ADD CONSTRAINT "company_officialName_key" UNIQUE ("officialName");


--
-- Name: company_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY company
    ADD CONSTRAINT company_pkey PRIMARY KEY (id);


--
-- Name: company_shortName_key; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY company
    ADD CONSTRAINT "company_shortName_key" UNIQUE ("shortName");


--
-- Name: device_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY device
    ADD CONSTRAINT device_pkey PRIMARY KEY (id);


--
-- Name: drug_fullName_key; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY drug
    ADD CONSTRAINT "drug_fullName_key" UNIQUE ("fullName");


--
-- Name: drug_officialName_key; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY drug
    ADD CONSTRAINT "drug_officialName_key" UNIQUE ("officialName");


--
-- Name: drug_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY drug
    ADD CONSTRAINT drug_pkey PRIMARY KEY (id);


--
-- Name: drug_projects__project_drugs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY drug_projects__project_drugs
    ADD CONSTRAINT drug_projects__project_drugs_pkey PRIMARY KEY (id);


--
-- Name: druginfotype_druginfotypes_druginfotype__project_druginfot_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY druginfotype_druginfotypes_druginfotype__project_druginfotypes
    ADD CONSTRAINT druginfotype_druginfotypes_druginfotype__project_druginfot_pkey PRIMARY KEY (id);


--
-- Name: druginfotype_infos_druginfotype__project_infos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY druginfotype_infos_druginfotype__project_infos
    ADD CONSTRAINT druginfotype_infos_druginfotype__project_infos_pkey PRIMARY KEY (id);


--
-- Name: druginfotype_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY druginfotype
    ADD CONSTRAINT druginfotype_pkey PRIMARY KEY (id);


--
-- Name: hospital_fullName_key; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY hospital
    ADD CONSTRAINT "hospital_fullName_key" UNIQUE ("fullName");


--
-- Name: hospital_hospitals_hospital__pharmacy_hospitals_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY hospital_hospitals_hospital__pharmacy_hospitals
    ADD CONSTRAINT hospital_hospitals_hospital__pharmacy_hospitals_pkey PRIMARY KEY (id);


--
-- Name: hospital_officialName_key; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY hospital
    ADD CONSTRAINT "hospital_officialName_key" UNIQUE ("officialName");


--
-- Name: hospital_pharmacies__pharmacy_pharmacies_pharmacy_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY hospital_pharmacies__pharmacy_pharmacies_pharmacy
    ADD CONSTRAINT hospital_pharmacies__pharmacy_pharmacies_pharmacy_pkey PRIMARY KEY (id);


--
-- Name: hospital_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY hospital
    ADD CONSTRAINT hospital_pkey PRIMARY KEY (id);


--
-- Name: hospital_shortName_key; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY hospital
    ADD CONSTRAINT "hospital_shortName_key" UNIQUE ("shortName");


--
-- Name: manager_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY manager
    ADD CONSTRAINT manager_pkey PRIMARY KEY (id);


--
-- Name: merchant_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY merchant
    ADD CONSTRAINT merchant_pkey PRIMARY KEY (id);


--
-- Name: passport_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY passport
    ADD CONSTRAINT passport_pkey PRIMARY KEY (id);


--
-- Name: pharmacy_pharmacies_pharmacy__route_pharmacies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY pharmacy_pharmacies_pharmacy__route_pharmacies
    ADD CONSTRAINT pharmacy_pharmacies_pharmacy__route_pharmacies_pkey PRIMARY KEY (id);


--
-- Name: pharmacy_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY pharmacy
    ADD CONSTRAINT pharmacy_pkey PRIMARY KEY (id);


--
-- Name: pharmacylayouttype_pkey; Type: CONSTRAINT; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

ALTER TABLE ONLY pharmacylayouttype
    ADD CONSTRAINT pharmacylayouttype_pkey PRIMARY KEY (id);


--
-- Name: photosubtype_pkey; Type: CONSTRAINT; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

ALTER TABLE ONLY photosubtype
    ADD CONSTRAINT photosubtype_pkey PRIMARY KEY (id);


--
-- Name: phototype_phototypes_phototype__project_phototypes_pkey; Type: CONSTRAINT; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

ALTER TABLE ONLY phototype_phototypes_phototype__project_phototypes
    ADD CONSTRAINT phototype_phototypes_phototype__project_phototypes_pkey PRIMARY KEY (id);


--
-- Name: phototype_pkey; Type: CONSTRAINT; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

ALTER TABLE ONLY phototype
    ADD CONSTRAINT phototype_pkey PRIMARY KEY (id);


--
-- Name: project_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY project
    ADD CONSTRAINT project_pkey PRIMARY KEY (id);


--
-- Name: project_promos__promo_promos_promo_pkey; Type: CONSTRAINT; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

ALTER TABLE ONLY project_promos__promo_promos_promo
    ADD CONSTRAINT project_promos__promo_promos_promo_pkey PRIMARY KEY (id);


--
-- Name: promo_pkey; Type: CONSTRAINT; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

ALTER TABLE ONLY promo
    ADD CONSTRAINT promo_pkey PRIMARY KEY (id);


--
-- Name: report_pkey; Type: CONSTRAINT; Schema: public; Owner: adminaqvlyey; Tablespace: 
--

ALTER TABLE ONLY report
    ADD CONSTRAINT report_pkey PRIMARY KEY (id);


--
-- Name: route_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY route
    ADD CONSTRAINT route_pkey PRIMARY KEY (id);


--
-- Name: territory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY territory
    ADD CONSTRAINT territory_pkey PRIMARY KEY (id);


--
-- Name: tradenet_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY tradenet
    ADD CONSTRAINT tradenet_pkey PRIMARY KEY (id);


--
-- Name: user_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_email_key UNIQUE (email);


--
-- Name: user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: user_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_username_key UNIQUE (username);


--
-- Name: company_fullName; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE INDEX "company_fullName" ON company USING btree ("fullName");


--
-- Name: company_officialName; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE INDEX "company_officialName" ON company USING btree ("officialName");


--
-- Name: company_shortName; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE INDEX "company_shortName" ON company USING btree ("shortName");


--
-- Name: drug_fullName; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE INDEX "drug_fullName" ON drug USING btree ("fullName");


--
-- Name: drug_officialName; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE INDEX "drug_officialName" ON drug USING btree ("officialName");


--
-- Name: hospital_fullName; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE INDEX "hospital_fullName" ON hospital USING btree ("fullName");


--
-- Name: hospital_officialName; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE INDEX "hospital_officialName" ON hospital USING btree ("officialName");


--
-- Name: hospital_shortName; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE INDEX "hospital_shortName" ON hospital USING btree ("shortName");


--
-- Name: tradenet_fullName; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE INDEX "tradenet_fullName" ON tradenet USING btree ("fullName");


--
-- Name: tradenet_shortName; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE INDEX "tradenet_shortName" ON tradenet USING btree ("shortName");


--
-- Name: user_email; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE INDEX user_email ON "user" USING btree (email);


--
-- Name: user_username; Type: INDEX; Schema: public; Owner: postgres; Tablespace: 
--

CREATE INDEX user_username ON "user" USING btree (username);


--
-- PostgreSQL database dump complete
--

