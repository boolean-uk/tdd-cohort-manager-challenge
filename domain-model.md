| User Story | Methods | Inputs | Scenario | Output |
|------------|---------|--------|----------|--------|
| As a user, So I can create a cohort with a specific name when I want to, I'd like to add a cohort to my cohort manager app | `addCohort(cohort)` | cohort | If cohort is added to cohort manager | Updated cohort manager containing cohorts `@object[]` |
|            |         |        | If cohort manager has no cohorts | Empty array |
| As a user, So I can find a specific cohort, I want to search cohorts by name | `searchByCohortName(cohortName)` | cohortName | If searched cohort name exists | `@object[]` |
|            |         |        | If searched cohort name does not exist | Throw Error |
| As a user, So that I can add a new student, I'd like to add the same student to their corresponding cohort | `addStudent(cohortName, studentName)` | cohortName, studentName (first name, last name, GitHub username, email) | If cohort name exists | Updated cohort containing the student |
|            |         |        | If cohort name does not exist | Throw Error |
| As a user, So that I can change my cohort, I'd like to remove a cohort from my Cohort Manager | `removeCohort(cohort)` | cohort | If the cohort is in the Cohort Manager | Cohort Manager without the cohort `@object[]` |
|            |         |        | If the cohort is not in the Cohort Manager | Cohort Manager remains unchanged |
| As a user, So that I can modify a specific cohort, I'd like to remove a student from a specific cohort | `removeStudent(cohort, studentID)` | cohort, studentID | If studentID exists in the cohort | Cohort Manager with the student removed from the cohort `@object[]` |
|            |         |        | If studentID does not exist in the cohort | Cohort Manager remains unchanged |
