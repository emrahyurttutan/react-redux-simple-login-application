const storage = {
  token: "userToken",
  userInfo: "userInfo",
  userName: "emrah",
  password: "123"
};
class User {
  setToken = token => {
    localStorage.setItem(storage.token, token);
  };
  getDataKey = key => {
    return localStorage.getItem(key);
  };
  setUserInfo = info => {
    localStorage.setItem(storage.userInfo, info);
  };
  isLogin() {
    return localStorage.getItem(storage.token) &&
      localStorage.getItem(storage.userInfo)
      ? true
      : false;
  }

  loginAttempt = (username, password) => {
    if (storage.userName === username && storage.password === password) {
      return true;
    }
    return false;
  };

  clearData() {
    localStorage.removeItem(storage.token);
    localStorage.removeItem(storage.userInfo);
  }
}
export default new User();
