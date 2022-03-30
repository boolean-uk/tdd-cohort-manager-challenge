## Requirement

The Cohort Manager should be able to support the following interactions

- (DONE) Create a cohort with a cohort name
- Search for a cohort by cohort name
- (DONE) Add student to a specific cohort
- Remove a cohort by cohort name
- (DONE) Remove student from a specific cohort
- Return errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.

## Noun & Verb

### Noun

- cohort (with cohort name / list of students)
- student (studentID / first name / last name / github username/ email)

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
|        |                           | add(@student)     | no output        | students.push(@student), maybe return a message "you've added: @student"                               |
|        |                           | remove(@fullName) | @Array[@student] | students.includes(@fullName) ? {students.filter(student => student.fullName !=== @fullName)} : "ERROR" |

| Class         | Properties                | Methods             | Output                        | Memo                                                                                                         |
| ------------- | ------------------------- | ------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
| CohortManager |                           |                     |                               |                                                                                                              |
|               | cohortList Array[@cohort] |                     |                               |                                                                                                              |
|               |                           | add(@cohort)        | no output                     | cohortList.push(@cohort)                                                                                     |
|               |                           | search(@cohortName) | @cohort / "ERROR"             | cohortList.find(cohort => cohort.name === @cohortName ? @cohort : "ERROR")                                   |
|               |                           | remove(@cohortName) | list Array[@cohort] / "ERROR" | cohortList.includes(@cohortName) ? {cohortList.filter(cohort => cohortList.name !=== @cohortName)} : "ERROR" |

–––
