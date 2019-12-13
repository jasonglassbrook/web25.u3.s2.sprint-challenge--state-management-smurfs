/// external modules ///
import React from 'react';
import * as ReactRedux from 'react-redux';
import styled from 'styled-components'

/***************************************
  COMPONENTS
***************************************/

const colors = {
  'light' : 'White',
  'smurf' : '#3182CE',
  'mid-smurf' : '#90CDF4',
  'focus' : '#E53E3E',
  'mid-focus' : '#FEB2B2',
}

const Form = styled.form `
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

const DataLabel = styled.label `
  margin: 2px;
  border-radius: 2px;
  padding: 4px;
  color: ${colors['light']};
`;

const DataInput = styled.input `
  margin: 2px;
  border: 2px solid ${colors['mid-smurf']};
  border-radius: 2px;
  padding: 4px 8px;
  color: ${colors['smurf']};
  background: ${colors['light']};

  outline: none;

  transition:
    border 0.5s;

  &:hover {
    border: 2px solid ${colors['mid-focus']};
  }

  &:focus, &:active {
    border: 2px solid ${colors['focus']};
  }
`;

const Button = styled.button `
  flex: 1 0 auto;
  margin: 4px;
  border: none;
  border-radius: 4px;
  padding: 2px;

  color: ${colors['light']};
  background: ${colors['focus']};

  transition:
    border 0.5s,
    text-decoration 0.5s;

  &:hover {
    border: 2px solid ${colors['mid-focus']};
    text-decoration: underline;
  }

  &:active {
    border: 2px solid ${colors['light']};
    text-decoration: underline;
  }
`;

/***************************************
  REDUX
***************************************/

const mapStateToProps = (state) => ({
  smurf : state.smurf,
});

const mapDispatchToProps = {};

const connect = ReactRedux.connect (
  mapStateToProps, mapDispatchToProps,
);

/***************************************
  MAIN
***************************************/

const SmurfForm = ({ smurf = {}, submit, props }) => {
  const [ state, setState ] = React.useState (smurf);

  const handleChange = (e) => {
    setState ((state) => ({
      ...state,
      [e.target.name] : e.target.value,
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault ();
    submit && submit (state);
  }

  return (
    <Form className='SmurfForm' onSubmit={handleSubmit}>
      <DataList>
        {['name', 'age', 'height'].map ((label) => (
          <Data key={label}>
            <DataLabel
            htmlFor={`SmurfForm-${label}`}>
              {label}
            </DataLabel>
            <DataInput
            id={`SmurfForm-${label}`}
            name={label}
            value={state[label]}
            placeholder={`enter ${label}`}
            onChange={handleChange}/>
          </Data>
        ))}
      </DataList>
      <Button type='submit'>Submit</Button>
    </Form>
  );
};

/**************************************/

export default connect (SmurfForm);
