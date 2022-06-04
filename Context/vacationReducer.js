import {
    FETCH_ALL_VACATION_ERROR,
    FETCH_ALL_VACATION_REQUEST,
    FETCH_ALL_VACATION_SUCCESS,
    FETCH_ALL_CITY_ERROR,
    FETCH_ALL_CITY_REQUEST,
    FETCH_ALL_CITY_SUCCESS
} from "./constants";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_ALL_VACATION_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_ALL_VACATION_SUCCESS:
            // const i = Math.floor(Math.random() * imgs.length);
            return {
                ...state,
                loading: false,
                vacation: action.payload,
                italia: action.payload.filter(item => item.country.name.toLowerCase() === "italia"),
                spagna: action.payload.filter(item => item.country.name.toLowerCase() === "spagna"),
                francia: action.payload.filter(item => item.country.name.toLowerCase() === "francia"),
                romania: action.payload.filter(item => item.country.name.toLowerCase() === "romania"),
                italiaImg:
                    action.
                        payload.
                        filter(item => item.country.name.toLowerCase() === "italia")
                    [Math.floor(Math.random() * action.payload.filter(item => item.country.name.toLowerCase() === "italia").length)].cover_image_url,
                franciaImg:
                    action.
                        payload.
                        filter(item => item.country.name.toLowerCase() === "francia")
                    [Math.floor(Math.random() * action.payload.filter(item => item.country.name.toLowerCase() === "francia").length)].cover_image_url,
                spagnaImg:
                    action.
                        payload.
                        filter(item => item.country.name.toLowerCase() === "spagna")
                    [Math.floor(Math.random() * action.payload.filter(item => item.country.name.toLowerCase() === "spagna").length)].cover_image_url,
                romaniaImg:
                    action.
                        payload.
                        filter(item => item.country.name.toLowerCase() === "romania")
                    [Math.floor(Math.random() * action.payload.filter(item => item.country.name.toLowerCase() === "romania").length)].cover_image_url,
            };

        case FETCH_ALL_VACATION_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_ALL_CITY_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_ALL_CITY_SUCCESS:
            return {
                ...state,
                loading: false,
                city: action.payload
            };

        case FETCH_ALL_CITY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state

    }
}