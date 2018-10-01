import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  CssBaseline,
  Button,
  Paper,
  Avatar,
  LockIcon,
  Typography,
  FormControl,
  InputLabel,
  Input,
  User
} from "../includes";
import { connect } from "react-redux";
import { userName, userPassword, userLoginSubmit } from "../includes/actions";
import Snackbar from "./Snackbar";
const styles = theme => ({
  layout: {
    width: "auto",
    display: "block", // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class Login extends React.Component {
  isLogin() {
    if (User.isLogin()) {
      this.props.history.push("/dashboard");
    }
  }
  componentDidUpdate() {
    this.isLogin();
  }
  componentWillMount() {
    this.isLogin();
  }
  handleChange = name => event => {
    if (name === "name") {
      this.props.onUserNameChange(event.target.value);
    } else if (name === "password") {
      this.props.onUserPasswordChange(event.target.value);
    }
  };
  onSubmit() {
    this.props.onLoginSubmit(
      this.props.login.username,
      this.props.login.password
    );
    return false;
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Snackbar {...this.props.alert} />
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">Oturum Aç</Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel>Kullanıcı Adı</InputLabel>
                <Input
                  required={true}
                  name="username"
                  id="username"
                  value={this.props.login.username}
                  onChange={this.handleChange("username")}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Şifre</InputLabel>
                <Input
                  required={true}
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.props.login.password}
                  onChange={this.handleChange("password")}
                />
              </FormControl>
              <Button
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
                onClick={this.onSubmit.bind(this)}
              >
                Giriş Yap
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};
//propsları maplemeye yarar
const mapStateToProps = state => {
  return state;
};

//dispatchleri maplemeye yarar
const mapDispatchToProps = {
  onUserNameChange: userName,
  onUserPasswordChange: userPassword,
  onLoginSubmit: userLoginSubmit
};
const stylesLogin = withStyles(styles)(Login);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(stylesLogin);
