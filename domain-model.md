# Domain Model

## class Cohort

**Properties:**

- cohortName: String
- students: Array

**Methods:**

newCohort(String) -> Returns an object of the newly created cohort.

- INPUTS:  
  cohortName: String
- OUTPUTS:  
  cohort: Object

## class CohortManager

**Properties:**

- cohorts: Array

**Methods:**

createCohort(String) -> Creates a cohort, adding it to the cohorts property.

- INPUTS:  
  cohortName: String
- OUTPUTS:  
  true -> Successfull

removeCohort(String) - Removes a cohort, updating the cohorts property.

- INPUTS:  
  cohortName: String
- OUTPUTS:
  true -> Successfull

searchForCohort(String) -> Searches for a cohort or throws error if cohort is not found.

- INPUTS:
  cohortName: String
- OUTPUTS:
  cohort: Object
  Throw error -> Cohort not found

addStudentToCohort(String, Number) -> Adds a student to cohort and updates student array inside cohorts property or throws error if student is not found.

- INPUTS:
  cohortName: String  
  studentId: Number
- OUTPUTS:
  True -> Successfull  
  Throw error -> Student not found

removeStudentFromCohort(String, Number) -> Removes a student from a cohort and updates student array inside cohorts property or throws error if student is not found.

- INPUTS:
  cohortName: String  
  studentId: Number
- OUTPUTS:
  True -> Successfull  
  Throw error -> Student not found
