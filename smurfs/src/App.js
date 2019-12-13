/// external modules ///
import React from 'react';

/// styles ///
import './styles/App.css';

/// components ///
import SmurfsVillage from 'components/SmurfsVillage';

/***************************************
  COMPONENT
***************************************/
class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <p>Welcome to your state management version of Smurfs!</p>
          <p>Start inside of your `src/index.js` file!</p>
          <p>Have fun!</p>
        </header>
        <main>
          <SmurfsVillage/>
        </main>
      </div>
    );
  };
};

/**************************************/

export default App;
