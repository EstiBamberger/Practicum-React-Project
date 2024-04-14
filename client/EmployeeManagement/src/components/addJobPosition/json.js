export const json = {
  "title": "Adding a position to the company",
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "matrixdynamic",
          "minRowCount": 1,
          "rowCount": 1,
          "name": "employee_names",
          "valueName": "employees",
          "detailForm": "array_employee_info",
          "isRequired": true,
          "title": "Enter job details",
          "addRowText": "Add A Job",
          "columns": [
            {
              "name": "name",
              "isRequired": true,
              "title": "Job Name",
              "cellType": "text"
            }
          ]
        }
      ]
    }
  ],
  "showCompletedPage": true,
  "completedHtml": "<p>The jobs was successfully added!</p>",
  "showQuestionNumbers": false
};