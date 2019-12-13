/// external modules ///
import React from 'react';
import styled from 'styled-components'

/***************************************
  MAIN
***************************************/
const Item = styled.li `
  flex: 1 0 auto;
  margin: 4px;
  border: 1px solid White;
  border-radius: 8px;
  padding: 4px;
  color: White;
  background: SkyBlue;
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
  border-radius: 8px;
  padding: 4px;
  color: White;

  display: flex;
  flex-flow: row-nowrap;
`;

const DataItemKey = styled.span `
  margin: 2px;
  border-radius: 2px;
  padding: 2px;
  color: White;
`

const DataItemValue = styled.span `
  margin: 2px;
  border-radius: 2px;
  padding: 2px;
  color: SkyBlue;
  background: White;
`

const Smurf = ({ smurf, props }) => {
  return (
    <Item className='Smurf'><DataList>
      <DataItem>
        <DataItemKey>name</DataItemKey>
        <DataItemValue>{smurf.name}</DataItemValue>
      </DataItem>
      <DataItem>
        <DataItemKey>age</DataItemKey>
        <DataItemValue>{smurf.age}</DataItemValue>
      </DataItem>
      <DataItem>
        <DataItemKey>height</DataItemKey>
        <DataItemValue>{smurf.height}</DataItemValue>
      </DataItem>
    </DataList></Item>
  );
};

/**************************************/

export default Smurf;
