import * as actions from "./actions";
import axios from "axios";

export const loadRestaurents = () => (dispatch) => {
    dispatch(actions.startLoadRestaurents());
    const apiUrl = "https://developers.zomato.com/api/v2.1/search?entity_id=306&entity_type=city";
    axios.get(apiUrl, {
        headers: {"user-key": "zomatokeyhere"},

    })
        .then(response => {
            return response.data;
        })
        .then((restaurants) => {
            dispatch(actions.finishLoadRestaurents(restaurants.restaurants));
        })
        .catch(() => {
            dispatch(actions.failLoadRestaurents());
        });
};

