import { CHANGE_FILTER } from './user.actions';
import users from '../users';

const initialState = {
  users: { filterText: '', usersList: users },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      const { text } = action.payload;
      const { usersList } = state.users;
      let filteredList = users;

      if (text) {
        filteredList = usersList.filter(user =>
          user.name.toUpperCase().includes(text.toUpperCase()),
        );
      }
      return {
        ...state,
        users: { ...state.users, filterText: text, usersList: filteredList },
      };
    }
    default:
      return state;
  }
};

export default userReducer;
