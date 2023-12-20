## Domain Model

| Object        | Properties      | Methods        | Inputs              | Notes | Scenario              | Output  | Example                                                        |
| ------------- | --------------- | -------------- | ------------------- | ----- | --------------------- | ------- | -------------------------------------------------------------- |
| CohortManager | cohorts(@Array) |                |                     |       |                       |         |                                                                |
|               |                 | createCohort() | cohortName(@String) |       | name is unique        | @Object | `createCohort('cohort-11') => {name: cohort-11, students: []}` |
|               |                 |                |                     |       | name is not unique    | @String | `createCohort('cohort-11') => "cohort-11 already exists"`      |
|               |                 | findCohort()   | cohortName(@String) |       | cohort exists         | @Object | `findCohort('cohort-11') => {name: cohort-11, students: []}`   |
|               |                 |                |                     |       | cohort does not exist | @String | `findCohort('cohort-99') => "cohort-99 doesn't exist"`         |
