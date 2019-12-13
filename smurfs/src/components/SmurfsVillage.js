/// external modules ///
import React from 'react';
import styled from 'styled-components';

/// components ///
import Smurf from './Smurf';

/***************************************
  COMPONENTS
***************************************/

const Section = styled.section `
  border: 4px solid White;
  border-radius: 16px;
  padding: 8px;
  color: White;
  background: none;
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
  MAIN
***************************************/

const SmurfsVillage = ({ village = [{ id : (Date.now ()) }], ...props }) => {
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

export default SmurfsVillage;
