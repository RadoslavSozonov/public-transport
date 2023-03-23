import Stop from '../interfaces/Stops';

const setStopIdsMapContAction = (stopIdMapCont: Map<number, Stop>|null) => {
    return {
        type: "SET_STOPIDSMAPCONT",
        payload: stopIdMapCont
    }
};

export default {setStopIdsMapContAction};