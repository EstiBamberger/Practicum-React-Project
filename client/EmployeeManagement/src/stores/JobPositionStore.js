import { observable, makeObservable, action } from 'mobx';

class JobPositionStore {
  jobPositionsList = [];
  constructor() {
    makeObservable(this, {
      jobPositionsList: observable,
      getJobPositions: action,
    })
    this.getJobPositions()
  }
  getJobPositions = async () => {
    const response = await fetch("https://localhost:7299/api/JobPosition ", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      this.jobPositionsList = await response.json();
      return this.employeesList;
    } else {
      return null;
    }
  };

  addJobPosition = async (newJob) => {
    const token = localStorage.getItem('token');
    const response = await fetch("https://localhost:7299/api/JobPosition", {
      method: "POST",
      body: JSON.stringify(newJob),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    if (response.status === 200) {
      this.jobPositionsList = ([...this.jobPositionsList, newJob])
      return
    }
    return

  }
  addJobPositions = (newJobs) => {
    newJobs.forEach((job) => this.addJobPosition(job));
  }
  deleteJobPositions = async (newJobs) => {
    const errNames = []
    for (const job of newJobs) {
      const deletedSuccessfully = await this.deleteJobPosition(job);
      if (!deletedSuccessfully) {
        errNames.push(job.name);
      }
    }
    console.log(errNames)
    this.getJobPositions()
    return errNames;
  }
  deleteJobPosition = async (newJob) => {
    console.log(newJob.name)
    const token = localStorage.getItem('token');
    const response = await fetch(`https://localhost:7299/api/JobPosition/${newJob.name}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    if (response.status == 200) {
      console.log(response)
      if (response.ok == true) {
        this.jobPositionsList = this.jobPositionsList.filter(job => job.name !== newJob.name);
        console.log(response)
        return true
      }
    }
    else if (response.status == 204) {
      console.log(response)
      return false
    }
  }
}

export default new JobPositionStore();