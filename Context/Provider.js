import { createContext, useContext, useReducer } from "react";
import vacationReducer from "./vacationReducer";
import {
  FETCH_ALL_VACATION_ERROR,
  FETCH_ALL_VACATION_REQUEST,
  FETCH_ALL_VACATION_SUCCESS,
  FETCH_ALL_CITY_ERROR,
  FETCH_ALL_CITY_REQUEST,
  FETCH_ALL_CITY_SUCCESS,
  ADD_TO_CART,
} from "./constants";
import axios from "axios";

const defaultState = {
  loading: false,
  error: null,
  vacation: [],
  totalPrice: 0,
  cart: [],
  city: [],
  italia: [],
  russia: [],
  francia: [],
  usa: [],
  italiaImg: "",
  russiaImg: "",
  franciaImg: "",
  usaImg: "",
};

const VacationContext = createContext(defaultState);

export const useVacationContext = () => useContext(VacationContext);

export default ({ children }) => {
  const [state, dispatch] = useReducer(vacationReducer, defaultState);

  const fetchAll = async (par) => {
    dispatch({ type: FETCH_ALL_VACATION_REQUEST });
    try {
      const { data: vacation } = await axios.get(
        `https://sandbox.musement.com/api/v3${par}`
      );
      dispatch({ type: FETCH_ALL_VACATION_SUCCESS, payload: vacation });
    } catch (e) {
      dispatch({ type: FETCH_ALL_VACATION_ERROR, payload: e });
    }
  };

  const fetchCity = async (par) => {
    dispatch({ type: FETCH_ALL_CITY_REQUEST });
    try {
      const { data: city } = await axios.get(
        `https://sandbox.musement.com/api/v3/activities${par}`
      );
      dispatch({ type: FETCH_ALL_CITY_SUCCESS, payload: city });
    } catch (e) {
      dispatch({ type: FETCH_ALL_CITY_ERROR, payload: e });
    }
  };

  const addToCart = async (city) => {
    dispatch({ type: ADD_TO_CART, payload: city });
  };

  const value = { state, fetchAll, fetchCity, addToCart };

  return (
    <VacationContext.Provider value={value}>
      {children}
    </VacationContext.Provider>
  );
};
