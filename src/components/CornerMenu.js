import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom"

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class CornerMenu extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  mailFolderListItems = (
    <div>
      <ListItem button>
        <Link to="/mad-libs"><ListItemText primary="Mad Libs" /></Link>
      </ListItem>

      <ListItem button>
        <Link to="/tic-tac-toe"><ListItemText primary="Tic-Tac-Toe" /></Link>
      </ListItem>

      <ListItem button>
        <Link to="/pig-latin"><ListItemText primary="PigLatin" /></Link>
      </ListItem>
    </div>
  );

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>{this.mailFolderListItems}</List>
        <Divider />
        <List>{this.otherMailFolderListItems}</List>
      </div>
    );

    return (
      <div className="cornerMenu">
        <Button onClick={this.toggleDrawer('left', true)}>Other Games</Button>

        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

CornerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CornerMenu);