export const ADDUSER = 'ADD/ADDUSER';
export const DELETEUSER = 'DELETE/DELETEUSER';

export const addUser = userData => ({
  type: ADDUSER,
  userData,
});

export const deleteUser = id => ({
  type: DELETEUSER,
  id,
});
