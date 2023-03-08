# Domain Model

## class Cohort

**Properties:**

- cohortName: String
- students: Array

## class CohortManager

**Properties:**

- students: Array
- cohorts: Cohort

**Methods:**

createCohort(String) -> Creates a cohort, adding it to the cohorts property

- INPUTS:  
  cohortName: String
- OUTPUTS:  
  true -> Successfull

removeCohort(String) - Removes cohort or returns null if cohort is not found

- INPUTS:  
  cohortName: String
- OUTPUTS:
  true -> Successfull  
  null -> Cohort not found

searchForCohort(String) -> Searches for a cohort or returns null if cohort is not found

- INPUTS:
  cohortName: String
- OUTPUTS:
  Cohort: Object  
  Null -> Cohort not found

addStudentToCohort(String, Number) -> Adds a student to cohort or returns null if student and/or cohort is not found

- INPUTS:
  cohortName: String  
  studentId: Number
- OUTPUTS:
  True -> Successfull  
  Null -> Student and/or cohort not found

removeStudentFromCohort(String, Number) -> Removes a student from a cohort or returns null if student and/or cohort is not found

- INPUTS:
  cohortName: String  
  studentId: Number
- OUTPUTS:
  True -> Successfull  
  Null -> Student and/or cohort not found
