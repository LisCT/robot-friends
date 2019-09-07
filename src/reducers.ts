import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants";

import {
  InitialSearchField,
  ISearchAction,
  IrequestRobots
} from "./types/initials";

const stateAction: ISearchAction = {
  type: "",
  payload: ""
};

const stateSearch: InitialSearchField = {
  searchField: ""
};

export const searchRobots = (
  state = stateSearch,
  action = stateAction
): InitialSearchField => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };

    default:
      return state;
  }
};

const stateRobots: IrequestRobots = {
  isPending: false,
  robots: [],
  error: ""
};

export const requestRobots = (
  state = stateRobots,
  action = stateAction
): IrequestRobots => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return {
        ...state,
        isPending: true
      };

    case REQUEST_ROBOTS_SUCCESS:
      return {
        ...state,
        robots: action.payload,
        isPending: false
      };

    case REQUEST_ROBOTS_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      };

    default:
      return state;
  }
};
