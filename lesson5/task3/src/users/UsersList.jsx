import React from 'react';
import User from './User';

const UsersList = ({ users }) => (
  <ul className="users">
    {users.map(user => (
      <User key={user.id} {...user} />
    ))}
  </ul>
);

export default UsersList;
