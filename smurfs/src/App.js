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
  background: ${colors['forest']};
  color: ${colors['light-forest']};

  & > * {
    margin: 16px 0;
  }
`;

const HorzLine = styled.hr `
  height: 1px;
  border: none;

  background: ${colors['dark-forest']};
  color: none;
`;

const AppHead = styled.header `
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;

  border: 4px solid ${colors['dark-forest']};
  border-radius: 16px;
  padding: 16px;

  background: ${colors['dark-forest']};
  color: ${colors['light-forest']};

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

  & > * {
    margin: 16px 0;
    border-radius: 16px;
  }
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;

/***************************************
  REDUX
***************************************/

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  getVillage : actions.specials.getVillage,
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
        <HorzLine/>
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
