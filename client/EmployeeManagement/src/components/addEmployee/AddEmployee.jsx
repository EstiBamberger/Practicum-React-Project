/* eslint-disable no-unused-vars */
import React,{useEffect} from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "./json";
import PropTypes from "prop-types";
import EmployeeStore from "../../stores/EmployeeStore";
import './AddEmployee.css'
import JobPositionStore from "../../stores/JobPositionStore";
import { observer } from 'mobx-react';
const SurveyComponent = observer(() => {
  const updatedJSON = { ...json };
  const jobDetElement = updatedJSON.elements.find(
    (element) => element.name === "job-det"
  ).elements.find((el) => el.name === "job-pos");

  const allRoles = JobPositionStore.jobPositionsList.map((choice) => ({
    value: choice.name,
    text: choice.name,
  }));

  jobDetElement.columns.find(col => col.name === "position").choices = allRoles;
  const survey = new Model(updatedJSON);
  const getSelectedRoles = (survey) => {
    const selectedRoles = new Set();
    const matrixData = survey.getValue('job-pos') || [];
    matrixData.forEach(row => {
      if (row.position) {
        selectedRoles.add(row.position);
      }
    });
    return selectedRoles;
  };

  // Function to update choices for all rows in the matrix
  const updateMatrixChoices = (survey) => {
    const matrix = survey.getQuestionByName('job-pos');
    if (matrix) {
      const selectedRoles = getSelectedRoles(survey);
      matrix.visibleRows.forEach(row => {
        const positionCell = row.getQuestionByColumnName('position');
        if (positionCell) {
          // Preserve the current value
          const currentValue = positionCell.value;
          positionCell.choices = allRoles.filter(role => !selectedRoles.has(role.value) || role.value === currentValue);
        }
      });
    }
  };

  useEffect(() => {
    updateMatrixChoices(survey);
  }, []);

  survey.onMatrixRowAdded.add(() => {
    updateMatrixChoices(survey);
  });

  survey.onValueChanged.add((sender, options) => {
    if (options.name.startsWith('job-pos')) {
      updateMatrixChoices(sender);
    }
  });

  survey.onComplete.add((sender, options) => {
    const data = sender.data;
    const formattedData = formatData(data);

    postData(formattedData);
    window.location.href = 'employeeTable';

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
      TZ: tz,
      FirstName: firstName,
      LastName: lastName,
      DateOfStartingWork: new Date(startDate),
      DateOfBirth: birthday,
      Gender: isMale == false ? 2 : 0,
      Roles: formattedJobPositions,
    };
  };

  const postData = (formData) => {
    console.log(formData)
    EmployeeStore.addEmployee(formData)
  };

  return (
    <>
      <div className="form">
        <Survey model={survey}
          sx={{
            ".sv_q_text_root input[type='text'], .sv_q_text_root input[type='date'], .sv_q_text_root input[type='email'], .sv_q_text_root input[type='number'], .sv_q_text_root input[type='radio']": {
              backgroundColor: 'black',
              borderRadius: "5px",
              padding: "8px",
              border: "1px solid #ccc",
            },
            ".sv_q_dropdown_control, .sv_q_dropdown_control select": {
              backgroundColor: "#f0f0f0",
              borderRadius: "5px",
              padding: "8px",
              border: "1px solid #ccc",
            },
            ".sv_header": {
              position: 'fixed',
              top: 0,
              backgroundColor: '#f0f0f0',
              zIndex: 1
            }
          }} /></div>
    </>
  );
});

SurveyComponent.propTypes = {
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SurveyComponent;
