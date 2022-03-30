# Doman Model

# Manager
PROPERTIES
- list of cohorts @array []

METHODS
- createCohortName()
- searchCohortName()
- removeCohortName()

### Cohort
PROPERTIES
- cohort name @string
- list of students @array[]

METHODS
- addStudent()
- removeStudent()
- removeStudent (error, student not found)

OUTPUT
- @array [cohort names]

## Student
PROPERTIES
- student @object (studentID, first name, last name, github username, email)
