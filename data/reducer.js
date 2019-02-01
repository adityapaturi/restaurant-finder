import actionTypes from "./action-types";
import constants from "../constants";

const initialState = {
    status: constants.LOAD_PROJECTS_UNSET,
    restaurents: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_RESTAURENTS_STARTED:
            return {...state, status: constants.LOAD_RESTAURENTS_STARTED, restaurents: []};

        case actionTypes.LOAD_RESTAURENTS_SUCCESS:
            return {...state, status: constants.LOAD_RESTAURENTS_SUCCESS, restaurents: action.payload};

        case actionTypes.LOAD_RESTAURENTS_FAILED:
            return {...state, status: constants.LOAD_RESTAURENTS_FAILED};

        default:
            break;
    }

    return state;
};
