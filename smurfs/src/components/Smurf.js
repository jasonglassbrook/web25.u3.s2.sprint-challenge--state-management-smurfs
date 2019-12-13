/// external modules ///
import React from 'react';
import styled from 'styled-components'

/***************************************
  COMPONENTS
***************************************/

const colors = {
  'light' : 'White',
  'smurf' : '#3182CE',
  'mid-smurf' : '#90CDF4',
}

const Item = styled.li `
  flex: 1 0 auto;
  margin: 8px;
  border: 1px solid ${colors['light']};
  border-radius: 8px;
  padding: 4px;
  color: ${colors['light']};
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
  border: 1px solid ${colors['mid-smurf']};
  border-radius: 4px;
  padding: 2px;
  color: ${colors['light']};

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
  color: ${colors['light']};
`

const DataValue = styled.span `
  margin: 2px;
  border-radius: 2px;
  padding: 4px 8px;
  color: ${colors['smurf']};
  background: ${colors['light']};
`

/***************************************
  MAIN
***************************************/

const Smurf = ({ smurf = {}, props }) => {
  return (
    <Item className='Smurf'><DataList>
      {['name', 'age', 'height'].map ((label) => (
        <Data key={label}>
          <DataLabel>{label}</DataLabel>
          <DataValue>{smurf[label]}</DataValue>
        </Data>
      ))}
    </DataList></Item>
  );
};

/**************************************/

export default Smurf;
