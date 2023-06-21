| class         | properties   | methods                                                          | scenario                                           | output                | side-effect                                                 |
| ------------- | ------------ | ---------------------------------------------------------------- | -------------------------------------------------- | --------------------- | ----------------------------------------------------------- |
| CohortManager | cohorts: arr | createCohort(cohortName: string)                                 | name doesnt exist in `cohorts`                     | true                  | A new cohort will be added to the `cohorts` property        |
|               |              |                                                                  | name exists in `cohorts`                           | false                 | throw new Error('Cohort already exists')                                                            |
|               |              | findCohortByName(cohortName: string)                             | cohort exists                                      | cohort: obj           |                                                             |
|               |              |                                                                  | cohort doesnt exist                                | false                 | throw new Error(cohort doesnt exist)                                                            |
|               |              | addStudentToCohort(studentName: string, cohortName: string)      | cohort exists and student isn't in the cohort      | true                  | a `student` class instance is added to the specified cohort |
|               |              |                                                                  | cohort exists and student is already in the cohort | false                 | throw new Error("student is already in the cohort")             |
|               |              |                                                                  | cohort doesnt exist                                | false                 | throw new Error("cohort doesnt exist")                          |
|               |              | removeCohortByName(cohortName: string)                           | cohort exists                                      | removedCohort: obj    |                                                             |
|               |              |                                                                  | cohort doesnt exist                                | false                 | throw new Error("cohort doesnt exist")                          |
|               |              | removeStudentFromCohort(studentName: string, cohortName: string) | cohort exists and student is in the cohort         | removedStudent: class | student is removed from cohort                              |
|               |              |                                                                  | cohort exists but student isnt in the cohort       | false                 | throw new Error("student isnt in the cohort")                   |
|               |              |                                                                  | cohort doesnt exist                                | false                 | throw new Error("cohort doesnt exist")                          |
|               |              |                                                                  |                                                    |                       |                                                             |

```js
const cohortManager = new CohortManager()
cohortManager.cohorts // should contain (as an example):

[
{ id: 1, name: "Cohort 1", students:  [
	{ studentID: 1, firstName: "Bob", lastName: "Smith", ghUsername: "git-is-good", email: "1337programmer@hotmail.com" },
	{ studentID: 2, firstName: "Bill", lastName: "Smith", ghUsername: "git-is-great", email: "1337programmer2@hotmail.com" } ]
}
]

```
