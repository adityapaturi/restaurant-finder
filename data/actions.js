import actionTypes from "./action-types";

export const setCurrentCity = (city) => {
    return {
        type: actionTypes.SET_CURRENT_CITY,
        payload: city
    };
};

export const startLoadRestaurents = () => {
    return {
        type: actionTypes.LOAD_RESTAURENTS_STARTED
    };
};

export const finishLoadRestaurents = (restaurents) => {
    return {
        type: actionTypes.LOAD_RESTAURENTS_SUCCESS,
        payload: restaurents
    };
};

export const failLoadRestaurents = () => {
    return {
        type: actionTypes.LOAD_RESTAURENTS_FAILED
    };
};
