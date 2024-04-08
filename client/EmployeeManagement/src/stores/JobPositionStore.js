import { observable, makeObservable, action } from 'mobx';

class JobPositionStore {
  jobPositionsList=[];
    constructor() {
        makeObservable(this, {
            jobPositionsList: observable,
            getJobPositions: action,
        })
        this.getJobPositions()
    }
    getJobPositions = async () => {
        const response = await fetch("https://localhost:7299/api/JobPosition ",{
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
      addJobPositions =  (newJobs) => {
        newJobs.forEach((job) => this.addJobPosition(job));
      }
      deleteJobPositions =  (newJobs) => {
        newJobs.forEach((job) => this.deleteJobPosition(job));
      }
      deleteJobPosition = async (newJob) => {
        const token = localStorage.getItem('token'); 
        const response = await fetch(`https://localhost:7299/api/JobPosition/${newJob}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        });
        if (response.status == 200) {
          this.jobPositionsList = this.jobPositionsList.filter(job => job.name !== newJob);
          return true
        }
        else if(response.status==401){
          return false
        }
    
      }
}

export default new JobPositionStore();