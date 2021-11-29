import api from "./api";

import { ON_GET_PRESTAS, setPrestas } from "../actions/presta";
import { setError } from "../actions/global";

const presta = (store) => (next) => async (action) => {
  switch (action.type) {
    case ON_GET_PRESTAS: {
      try {
        const prestas = await api.get("/prestas");
        const actionGetPrestas = setPrestas(prestas.data);
        store.dispatch(actionGetPrestas);
      } catch (error) {
        const actionGetError = setError(error.response);
        store.dispatch(actionGetError);
      }
      break;
    }
    default:
      next(action);
  }
};

export default presta;
