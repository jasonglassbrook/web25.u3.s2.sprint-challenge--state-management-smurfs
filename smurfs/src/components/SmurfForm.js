/// external modules ///
import React from 'react';
import * as ReactRedux from 'react-redux';
import styled from 'styled-components'

/// styles ///
import colors from 'styles/colors';

/// states ///
import { init, actions } from 'states/smurfs';

/***************************************
  COMPONENTS
***************************************/

const Form = styled.form `
  flex: 1 0 auto;
  padding: 4px;
  color: ${colors['white']};
  background: ${colors['min-gray']};

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
  border: 1px solid ${colors['lightgray']};
  border-radius: 4px;
  padding: 2px;
  color: ${colors['gray']};

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
  color: ${colors['dark-gray']};
`;

const DataInput = styled.input `
  margin: 2px;
  border: 2px solid ${({ mode = 'gray' }) => colors[`light-${mode}`]};
  border-radius: 2px;
  padding: 4px 8px;
  color: ${({ mode = 'gray' }) => colors[`${mode}`]};
  background: ${colors['white']};

  outline: none;

  transition:
    border 0.5s;

  &:hover {
    border: 2px solid ${({ mode = 'gray' }) => colors[`light-${mode}`]};
  }

  &:focus, &:active {
    border: 2px solid ${({ mode = 'gray' }) => colors[`${mode}`]};
  }
`;

const Button = styled.button `
  flex: 1 0 auto;
  margin: 4px;
  border: none;
  border-radius: 4px;
  padding: 2px;

  color: ${colors['white']};
  background: ${({ mode = 'gray' }) => colors[`${mode}`]};

  transition:
    border 0.5s,
    text-decoration 0.5s;

  &:hover {
    border: 2px solid ${({ mode = 'gray' }) => colors[`light-${mode}`]};
    text-decoration: underline;
  }

  &:active {
    border: 2px solid ${colors['white']};
    text-decoration: underline;
  }
`;



/***************************************
  REDUX
***************************************/

const mapStateToProps = (state) => ({
  smurf : state.smurf,
  smurfMode : state.smurfMode,
});

const mapDispatchToProps = {
  addSmurf : actions.specials.addSmurf,
  editSmurf : actions.specials.editSmurf,
  deleteSmurf : actions.specials.deleteSmurf,
};

const connect = ReactRedux.connect (
  mapStateToProps, mapDispatchToProps,
);

/***************************************
  MAIN
***************************************/

const SmurfForm = ({ smurf = init.smurf, smurfMode, addSmurf, editSmurf, deleteSmurf, ...props }) => {
  const [ state, setState ] = React.useState ({ ...smurf });

  const handleChange = (e) => {
    console.log (e.target);
    console.log (e.target.name);
    console.log (e.target.value);
    setState ((state) => ({
      ...state,
      [e.target.name] : e.target.value,
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault ();
    switch (smurfMode) {
      case 'add' : addSmurf (state); break;
      case 'edit' : editSmurf (state); break;
      case 'delete' : deleteSmurf (state); break;
      default : console.log ('something went wrong'); break;
    }
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
      <Button mode={smurfMode} type='submit'>Submit</Button>
    </Form>
  );
};

/**************************************/

export default connect (SmurfForm);
