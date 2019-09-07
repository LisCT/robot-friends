// Initials Interfaces  -------

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

export interface InitialSearchField {
  searchField: string;
}

export interface ISearchAction {
  type: string;
  payload: string;
}

export interface IrequestRobots {
  isPending: boolean;
  robots: Array<IRobot> | string;
  error: string;
}

export interface IRequestRobotMiddleware {
  (arg0: { type: string }): void;
  (arg0: { type: string; payload: any }): void;
  (arg0: { type: string; payload: any }): void;
}
