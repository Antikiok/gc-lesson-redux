import { CHANGE_FILTER } from './user.actions';
import users from '../users';

const initialState = {
  users: { filterText: '', usersList: users },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      const searchText = action.payload;
      const { usersList } = state.users;

      let filteredList = users;

      if (searchText) {
        filteredList = usersList.filter(user =>
          user.name.toUpperCase().includes(searchText.toUpperCase()),
        );
      }
      return {
        ...state,
        users: { ...state.users, filterText: searchText, usersList: filteredList },
      };
    }
    default:
      return state;
  }
};

export default userReducer;
