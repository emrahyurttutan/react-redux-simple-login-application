import { DASHBOARD_DRAWER_OPEN } from "../actions/action-type";

const initialState = {
  drawerOpen: false
};

const dashboardReducers = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_DRAWER_OPEN:
      return {
        ...state,
        drawerOpen: action.drawerOpen
      };
    default:
      return state;
  }
};

export default dashboardReducers;
