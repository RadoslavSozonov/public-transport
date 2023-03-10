import {combineReducers} from 'redux';
import currentGeoDataPTLinesReducer from './geoDataPTLinesReducer';
import currentMapReducer from './mapReducer';

const rootReducer = combineReducers({
    currentGeoDataPTLinesReducer: currentGeoDataPTLinesReducer,
    currentMapReducer: currentMapReducer
})

export default rootReducer;