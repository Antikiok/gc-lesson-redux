import React from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';

class Users extends React.Component {
  onUserCreate = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User #${id}`,
    };
    this.props.createUser(newUser);
  };

  onUserRemove = id => {
    this.props.removeUser(id);
  };

  render() {
    const { users } = this.props;
    return (
      <div className="users">
        <button className="users__create-btn" onClick={this.onUserCreate}>
          Create user
        </button>
        <ul className="users__list">
          {users.map(user => (
            <li key={user.id} className="users__list-item">
              <span>{user.name}</span>
              <button className="users__delete-btn" onClick={() => this.onUserRemove(user.id)}>
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => ({ users: state.users.usersList });

const mapDispatch = {
  createUser: userActions.addUser,
  removeUser: userActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(Users);

export default ConnectedUsers;
