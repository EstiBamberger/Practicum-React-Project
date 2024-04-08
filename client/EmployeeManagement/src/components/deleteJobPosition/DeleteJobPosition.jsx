/* eslint-disable no-unused-vars */
import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "./json";
import PropTypes from "prop-types";
import JobPositionStore from "../../stores/JobPositionStore";

function SurveyComponent({close}) {


    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
          JobPositionStore.deleteJobPositions(sender.data.employees)

        close()
      });
    return (<Survey model={survey} />);
}
SurveyComponent.propTypes = {
    close: PropTypes.func.isRequired
};

export default SurveyComponent;