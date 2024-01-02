
  ////Standard part/////
*****Create Cohort
  --Method: createCohort(cohortName)
  --Inputs: cohortName (string)
  --Outputs: Creates a new cohort in the system if the name is unique; otherwise, shows an error.
*****Search Cohort
  --Method: searchCohort(cohortName)
  --Inputs: cohortName (string)
  --Outputs: Finds and returns the cohort if it exists; otherwise, shows an error.
*****Add Student
  --Method: addStudent(studentInfo, cohortName)
  --Inputs: studentInfo (object with properties: studentID, firstName, lastName, githubUsername, email), cohortName (string)
  --Outputs: Updates the cohort with the added student if conditions are met; otherwise, shows an error.
*****Remove Cohort
  --Method: removeCohort(cohortName)
  --Inputs: cohortName (string)
  --Outputs: Updates the system without the removed cohort if found; otherwise, shows an error.
*****Remove Student
  --Method: removeStudent(cohortName, studentID)
  --Inputs: cohortName (string), studentID (number)
  --Outputs: Updates the cohort without the removed student if conditions are met; otherwise, shows an error.
*****Error Handling
  --Throws errors if the student or cohort is not found.
***Cohort
  --Each cohort has a list of students.
      *Student
  --Each student has:
      *studentID (number)
      *firstName (string)
      *lastName (string)
      *githubUsername (string)
      *email (string)