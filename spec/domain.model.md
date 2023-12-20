### Domain model for Standard Criteria  in order to do 
The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Throw errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.

+-----------------+          +----------------+
|     Cohort      |          |    Student     |
+-----------------+          +----------------+
| - cohortName    |          | - studentID    |
| - students: []  |<>--------| - firstName    |
|                 |          | - lastName     |
| + create()      |          | - githubUsername|
| + search()      |          | - email        |
| + addStudent()  |          +----------------+
| + remove()      |
| + removeStudent()|
+-----------------+
