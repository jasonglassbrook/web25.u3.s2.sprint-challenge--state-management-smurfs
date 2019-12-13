/// external modules ///
import React from 'react';
import * as ReactRedux from 'react-redux';
import styled from 'styled-components';

/// styles ///
import 'styles/App.css';
import colors from 'styles/colors';

/// components ///
import SmurfForm from 'components/SmurfForm';
import SmurfsVillage from 'components/SmurfsVillage';

/// states ///
import { actions } from 'states/smurfs';

/***************************************
  COMPONENTS
***************************************/

const AppContainer = styled.div `
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;
  align-items: stretch;

  padding: 0 64px;
  color: White;
  background: #48BB78;
`;

const AppHead = styled.header `
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;

  margin: 16px;
  border-radius: 16px;
  padding: 16px;

  color: Black;
  background: White;

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;

const Heading = styled.h1 ``;

const AppBody = styled.main `
  flex: 1 0 auto;

  margin: 16px;
`;

/***************************************
  REDUX
***************************************/

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  getVillage : actions.specials.getVillage
};

const connect = ReactRedux.connect (
  mapStateToProps, mapDispatchToProps,
);

/***************************************
  MAIN
***************************************/

class App extends React.Component {
  componentDidMount () {
    this.props.getVillage ();
  }

  render () {
    return (
      <AppContainer className="App">
        <AppHead>
          <Heading>SMURFS! 2.0 W/ Redux</Heading>
          <p>Welcome to your state management version of Smurfs!</p>
          <p>Start inside of your `src/index.js` file!</p>
          <p>Have fun!</p>
        </AppHead>
        <AppBody>
          <SmurfForm/>
          <SmurfsVillage/>
        </AppBody>
      </AppContainer>
    );
  };
};

/**************************************/

export default connect (App);
