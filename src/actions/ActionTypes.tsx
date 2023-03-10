const SET_GEODATA = "SET_GEODATA"
const SET_MAP = "SET_MAP"

export interface GeoDataPTLinesActionType{
    type: typeof SET_GEODATA;
    payload: GeoJSON.FeatureCollection<GeoJSON.Geometry>;
}

export interface MapActionType{
    type: typeof SET_MAP;
    payload: mapboxgl.Map;
}

export type ActionTypes = GeoDataPTLinesActionType | MapActionType;