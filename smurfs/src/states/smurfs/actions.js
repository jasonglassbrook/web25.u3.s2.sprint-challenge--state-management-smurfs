import axios from 'axios';

/***************************************
  MAIN
----------------------------------------
  - types    : list of action types
  - make     : fun to make (create) an action obj
  - makers   : obj of action maker (creator) funs
  - specials : obj of specialized dispatchers
***************************************/

/*--------------------------------------
  actions / types
--------------------------------------*/
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

/*--------------------------------------
  actions / make, makers
--------------------------------------*/
const make = (type, data) => ({ type, data });

export const makers = Object.fromEntries (
  Object.keys (types).map ((name) => [
    name, (...args) => make (name, ...args)
  ])
);

/*--------------------------------------
  actions / specials
--------------------------------------*/
export const specials = {
  getVillage   : {},
  addSmurf     : {},
  editSmurf    : {},
  deleteSmurf  : {},
};

const api = {
  baseURL : 'http://localhost:3333/smurfs',
  village : {},
  smurf   : {},
};
api.village.get  = () => (api.baseURL);
api.smurf.post   = () => (api.baseURL);
api.smurf.put    = (id) => (`${api.baseURL}/${id}`);
api.smurf.delete = (id) => (`${api.baseURL}/${id}`);

/*------------------
  getVillage
------------------*/
specials.getVillage = () => (dispatch /*, getState */) => {
  dispatch (make (types.GET_VILLAGE_TRY));
  axios
    .get (api.village.get ())
    .then ((response) => {
      console.log (response);
      dispatch (make (types.GET_VILLAGE_SUCCESS, response.data));
    })
    .catch ((error) => {
      console.log (error);
      dispatch (make (types.GET_VILLAGE_FAILURE, error.response));
    });
};

/*------------------
  postSmurf
------------------*/
specials.postSmurf = () => (dispatch, getState) => {
  const { smurf } = getState ();

  dispatch (make (types.POST_SMURF_TRY, smurf));
  axios
    .post (api.smurf.post (), smurf)
    .then ((response) => {
      console.log (response);
      dispatch (make (types.POST_SMURF_SUCCESS, response.data));
    })
    .catch ((error) => {
      console.log (error);
      dispatch (make (types.POST_SMURF_FAILURE, error.response));
    });
};

/*------------------
  putSmurf
------------------*/
specials.putSmurf = () => (dispatch, getState) => {
  const { smurf } = getState ();

  dispatch (make (types.PUT_SMURF_TRY, smurf));
  axios
    .get (api.smurf.put (smurf.id), smurf)
    .then ((response) => {
      console.log (response);
      dispatch (make (types.PUT_SMURF_SUCCESS, response.data));
    })
    .catch ((error) => {
      console.log (error);
      dispatch (make (types.PUT_SMURF_FAILURE, error.response));
    });
};

/*------------------
  deleteSmurf
------------------*/
specials.deleteSmurf = () => (dispatch, getState) => {
  const { smurf } = getState ();

  dispatch (make (types.DELETE_SMURF_TRY, smurf));
  axios
    .get (api.smurf.delete (smurf.id), smurf)
    .then ((response) => {
      console.log (response);
      dispatch (make (types.DELETE_SMURF_SUCCESS, response.data));
    })
    .catch ((error) => {
      console.log (error);
      dispatch (make (types.DELETE_SMURF_FAILURE, error.response));
    });
};

/**************************************/

export default {
  types,
  makers,
  specials,
};
