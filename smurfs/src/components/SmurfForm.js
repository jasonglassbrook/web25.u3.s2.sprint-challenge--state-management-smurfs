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
  border: 4px solid ${colors['white']}
  background: ${colors['min-gray']};
  color: ${colors['max-gray']};

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
  border: 1px solid ${colors['light-gray']};
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
  margin: 4px;
  border-radius: 2px;
  padding: 4px;
  color: ${colors['max-gray']};
`;

const DataInput = styled.input `
  margin: 4px;
  border: 1px solid ${({ mode = 'gray' }) => colors[mode]};
  border-radius: 2px;
  padding: 4px 8px;
  background: ${colors['white']};
  color: ${colors['max-gray']};

  outline: none;

  transition:
    box-shadow 0.5s;

  &:hover {
    box-shadow: 0 0 0 2px ${({ mode = 'gray' }) => colors[`light-${mode}`]};
  }

  &:focus, &:active {
    box-shadow: 0 0 0 2px ${({ mode = 'gray' }) => colors[mode]};
  }
`;

const Button = styled.button `
  flex: 1 0 auto;
  margin: 4px;
  border: none;
  border-radius: 4px;
  padding: 2px;

  background: ${({ mode = 'gray' }) => colors[mode]};
  color: ${colors['white']};

  transition:
    box-shadow 0.5s,
    text-decoration 0.5s;

  &:hover {
    box-shadow: 0 0 0 2px ${({ mode = 'gray' }) => colors[`light-${mode}`]};
    text-decoration: underline;
  }

  &:active {
    box-shadow: 0 0 0 2px ${colors['white']};
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

  const handleChange = ({ target : { name, value } }) => {
    setState ((state) => ({
      ...state,
      [name] : value,
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
    <Form
    className='SmurfForm'
    mode={smurfMode}
    onSubmit={handleSubmit}>
      <DataList>
        {['name', 'age', 'height'].map ((label) => (
          <Data key={label}>
            <DataLabel
            htmlFor={`SmurfForm-${label}`}>
              {label}
            </DataLabel>
            <DataInput
            id={`SmurfForm-${label}`}
            mode={smurfMode}
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
