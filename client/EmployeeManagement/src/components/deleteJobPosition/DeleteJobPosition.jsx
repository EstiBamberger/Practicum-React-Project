/* eslint-disable no-unused-vars */
import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "./json";
import PropTypes from "prop-types";
import JobPositionStore from "../../stores/JobPositionStore";
import Swal from 'sweetalert2'
import './DeleteJobPosition.css'
function SurveyComponent({ close }) {


  const survey = new Model(json);
  survey.onComplete.add(async (sender, options) => {
    const errNames = await JobPositionStore.deleteJobPositions(sender.data.employees)
    console.log(errNames)
    if (errNames.length > 0) {
      Swal.fire({
        text: `${errNames.join(", ")}, do not exist.`,
        customClass: {
          confirmButton: 'custom-ok-button',
        },
      });
    }
    close()
  });
  return (<Survey model={survey} />);
}
SurveyComponent.propTypes = {
  close: PropTypes.func.isRequired
};

export default SurveyComponent;