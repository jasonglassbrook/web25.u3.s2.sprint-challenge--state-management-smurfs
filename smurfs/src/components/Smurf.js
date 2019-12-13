/// external modules ///
import React from 'react';
import styled from 'styled-components'

/***************************************
  COMPONENTS
***************************************/

const Item = styled.li `
  flex: 1 0 auto;
  margin: 8px;
  border: 1px solid White;
  border-radius: 8px;
  padding: 4px;
  color: White;
  background: #4299E1;
`;

const DataList = styled.ul `
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const DataItem = styled.li `
  flex: 1 0 auto;
  margin: 4px;
  border: 1px solid White;
  border-radius: 4px;
  padding: 2px;
  color: White;

  display: flex;
  flex-flow: row-nowrap;
`;

const DataItemKey = styled.span `
  margin: 2px;
  border-radius: 2px;
  padding: 1px 4px;
  color: White;
`

const DataItemValue = styled.span `
  margin: 2px;
  border-radius: 2px;
  padding: 1px 4px;
  color: #4299E1;
  background: White;
`

/***************************************
  MAIN
***************************************/

const Smurf = ({ smurf = {}, props }) => {
  return (
    <Item className='Smurf'><DataList>
      {['name', 'age', 'height'].map ((key) => (
        <DataItem key={key}>
          <DataItemKey>{key}</DataItemKey>
          <DataItemValue>{smurf[key]}</DataItemValue>
        </DataItem>
      ))}
    </DataList></Item>
  );
};

/**************************************/

export default Smurf;
