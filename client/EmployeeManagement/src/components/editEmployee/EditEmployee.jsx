/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "./json";
import PropTypes from "prop-types";
import EmployeeStore from "../../stores/EmployeeStore";
import JobPositionStore from "../../stores/JobPositionStore";
function SurveyComponent({ employee, close }) {
  const [gender, setGender] = useState(employee.gender)
  useEffect(() => {
    console.log(gender)
  }, []);
  const updatedJSON = { ...json };
  const countryElement = updatedJSON.elements.find(
    (element) => element.name === "job-det"
  ).elements.find((el) => el.name === "job-pos");

  countryElement.choices = JobPositionStore.jobPositionsList.map((choice) => ({
    value: choice.name,
    text: choice.name,
  }));
  //set default value to firstName
  const firstNameElement = updatedJSON.elements.find(
    (element) => element.name === "personal-info"
  ).elements.find((el) => el.name === "first-name");
  firstNameElement.defaultValue = employee.firstName
  //set default value to lastName
  const lastNameElement = updatedJSON.elements.find(
    (element) => element.name === "personal-info"
  ).elements.find((el) => el.name === "last-name");
  lastNameElement.defaultValue = employee.lastName
  //set default value to dateOfBirth
  const dateOfBirthElement = updatedJSON.elements.find(
    (element) => element.name === "personal-info"
  ).elements.find((el) => el.name === "birthdate");
  const dateOfBirth = new Date(employee.dateOfBirth);
  dateOfBirthElement.defaultValue = dateOfBirth.toISOString().split('T')[0];
  //set default value to gender
  const genderElement = updatedJSON.elements
    .find((element) => element.name === "personal-info")
    .elements.find((el) => el.name === "gender");
  genderElement.defaultValue = employee.gender == 2 ? "female" : "male"
  //set default value to tz
  const tZElement = updatedJSON.elements.find(
    (element) => element.name === "personal-info"
  ).elements.find((el) => el.name === "tz");
  tZElement.defaultValue = employee.tz
  //set default value to start-date
  const startDateElement = updatedJSON.elements.find(
    (element) => element.name === "job-det"
  ).elements.find((el) => el.name === "start-date");
  const startDate = new Date(employee.dateOfStartingWork);
  startDateElement.defaultValue = startDate.toISOString().split('T')[0];

  // set default value to jobPos
  const jobPositionsElement = updatedJSON.elements.find(
    (element) => element.name === "job-det"
  ).elements.find((el) => el.name === "job-pos");


  if (jobPositionsElement) {
    const positionChoices = jobPositionsElement.choices;
    jobPositionsElement.defaultValue = employee.roles.map((role) => {
      const selectedChoice = positionChoices.find(choice => choice.value == role.jobPositionName);
      const position = selectedChoice ? selectedChoice.text : '';
      console.log(position)
      return {
        position: position,
        "admin-nonadmin": role.isManagerial ? "administrative" : "non-administrative",
        "entering-date": role.dateStartRole ? new Date(role.dateStartRole).toISOString().split('T')[0] : ''
      };
    });
  }


  const survey = new Model(updatedJSON);


  survey.onComplete.add((sender, options) => {
    setTimeout(() => {
      close();
    }, 1000);
    const data = sender.data;
    const formattedData = formatData(data);
    updateData(formattedData)
  });
  const formatData = (data) => {
    console.log(data);

    if (!data) {
      console.error("Data is undefined or null");
      return null;
    }

    const {
      tz = "",
      "first-name": firstName = "",
      "last-name": lastName = "",
      birthdate = "",
      gender = "",
      "start-date": startDate = "",
      "job-pos": jobPositions = [],
    } = data;

    const isMale = gender == "male";
    const birthday = new Date(birthdate);
    const formattedJobPositions = jobPositions.map((position) => ({
      JobPositionName: position.position,
      DateStartRole: new Date(position["entering-date"]),
      IsManagerial: position["admin-nonadmin"] === "administrative",
    }));

    return {
      Tz: tz,
      FirstName: firstName,
      LastName: lastName,
      DateOfStartingWork: new Date(startDate),
      DateOfBirth: birthday,
      Gender: isMale == false ? 2 : 0,
      Roles: formattedJobPositions,
    };
  };

  const updateData = (formData) => {
    EmployeeStore.updateEmployee(employee.employeeId, formData)
  };

  return (
    <>
      <div className="form">
        <Survey model={survey}
        /></div>
    </>
  );
}

SurveyComponent.propTypes = {
  employee: PropTypes.any,
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  close: PropTypes.func.isRequired
};

export default SurveyComponent;