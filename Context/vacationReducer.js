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
                svezia: action.payload.filter(item => item.country.name.toLowerCase() === "svezia"),
                francia: action.payload.filter(item => item.country.name.toLowerCase() === "francia"),
                usa: action.payload.filter(item => item.country.name.toLowerCase() === "stati uniti d'america"),
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
                sveziaImg:
                    action.
                        payload.
                        filter(item => item.country.name.toLowerCase() === "svezia")
                    [Math.floor(Math.random() * action.payload.filter(item => item.country.name.toLowerCase() === "svezia").length)].cover_image_url,
                usaImg:
                    action.
                        payload.
                        filter(item => item.country.name.toLowerCase() === "stati uniti d'america")
                    [Math.floor(Math.random() * action.payload.filter(item => item.country.name.toLowerCase() === "stati uniti d'america").length)].cover_image_url,
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