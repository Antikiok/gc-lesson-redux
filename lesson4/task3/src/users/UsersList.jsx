import React from 'react';
import { connect } from 'react-redux';
import User from './User.jsx';
import Pagination from './Pagination.jsx';
import { goNext, goPrev } from '../reducers/user.actions';

const ITEMS_PER_PAGE = 3;

const UsersList = ({ users, goPrevPage, goNextPage, currentPage }) => {
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const usersToRender = users.slice(startIndex, endIndex);

  return (
    <div>
      <Pagination
        goNext={goNextPage}
        goPrev={goPrevPage}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={ITEMS_PER_PAGE}
      />

      <ul className="users">
        {usersToRender.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};
const mapState = state => ({ users: state.users.usersList, currentPage: state.users.currentPage });

const mapDispatch = {
  goNextPage: goNext,
  goPrevPage: goPrev,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
