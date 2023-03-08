# Domain models

## Domain Model Table

| Objects------ | Properties ---- | Methods ---------- | Input ------------------------------------- | Output ---------------------------------------------------------- |
| :------------ | :-------------- | :----------------- | :------------------------------------------ | :---------------------------------------------------------------- |
| CohortManager | cohorts ------- | createCohort ----- | name: @string ----------------------------- | new cohort ------------------------------------------------------ |
| ------------- | students ------ | createStudent ---- | firstName, lastName, ghub, email: @strings  | new student, increment idCounter -------------------------------- |
| ------------- | idCounter ----- | findCohort ------- | name: @string ----------------------------- | cohort object / error if not found ------------------------------ |
| ------------- | --------------- | addStudentToCohort | id, name: @integer, @ string -------------- | cohort with new student / error if not found -------------------- |
| ------------- | --------------- | removeCohort ----- | name: @string ----------------------------- | cohorts with specific cohort removed / error if not found ------- |
| :------------ | :-------------- | :----------------- | :------------------------------------------ | :---------------------------------------------------------------- |
| Cohort ------ | name ---------- | removeStudent ---- | id: @integer ------------------------------ | cohort with specific student removed / error not found ---------  |
| ------------- | students ------ | ------------------ | ------------------------------------------- | ----------------------------------------------------------------- |
| ------------- | capacity ------ | ------------------ | ------------------------------------------- | ----------------------------------------------------------------- |
| :------------ | :-------------- | :----------------- | :------------------------------------------ | :---------------------------------------------------------------- |
| Student ----- | studentId ----- | ------------------ | ------------------------------------------- | ----------------------------------------------------------------- |
| ------------- | firstName ----- | ------------------ | ------------------------------------------- | ----------------------------------------------------------------- |
| ------------- | lastName ------ | ------------------ | ------------------------------------------- | ----------------------------------------------------------------- |
| ------------- | githubUserName  | ------------------ | ------------------------------------------- | ----------------------------------------------------------------- |
| ------------- | email --------- | ------------------ | ------------------------------------------- | ----------------------------------------------------------------- |

## Domain Model Text

### CohortManager

class CohortManager

PROPERTIES

- cohorts: array of class Cohort
- students: array of class Student
- idCounter: integer

METHODS

- createCohort(name: @string) -> Cohort
  - creates a new cohort, pushes to cohorts array.
  - output when title is empty -> error
  - output when title is valid -> Cohort
- createStudent(fName, lName, ghub, email: @strings) -> Student
  - creates a new student, pushes to students array
  - output when any field is empty -> error
  - output when all fields are valid -> Student
- findCohort(name: @string) -> Cohort
  - searches cohorts for cohort by name
  - output when no cohort found -> error
  - output when cohort is valid -> Cohort
- addStudentToCohort(id: @integer, name: @string) -> Cohort
  - searches students by id, searches cohorts by name. Adds Student to Cohort
  - output when no cohort OR student found -> error
  - output when cohort and student are valid -> Cohort with Student added.
- removeCohort(name: string) -> Cohorts
  - searches cohorts by name, removes cohort from cohorts.
  - output when no cohort found -> error
  - output when cohort name is valid -> Cohorts with Cohort removed.

### Cohort

class Cohort

PROPERTIES

- name: @string
- students: array of Student
- capacity: @integer default = 24

METHODS

- removeStudent(id: @integer) -> Cohort
  - searches cohort for student by id, delete student from cohort
  - output when no student found -> error
  - output when studentID is valid -> Cohort with Student removed.

### Student

class Student

PROPERTIES

- studentId: @integer
- firstName: @string
- lastName: @string
- githubUsername: @string
- email: @string
