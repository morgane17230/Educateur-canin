export const ON_SEARCH_USER = 'ON_SEARCH_USER';
export const SEARCH_USER = 'SEARCH_USER';

export const onSearchUser = (payload) => ({
  type: ON_SEARCH_USER,
  payload,
});

export const searchUser = (payload) => ({
  type: SEARCH_USER,
  payload,
});
