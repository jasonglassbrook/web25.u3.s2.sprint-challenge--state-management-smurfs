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

      /// ADD_SMURF ///
      case types.ADD_SMURF_TRY:
        return {
          ...state,
          smurf : data,
          isAddingSmurf : true,
        };

      case types.ADD_SMURF_SUCCESS:
        return {
          ...state,
          smurf : {},
          isAddingSmurf : false,
          error : '',
        };

      case types.ADD_SMURF_FAILURE:
        return {
          ...state,
          isAddingSmurf : false,
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
