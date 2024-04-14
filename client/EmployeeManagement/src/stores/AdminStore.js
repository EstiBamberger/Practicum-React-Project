import { observable, makeObservable, action } from 'mobx';

class AdminStore {
  isLogin = localStorage.getItem('isLogIn') == null ? false : true;
  constructor() {
    makeObservable(this, {
      isLogin: observable,
      handleLogin: action,
      handleLogOut: action
    })
  }
  handleLogin = async (name, password) => {
    const admin = {
      name: name,
      password: password
    }
    const response = await fetch("https://localhost:7299/api/Auth", {
      method: "POST",
      body: JSON.stringify(admin),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      const data = await response.json()
      const token = data.token;
      localStorage.setItem('isLogIn', true);
      localStorage.setItem('token', token);
      return true;
    } else if (response.status === 401) {
      return false;
    }
    return false;
  };



  handleLogOut = async () => {
    localStorage.removeItem('isLogIn')
    localStorage.removeItem('token')
    this.isLogin = false

  }
}
export default new AdminStore();