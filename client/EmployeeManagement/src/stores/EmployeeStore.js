import { observable, makeObservable, action } from 'mobx';

class EmployeeStore {
  employeesList = [];
  constructor() {
    makeObservable(this, {
      employeesList: observable,
      getEmployees: action,
      addEmployee: action,
      deleteEmployeeByTz: action
    })
  }
  getEmployees = async () => {
    const response = await fetch("https://localhost:7299/api/Customers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      this.employeesList = await response.json();
      console.log(this.employeesList)
      return this.employeesList;
    } else {
      return null;
    }
  };
  addEmployee = async (newEmployee) => {
    const token = localStorage.getItem('token');
    const response = await fetch("https://localhost:7299/api/Customers", {
      method: "POST",
      body: JSON.stringify(newEmployee),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    if (response.status === 200) {
      console.log(response + "xxxxxxx")
      this.employeesList = ([...this.employeesList, newEmployee])
      return
    }
    return

  }
  deleteEmployeeByTz = async (tz) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`https://localhost:7299/api/Customers/${tz}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    console.log(response.status)
    if (response.status === 204) {
      this.getEmployees();
      return
    }
    return

  }
  updateEmployee = async (id, updatedEmployee) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`https://localhost:7299/api/Customers/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedEmployee),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    if (response.status === 204) {
      this.getEmployees();
      return
    }
    return
  }
}

export default new EmployeeStore();