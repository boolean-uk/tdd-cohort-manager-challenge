Domain Model - Cohort Manager 

The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Return errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.
```

CLASS
-----
CohortManager() - Will hold all the methods related to the Cohort Manager methods.

PROPERTIES
----------
cohorts = []
cohortCapacity = int x = 24

METHODS
-------
- createCohort(name/str) - Will create new a new cohort and call it what we tell it to.
- findCohort(name/str) - Will search all cohorts by name and return the match or an error if not found.
- removeCohort(name/str) - Will remove the cohort from the existing cohort list or return an error if not found.
- findStudent(id) - Will search all students by id and return the match or an error if not found.
- createStudent(id, firstName, lastName, github username, email) - This will create the student.

-=+=-

CLASS
-----
Cohort() - Will hold all the methods related to searching for specific students and specific student management.

METHODS
-------
- addStudent(cohortName) - Will add a student into an existing cohort and populate all the passed details or return an error if not found.
- removeStudent(id) - Will remove the student from the cohort they are in based on their ID or return an error if not found.

-=+=-

CLASS
-----
Student() - Will hold all the methods related to creating new students.

PROPERTIES
----------
studentId = id
firstName = firstName
lastName = lastName
github = github
email = email