import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "../constants";

import { InitialSearchField } from "./initials";

export interface ISetASearchField {
  type: typeof CHANGE_SEARCH_FIELD;
  payload: InitialSearchField;
}

//  Request Robots Thunk -- Pending

export type AppActions = ISetASearchField;
