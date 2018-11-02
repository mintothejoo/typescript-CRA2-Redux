import * as common from '../types/Common';

const initialState = {
    error: {},
    loading: false,
}

const commonReducer = (state = initialState, action:any) => {
    const { type, payload } = action;
    switch(type){
        case common.DONE:
            return {
                ...state,
                loading: false,
            };
        case common.LOADING:
            return {
                ...state,
                loading: true,
            };
        case common.FAILED:
            return {
                ...state,
                error: payload.error,
            }
        default:
            return state;
    }
};

export default commonReducer;