export const ADDUSER = 'USERACTIONS/ADDUSER';
export const DELETEUSER = 'USERACTIONS/DELETEUSER';

export const addUser = userList => ({
  type: ADDUSER,
  userList,
});

export const deleteUser = id => ({
  type: DELETEUSER,
  id,
});
