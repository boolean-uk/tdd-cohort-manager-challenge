> Cohort Manager

The Cohort Manager should be able to support the following interactions

- Add student to a specific cohort
- Remove student from a specific cohort
- Return errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.

- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Remove a cohort by cohort name

| Objects              |     | Properties                           | Messages / Methods  | Output          |
| -------------------- | --- | ------------------------------------ | ------------------- | --------------- |
| cohort @class        |     | instance of cohort class @object     | createCohort(@str)  | @str            |
|                      |     |                                      | addCohort(@str)     | updated @array  |
|                      |     |                                      | removeCohort(@str)  | updated @array  |
|                      |     |                                      | searchCohort(@str)  | @boolean / @str |
|                      |     |                                      |                     |                 |
|                      |     |                                      |                     |                 |
| cohortManager @class |     |                                      | searchCohort(@str)  | @str            |
|                      |     |                                      | addStudent(@object) | @array @objects |
|                      |     |                                      | removeCohort(@str)  | updated @array  |
|                      |     |                                      | removeStudent(@str) | updated @array  |
|                      |     |                                      | existing(@str)      | @boolean        |
|                      |     |                                      | find(name @str)     |                 |
| student @class       |     | [ {studentID: @number, first: @str,  |                     |                 |
|                      |     | name: @str,last name: @str,          |                     |                 |
|                      |     | github username: @str, email: @str}] |                     |                 |
|                      |     |                                      |                     |                 |
|                      |     |                                      |                     |                 |
