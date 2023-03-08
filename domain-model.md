# Cohort Manager Domain Model

- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Throw errors if student or cohort not found

## CLASS Cohort

PROPERTIES

- cohortID: unique number
- name: string
- students: [array of students in cohort]

METHODS
createNewCohort(name) -> creates new cohort
INPUT: name of cohort

## CLASS Student

PROPERTIES

- studentID: unique number
- firstName: string
- lastName: string
- email: string
- githubName: string
- cohortID: number

METHODS
createNewStudent(firstName, lastName, githubName) -> creates new student
INPUT: first and last name of student, github name or url

## CLASS Manager

PROPERTIES

- cohorts: [array of all cohorts]
- students: [array of all students]

METHOD
searchForCohort(name) -> searches the cohort array for the cohort with the matching name
INPUT: name of cohort
OUTPUT: cohort with matching name or throw error if cohort not found

changeStudentCohort(studentID, cohortID) -> changes the students current cohort
INPUT: id of student, id of cohort
OUTPUT: student is added to students array in cohort, cohort id in student info updates

removeCohort(name) -> removes cohort from the cohorts array
INPUT: name of cohort

removeStudentFromCohort(studentID, cohortID) -> removes the student from specified cohort
INPUT: id of student, id of cohort
OUTPUT: student is removed from students array in specified cohort, cohort id in student info updates
