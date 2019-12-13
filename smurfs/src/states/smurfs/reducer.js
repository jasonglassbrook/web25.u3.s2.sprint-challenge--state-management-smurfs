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

      case types.GET_VILLAGE_TRY:
        hi.flag ('log', 'getting avatar : start...');
        return {
          ...state,
          isGettingVillage : true,
        };

      case types.GET_VILLAGE_SUCCESS:
        hi.flag ('log', 'getting avatar : success! ');
        return {
          ...state,
          village : data,
          isGettingVillage : false,
          error : '',
        };

      case types.GET_VILLAGE_FAILURE:
        hi.flag ('log', 'getting avatar : failure! ');
        return {
          ...state,
          isGettingVillage : false,
          error : data,
        };

      // else
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
