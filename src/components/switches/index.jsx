import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches(props) {

  return (
    <div>
      <Switch
        checked={props.state.checkedB}
        onChange={props.handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
}
