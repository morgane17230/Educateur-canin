import api from './api';

import {
  setUsers,
  SEARCH_CITY,
  SEARCH_ADDRESS,
  setAddress,
  SEARCH_USERS,
  setCity,
  setChosenUser,
  CREATE_USER,
} from '../actions/user';
import { setError } from '../actions/global';

const event = (store) => (next) => async (action) => {
  switch (action.type) {
    case CREATE_USER: {
      const {
        lastname,
        firstname,
        email,
        phone,
        address,
        startTime,
        endTime,
        eventAddress,
        prestaId,
        eventLat,
        eventLon,
      } = store.getState().global;

      try {
        const newUser = await api.post('/user', {
          lastname,
          firstname,
          email,
          phone,
          address: address.properties.label,
          lat: address.geometry.coordinates[0],
          lon: address.geometry.coordinates[1],
          active: true,
        });
        await api.post('/event', {
          start_time: Date.parse(startTime),
          end_time: Date.parse(endTime),
          address: eventAddress,
          lat: eventLat,
          lon: eventLon,
          user_id: newUser.data.id,
          paid: false,
          presta_id: prestaId,
        });
        const actionSetUser = setChosenUser(newUser.data);
        store.dispatch(actionSetUser);
      }
      catch (error) {
        const actionGetError = setError(error.response);
        store.dispatch(actionGetError);
      }
      break;
    }

    case SEARCH_USERS: {
      try {
        const users = await api.get(`/user/${action.payload}`);
        const actionSearchUser = setUsers(users.data);
        store.dispatch(actionSearchUser);
      }
      catch (error) {
        const actionGetError = setError(error.response);
        store.dispatch(actionGetError);
      }
      break;
    }

    case SEARCH_CITY: {
      try {
        const cityFind = await api.get(
          `https://geo.api.gouv.fr/communes?codeDepartement=17&nom=${action.city}&format=json&&limit=10`,
        );
        const actionSearchCity = setCity(cityFind.data);
        store.dispatch(actionSearchCity);
      }
      catch (error) {
        const actionGetError = setError(error.response);
        store.dispatch(actionGetError);
      }
      break;
    }

    case SEARCH_ADDRESS: {
      const { city } = store.getState().global;
      try {
        const addresses = await api.get(
          `https://api-adresse.data.gouv.fr/search/?q=${action.address}&postcode=${city.codesPostaux[0]}&limit=100`,
        );
        const actionSearchAddress = setAddress(addresses.data.features);
        store.dispatch(actionSearchAddress);
      }
      catch (error) {
        const actionGetError = setError(error.response);
        store.dispatch(actionGetError);
      }
      break;
    }

    default:
      next(action);
  }
};

export default event;
