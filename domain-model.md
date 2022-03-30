## Requirement

The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
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

| Class   | Properties          | Methods             | Output                        | Memo                                                                                         |
| ------- | ------------------- | ------------------- | ----------------------------- | -------------------------------------------------------------------------------------------- |
| Cohorts |                     |                     |                               |                                                                                              |
|         | list Array[@cohort] |                     |                               |                                                                                              |
|         |                     | add(@cohort)        | no output                     | list.push(@cohort)                                                                           |
|         |                     | search(@cohortName) | @cohort / "ERROR"             | list.find(cohort => cohort.name === @cohortName ? @cohort : "ERROR")                         |
|         |                     | remove(@cohortName) | list Array[@cohort] / "ERROR" | list.includes(@cohortName) ? {list.filter(cohort => cohort.name !=== @cohortName)} : "ERROR" |
