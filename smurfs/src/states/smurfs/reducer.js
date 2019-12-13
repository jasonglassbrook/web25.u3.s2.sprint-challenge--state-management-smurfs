/// tools ///
import hi from 'tools/hi';
// import iffy from 'tools/iffy';
// import immutably from 'tools/immutably';
// import nullably from 'tools/nullably';

/// internal modules ///
import initState from './init'
import { types } from './actions';

/***************************************
  MAIN
----------------------------------------
  - reducer : state reducer
***************************************/

const reducer = (state = initState, action) => {
  const { type, data } = action;

  /// do it! ///
  try {
    /// actions ///
    switch (type) {

      /// GET_VILLAGE ///
      case types.GET_VILLAGE_TRY:
        return {
          ...state,
          isGettingVillage : true,
        };

      case types.GET_VILLAGE_SUCCESS:
        return {
          ...state,
          village : data,
          isGettingVillage : false,
          error : '',
        };

      case types.GET_VILLAGE_FAILURE:
        return {
          ...state,
          isGettingVillage : false,
          error : data,
        };

      /// POST_SMURF ///
      case types.POST_SMURF_TRY:
        return {
          ...state,
          smurf : data,
          isPostingSmurf : true,
        };

      case types.POST_SMURF_SUCCESS:
        return {
          ...state,
          smurf : {}, // reset
          isPostingSmurf : false,
          error : '',
        };

      case types.POST_SMURF_FAILURE:
        return {
          ...state,
          isPostingSmurf : false,
          error : data,
        };

      /// PUT_SMURF ///
      case types.PUT_SMURF_TRY:
        return {
          ...state,
          smurf : data,
          isPuttingSmurf : true,
        };

      case types.PUT_SMURF_SUCCESS:
        return {
          ...state,
          smurf : {}, // reset
          isPuttingSmurf : false,
          error : '',
        };

      case types.PUT_SMURF_FAILURE:
        return {
          ...state,
          isPuttingSmurf : false,
          error : data,
        };

      /// DELETE_SMURF ///
      case types.DELETE_SMURF_TRY:
        return {
          ...state,
          smurf : data,
          isDeletingSmurf : true,
        };

      case types.DELETE_SMURF_SUCCESS:
        return {
          ...state,
          smurf : {}, // reset
          isDeletingSmurf : false,
          error : '',
        };

      case types.DELETE_SMURF_FAILURE:
        return {
          ...state,
          isDeletingSmurf : false,
          error : data,
        };

      /// else ///
      default :
        hi.flag ('warn', 'action not defined');
        console.log (action);
        return (state);
    };
  }
  catch (error) {
    hi.flag ('error', 'something bad happened');
    console.error (error);
  }
};

/**************************************/

export default reducer;
