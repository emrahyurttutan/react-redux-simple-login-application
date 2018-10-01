import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  classNames,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Badge,
  MenuIcon,
  NotificationsIcon,
  Drawer,
  List,
  Divider,
  IconButton,
  ChevronLeftIcon
} from "../../includes";
import { drawerOpenClick, userLogout } from "../../includes/actions";
import { mainListItems } from "./MenuItem";

class TopBarMenu extends Component {
  handleDrawerOpen = () => {
    this.props.drawerOpenClick(!this.props.dashboard.drawerOpen);
  };
  onUserLogout() {
    this.props.userLogout();
    this.props.history.push("/");
  }
  render() {
    const { drawerOpen } = this.props.dashboard;
    const { user, classes } = this.props;

    return (
      <Fragment>
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            drawerOpen && classes.appBarShift
          )}
        >
          <Toolbar disableGutters={!drawerOpen} className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                drawerOpen && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="title"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Anasayfa
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Typography color="inherit">{user}</Typography>
            <Button
              variant="contained"
              size="small"
              className={classes.logoutButton}
              onClick={this.onUserLogout.bind(this)}
            >
              Çıkış Yap
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !drawerOpen && classes.drawerPaperClose
            )
          }}
          open={drawerOpen}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerOpen}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
        </Drawer>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  drawerOpenClick: drawerOpenClick,
  userLogout: userLogout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBarMenu);
