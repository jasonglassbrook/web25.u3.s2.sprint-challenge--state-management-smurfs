/// external modules ///
import React from 'react';
import styled from 'styled-components'

/// styles ///
import colors from 'styles/colors';

/// states ///
import { init } from 'states/smurfs';

/***************************************
  COMPONENTS
***************************************/

const Item = styled.li `
  flex: 1 0 auto;
  margin: 8px;
  border: 1px solid ${colors['white']};
  border-radius: 8px;
  padding: 4px;
  color: ${colors['white']};
  background: ${colors['smurf']};

  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: center;
  align-items: stretch;
`;

const DataList = styled.ul `
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const Data = styled.li `
  flex: 1 0 auto;
  margin: 4px;
  border: 1px solid ${colors['light-smurf']};
  border-radius: 4px;
  padding: 2px;
  color: ${colors['white']};

  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const DataLabel = styled.span `
  margin: 2px;
  border-radius: 2px;
  padding: 4px;
  color: ${colors['white']};
`

const DataValue = styled.span `
  margin: 2px;
  border-radius: 2px;
  padding: 4px 8px;
  color: ${colors['smurf']};
  background: ${colors['white']};
`

/***************************************
  MAIN
***************************************/

const Smurf = ({ smurf = init.smurf, props }) => {
  return (
    <Item
    className='Smurf'>
      <DataList>
        {['name', 'age', 'height'].map ((label) => (
          <Data key={label}>
            <DataLabel>{label}</DataLabel>
            <DataValue>{smurf[label]}</DataValue>
          </Data>
        ))}
      </DataList>
    </Item>
  );
};

/**************************************/

export default Smurf;
