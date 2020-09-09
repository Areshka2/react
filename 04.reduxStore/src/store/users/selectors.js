export const usersStateSelector = state => state.users;

export const getUserListSelector = state => usersStateSelector(state).usersList;

export const getCurrentUserSelector = state => usersStateSelector(state).currentUser;

export const getAuthStatusSelector = state => getCurrentUserSelector(state).auth; 