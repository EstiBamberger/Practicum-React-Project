export const json = {
  "title": "Delete a position from the company",
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
          "addRowText": "Add Job To Delete",
          "columns": [
            {
              "name": "name",
              "isRequired": true,
              "title": "position to delete",
              "cellType": "text"
            }
          ]
        }
      ]
    }
  ],
  "showQuestionNumbers": false
};