import { apiCall } from "./api/api";
import { InitialSearchField, IRequestRobotMiddleware } from "./types/initials";
import { AppActions } from "./types/actions";

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

export const setSearchField = (text: InitialSearchField): AppActions => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

// because we are returning a function we can identify that its a middleware that need a dispatch. If its a obj its going to avoid the middleware.
export const requestRobots = () => (dispatch: IRequestRobotMiddleware) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  apiCall("https://jsonplaceholder.typicode.com/users")
    .then(data =>
      dispatch({
        type: REQUEST_ROBOTS_SUCCESS,
        payload: data
      })
    )
    .catch(error =>
      dispatch({
        type: REQUEST_ROBOTS_FAILED,
        payload: error
      })
    );
};
