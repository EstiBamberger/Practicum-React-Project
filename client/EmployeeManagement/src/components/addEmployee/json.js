export const json =
{
  "title": "Add Employee Form",
  "description": "Please fill out the form and the details will be updated in the system. All fields must be filled.",
  "questionErrorLocation": "bottom",
  "elements": [
    {
      "type": "panel",
      "name": "personal-info",
      "title": "Personal Information",
      "elements": [
        {
          "type": "text",
          "name": "first-name",
          "title": "First name",
          "isRequired": true,
          "inputClass": "custom-input",
          "validators": [
            {
              "type": "regex",
              "regex": "^[\\w .'-]+$",
              "text": "Please enter a valid last name with only letters"
            }
          ]

        },
        {
          "type": "text",
          "name": "last-name",
          "startWithNewLine": false,
          "title": "Last name",
          "isRequired": true,
          "validators": [
            {
              "type": "regex",
              "regex": "^[\\w .'-]+$",
              "text": "Please enter a valid last name with only letters"
            }
          ]
        },
        {
          "type": "text",
          "name": "birthdate",
          "title": "Date of birth",
          "inputType": "date",
          "isRequired": true,
          "validators": [
            {
              "type": "expression",
              "text": "Date of birth cannot be in the future.",
              "expression": "{birthdate} <= today()"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "gender",
          "title": "Gender",
          "isRequired": true,
          "choices": [
            { "value": "male", "text": "Male" },
            { "value": "female", "text": "Female" }
          ]
        },
        {
          "type": "text",
          "name": "tz",
          "startWithNewLine": false,
          "title": "Tz",
          "isRequired": true,
          "validators": [
            {
              "type": "numeric",
              "minValue": 100000000,
              "maxValue": 999999999,
              "text": "Please enter a valid 9-digit identity card number"
            }
          ]

        },
      ]
    },
    {
      "type": "panel",
      "name": "job-det",
      "title": "Job-Details",
      "elements": [
        {
          "type": "text",
          "name": "start-date",
          "title": "Start Date",
          "inputType": "date",
          "isRequired": true,
          "validators": [
            {
              "type": "expression",
              "text": "Start date cannot be before the birth-date.",
              "expression": "{start-date} >= {birthdate}"
            }
          ]
        },
        {
          "type": "matrixdynamic",
          "name": "job-pos",
          "title": "Job Positions",
          "columns": [
            {
              "name": "position",
              "title": "Position",
              "cellType": "dropdown",
              "isRequired": true,
              "choices": []
            },
            {
              "name": "admin-nonadmin",
              "title": "Administrative/Non-Administrative",
              "cellType": "radiogroup",
              "choices": [
                { "value": "administrative", "text": "Administrative" },
                { "value": "non-administrative", "text": "Non-Administrative" }
              ],
              "isRequired": true
            },
            {
              "name": "entering-date",
              "title": "Date of Entering the Position",
              "cellType": "text",
              "inputType": "date",
              "isRequired": true
            }
          ],
          "isRequired": true,
          "rowCount": 1,
          "addRowText": "Add Position"
        }
      ]
    }
  ],
  "showCompletedPage": true,
  "completedHtml": "<p>The employee was successfully added!</p>",
  "showQuestionNumbers": false,
  "completeText": "add",
  "widthMode": "static",
  "width": "800px"
};
// {
//   "type": "matrixdynamic",
//   "name": "job-pos",
//   "title": "Job Positions",
//   "columns": [
//     {
//       "name": "position",
//       "title": "Position",
//       "isRequired": true,
//     },
//     {
//       "name": "admin-nonadmin",
//       "title": "Administrative/Non-Administrative",
//       "cellType": "radiogroup",
//       "choices": [
//         { "value": "administrative", "text": "Administrative" },
//         { "value": "non-administrative", "text": "Non-Administrative" }
//       ],
//       "isRequired": true,
//     },
//     {
//       "name": "entering-date",
//       "title": "Date of Entering the Position",
//       "cellType": "text",
//       "inputType": "date",
//       "isRequired": true,
//     }
//   ],
//   "isRequired": true,
//   "choices": [],
//   "defaultRowValue": { "position": "Canada", "admin-nonadmin": "", "entering-date": "" },
// }
