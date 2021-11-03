export const CHANGE_FILTER = 'CHANGE_FILTER';

export const changeFilter = text => ({
  type: CHANGE_FILTER,
  payload: {
    text,
  },
});
