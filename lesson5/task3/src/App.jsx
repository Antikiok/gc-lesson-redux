import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from './users/user.actions';

import UsersList from './users/UsersList';

const App = ({ usersList, changeSearchHandler, searchStr }) => (
  <div>
    <div className="filter">
      <span className="filter__count">{usersList.length}</span>
      <input
        type="text"
        className="filter__input"
        value={searchStr}
        onChange={e => changeSearchHandler(e.target.value)}
      />
    </div>
    <UsersList users={usersList} />
  </div>
);

const mapState = state => ({ usersList: state.users.usersList, searchStr: state.users.filterText });

const mapDispatch = {
  changeSearchHandler: changeFilter,
};

export default connect(mapState, mapDispatch)(App);
