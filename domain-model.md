# Domain Model

## class Cohort

**Properties:**

- cohortName: String
- students: Array

**Methods:**

newCohort(String) -> Returns an object of the newly created cohort

- INPUTS:  
  cohortName: String
- OUTPUTS:  
  Cohort: Object

## class CohortManager

**Properties:**

- cohorts: Array

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
  Throw Error -> Cohort not found

searchForCohort(String) -> Searches for a cohort or returns null if cohort is not found

- INPUTS:
  cohortName: String
- OUTPUTS:
  cohort: Object

addStudentToCohort(String, Number) -> Adds a student to cohort or returns null if student and/or cohort is not found

- INPUTS:
  cohortName: String  
  studentId: Number
- OUTPUTS:
  True -> Successfull  
  Null -> Student not found

removeStudentFromCohort(String, Number) -> Removes a student from a cohort or returns null if student and/or cohort is not found

- INPUTS:
  cohortName: String  
  studentId: Number
- OUTPUTS:
  True -> Successfull  
  Null -> Student and/or cohort not found
