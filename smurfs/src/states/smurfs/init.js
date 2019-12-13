/***************************************
  MAIN
----------------------------------------
  - init : initial state
***************************************/

const init = {
  /// smurfs village ///
  village : [{}],
  isGettingVillage : false,

  /// some smurf ///
  smurf : {},
  smurfMode : 'add',
  isPostingSmurf : false,
  isPuttingSmurf : false,
  isDeletingSmurf : false,

  /// general status ///
  error : '',
};

/**************************************/

export default init;
