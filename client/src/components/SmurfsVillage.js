/// external modules ///
import React from 'react';
import * as ReactRedux from 'react-redux';
import styled from 'styled-components';

/// styles ///
import colors from 'styles/colors';

/// components ///
import Smurf from './Smurf';

/// states ///
import { init /*, actions*/ } from 'states/smurfs';

/***************************************
  COMPONENTS
***************************************/

const Section = styled.section `
  border: 4px solid ${colors['dark-forest']};
  background: ${colors['dark-forest']};
  color: ${colors['light-forest']};

  & > * {
    margin: 8px;
  }
`;

const SectionHead = styled.header `
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h2 ``;

const SectionBody = styled.main ``;

const SmurfsList = styled.ul `
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

/***************************************
  REDUX
***************************************/

const mapStateToProps = (state) => ({
  village : state.village,
});

const mapDispatchToProps = {};

const connect = ReactRedux.connect (
  mapStateToProps, mapDispatchToProps,
);

/***************************************
  MAIN
***************************************/

const SmurfsVillage = ({ village = init.village, ...props }) => {
  return (
    <Section className='SmurfsVillage'>
      <SectionHead>
        <Heading>Smurfs Village</Heading>
      </SectionHead>
      <SectionBody>
        <SmurfsList>
          {village.map ((smurf) => (
            <Smurf key={smurf.id} smurf={smurf}/>
          ))}
        </SmurfsList>
      </SectionBody>
    </Section>
  );
};

/**************************************/

export default connect (SmurfsVillage);
