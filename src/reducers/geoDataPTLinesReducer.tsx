import { GeoDataPTLinesActionType } from "../actions/ActionTypes";

const currentGeoDataPTLinesReducer = (state={} as GeoJSON.FeatureCollection<GeoJSON.Geometry>, action: GeoDataPTLinesActionType): {} => {
    switch(action.type){
        case "SET_GEODATA":
            return {
                ...state,
                geoData: action.payload
            }
        default: return state
    }
}

export default currentGeoDataPTLinesReducer;
