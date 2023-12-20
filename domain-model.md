## Domain Model

| Object         | Properties      | Methods        | Inputs              | Notes | Scenario          | Output  | Example                                                        |
| -------------- | --------------- | -------------- | ------------------- | ----- | ----------------- | ------- | -------------------------------------------------------------- |
| CohortManger() | cohorts(@Array) |                |                     |       |                   |         |                                                                |
|                |                 | createCohort() | cohortName(@String) |       | name is unique    | @Object | `createCohort('cohort-11') => {name: cohort-11, students: []}` |
|                |                 |                |                     |       | name isn't unique | @String | `createCohort('cohort-11') => "cohort-11 already exists"`      |
