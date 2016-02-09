CREATE FUNCTION public.distance(lat1 real, lon1 real, lat2 real, lon2 real) RETURNS real AS $$ 
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
$$ LANGUAGE plpgsql;