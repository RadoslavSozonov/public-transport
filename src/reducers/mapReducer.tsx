import { MapActionType } from "../actions/ActionTypes";

const currentMapReducer = (state={} as mapboxgl.Map , action: MapActionType) => {
    switch(action.type){
        case "SET_MAP":
            return {
                ...state,
                map: action.payload
            }
        default: return state
    }
}

export default currentMapReducer;