import React from 'react';
import IconButton, {IconToggle} from '@material/react-icon-button';
import MaterialIcon from '@material/react-material-icon';
import {Button} from '@material-ui/core'


class ButtonIcon extends React.Component {
  render() {
    return (
      <Button color='primary'>
        Contactanos  {/*Revisar con props */}
      </Button>
    );
  }
}

export default ButtonIcon