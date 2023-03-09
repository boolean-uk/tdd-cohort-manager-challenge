<!-- The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Throw errors if student or cohort not found
- A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email. -->


***class Cohort
PROPERTIES
- cohortName: @string
- cohortID : @integer
- students: [array of students]

METHODS
createNewCohort(cohortName) -> create new cohort
input ->cohortName

-------------------------------

***class StudentsList
PROPERTIES
- studentID: @integer
- studenFirsttName: @str
- studenLasttName: @str
- githubUserName: @str  
- email: @ str

METHODS
createNewStudent (studentFirstName, studentLastName, githubUserName, email) -> creates new student
input -> full name, github user name and email

----------------------------------

***class CohortManager
PROPERTIES
- cohorts: [array of cohorts]
- students: [array of students]

METHOD

searchCohort(cohortName) -> search specific cohort in the cohort array
INPUT -> cohortName
OUTPUT -> cohort with matching with given name or throw if it is not found



removeCohort(cohortName) -> remove spesific cohort in the array of cohort
INPUT -> cohortName


removeStudentFromCohort(studentID, cohortID) -> remove student from spesific cohort
INPUT -> studentID and cohortID
OUTPUT -> student is removed from given cohort. updated cohort array that given
