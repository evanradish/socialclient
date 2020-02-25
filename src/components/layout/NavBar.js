import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../../util/MyButton';
import { Link } from 'react-router-dom';
import PostScream from '../scream/PostScream';
import Typography from '@material-ui/core/Typography';
//MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

//Icons
import HomeIcon from '@material-ui/icons/Home';
import Notifications from '@material-ui/icons/Notifications';

const styles = theme => ({
  ...theme.spreadThis,
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
});

export class NavBar extends Component {
  render() {
    const { classes, authenticated } = this.props;
    return (
      <AppBar>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Social App!
          </Typography>
          {authenticated ? (
            <Fragment>
              <PostScream />
              <Link to='/'>
                <MyButton tip='Home' btnClassName={classes.navButton}>
                  <HomeIcon />
                </MyButton>
              </Link>

              <MyButton tip='Notifications' btnClassName={classes.navButton}>
                <Notifications />
              </MyButton>
            </Fragment>
          ) : (
            <Fragment>
              <Button color='inherit' component={Link} to='/login'>
                Login
              </Button>
              <Button color='inherit' component={Link} to='/'>
                Home
              </Button>
              <Button color='inherit' component={Link} to='/signup'>
                Signup
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

NavBar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(withStyles(styles)(NavBar));
