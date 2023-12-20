# Standard requirements

The Cohort Manager should be able to support the following interactions

- ✅ Create a cohort with a cohort name
- ✅ Search for a cohort by cohort name
- ✅ Add student to a specific cohort
- ✅ Remove a cohort by cohort name
- ✅ Remove student from a specific cohort
- ✅ Throw errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.

| Objects    | Properties | Messages                                 | Scenario                                | Output                                           |
| ---------- | ---------- | ---------------------------------------- | --------------------------------------- | ------------------------------------------------ |
| CohortList |            | createCohort(name@Str)                   | Name is not empty                       | Object of created cohort                         |
|            |            |                                          | Name is empty                           | Thrown error: "Enter name for create new cohort" |
|            |            | getCohortByName(name@Str)                | Cohort with entered name exist          | Object of searched cohort                        |
|            |            |                                          | Cohort with entered name doesn't exist  | Thrown error: "Cohort not Found"                 |
|            |            | addStudent(student@Str, cohort@str)      | Cohort with entered name exist          | List of students of entered cohort               |
|            |            |                                          | Cohort with entered name doesn't exist  | Thrown error: "Cohort not Found"                 |
|            |            | removeCohort(name@Str)                   | Cohort with entered name exist          | Removed cohort                                   |
|            |            |                                          | Cohort with entered name doesn't exist  | Thrown error: "Cohort not Found"                 |
|            |            | removeStudent(studentId@Int, cohort@Str) | Student exist in entered cohort         | Removed student                                  |
|            |            |                                          | Student doesn't exist in entered cohort | Thrown error: "Student not Found"                |
|            |            |                                          | Cohort doesn't exist                    | Thrown error: "Cohort not Found"                 |

| Objects | Properties     | Messages | Scenario | Output |
| ------- | -------------- | -------- | -------- | ------ |
| Student | studentID@Int  |          |          |        |
|         | firstName@Str  |          |          |        |
|         | lastName@Str   |          |          |        |
|         | githubName@Str |          |          |        |
|         | email@Str      |          |          |        |
