/***************************************
  MAIN
----------------------------------------
  - types    : list of action types
  - make     : fun to make (create) an action obj
  - makers   : obj of action maker (creator) funs
  - specials : obj of specialized dispatchers
***************************************/

export const types = {
  // get
  GET_VILLAGE_TRY     : 'GET_VILLAGE_TRY',
  GET_VILLAGE_SUCCESS : 'GET_VILLAGE_SUCCESS',
  GET_VILLAGE_FAILURE : 'GET_VILLAGE_FAILURE',
  // post
  POST_SMURF_TRY     : 'POST_SMURF_TRY',
  POST_SMURF_SUCCESS : 'POST_SMURF_SUCCESS',
  POST_SMURF_FAILURE : 'POST_SMURF_FAILURE',
  // put
  PUT_SMURF_TRY     : 'PUT_SMURF_TRY',
  PUT_SMURF_SUCCESS : 'PUT_SMURF_SUCCESS',
  PUT_SMURF_FAILURE : 'PUT_SMURF_FAILURE',
  // delete
  DELETE_SMURF_TRY     : 'DELETE_SMURF_TRY',
  DELETE_SMURF_SUCCESS : 'DELETE_SMURF_SUCCESS',
  DELETE_SMURF_FAILURE : 'DELETE_SMURF_FAILURE',
};

const make = (type, data) => ({ type, data });

export const makers = Object.fromEntries (
  Object.keys (types).map ((name) => [
    name, (...args) => make (name, ...args)
  ])
);

/**************************************/

export default {
  types,
  makers,
};
