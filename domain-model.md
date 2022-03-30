## Requirement

The Cohort Manager should be able to support the following interactions

### Core criteria

- (DONE) Create a cohort with a cohort name
- (DONE) Search for a cohort by cohort name
- (DONE) Add student to a specific cohort
- (DONE) Remove a cohort by cohort name
- (DONE) Remove student from a specific cohort
- (DONE) Return errors if student or cohort not found

### Extended criteria

- (DONE) Search for student by student ID
- Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit.
- Cohorts can't have the same name, and can't exist without a name
- The same student can't exist in multiple cohorts.
- A student can't be removed from a cohort if it wasn't present in the first place.
- Search for students by name (first and last) and return all matching results

Your program should be composed of at least two classes

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.

## Noun & Verb

### Noun

- cohort (with cohort name / list of students)
- student (studentID / first name / last name / github username/ email)
  –––
- student ID
- fixed capacity

### Verb

- create
- search
- add
- remove
- return error

#### Domain Model

| Class   | Properties                                    | Methods | Output | Memo                                  |
| ------- | --------------------------------------------- | ------- | ------ | ------------------------------------- |
| Student |                                               |         |        |                                       |
|         | studentID @ Number                            |         |        |                                       |
|         | fullName firstName @String + lastName @String |         |        |                                       |
|         | githubName @String                            |         |        |                                       |
|         | email @String                                 |         |        |                                       |
|         |                                               |         |        | \*All of the data are via constructor |

| Class  | Properties                | Methods           | Output           | Memo                                                                                                   |
| ------ | ------------------------- | ----------------- | ---------------- | ------------------------------------------------------------------------------------------------------ |
| Cohort |                           |                   |                  |                                                                                                        |
|        | name @String              |                   |                  | via constructor                                                                                        |
|        | students @Array[@student] |                   |                  |                                                                                                        |
|        | capacity @Num             |
|        |                           | add(@student)     | no output        | students.push(@student) \*make sure that @Array[@student].length <= capacity or else "ERROR"           |
|        |                           | remove(@fullName) | @Array[@student] | students.includes(@fullName) ? {students.filter(student => student.fullName !=== @fullName)} : "ERROR" |
|        |                           | search(@id)       | @student         | same logic as search(@cohortName) in CohortManager class                                               |

| Class         | Properties                | Methods             | Output                        | Memo                                                                                                         |
| ------------- | ------------------------- | ------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
| CohortManager |                           |                     |                               |                                                                                                              |
|               | cohortList Array[@cohort] |                     |                               |                                                                                                              |
|               |                           | add(@cohort)        | no output                     | cohortList.push(@cohort)                                                                                     |
|               |                           | search(@cohortName) | @cohort / "ERROR"             | cohortList.find(cohort => cohort.name === @cohortName ? @cohort : "ERROR")                                   |
|               |                           | remove(@cohortName) | list Array[@cohort] / "ERROR" | cohortList.includes(@cohortName) ? {cohortList.filter(cohort => cohortList.name !=== @cohortName)} : "ERROR" |
