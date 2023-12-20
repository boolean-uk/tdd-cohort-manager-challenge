## Domain Model

## Cohort Manger

| Object        | Properties      | Methods              | Inputs                                | Notes | Scenario              | Output  | Example                                                                                                                                                                                                                                              |
| ------------- | --------------- | -------------------- | ------------------------------------- | ----- | --------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CohortManager | cohorts(@Array) |                      |                                       |       |                       |         |                                                                                                                                                                                                                                                      |
|               |                 | createCohort()       | cohortName(@String)                   |       | name is unique        | @Object | `createCohort('cohort-11') => Cohort {name: cohort-11, students: []}`                                                                                                                                                                                |
|               |                 |                      |                                       |       | name is not unique    | @String | `createCohort('cohort-11') => "cohort-11 already exists"`                                                                                                                                                                                            |
|               |                 | findCohort()         | cohortName(@String)                   |       | cohort exists         | @Object | `findCohort('cohort-11') => Cohort {name: cohort-11, students: []}`                                                                                                                                                                                  |
|               |                 |                      |                                       |       | cohort does not exist | Error   | `findCohort('cohort-99') => Error: "Cohort doesn't exist"`                                                                                                                                                                                           |
|               |                 | addStudentToCohort() | student(@Object), cohortName(@String) |       | cohort exists         | @Object | `addStudentToCohort({firstName: "Kye", lastName: "Yee", github:"@yee0802", email: "kye@mail.com"}, "cohort-11") => Cohort {name: 'cohort-11',students: [Student {id: 1,firstName: 'Kye',lastName: 'Yee',github: '@yee0802',email: 'kye@mail.com'} }` |
|               |                 |                      |                                       |       | cohort does not exist | Error   | `addStudentToCohort({}, 'cohort-99') => Error: "Cohort does not exist"`                                                                                                                                                                              |

## Cohort

| Object | Properties                      | Methods | Inputs | Notes | Scenario | Output | Example |
| ------ | ------------------------------- | ------- | ------ | ----- | -------- | ------ | ------- |
| Cohort | name(@String), students(@Array) |         |        |       |          |        |         |

## Student

| Object  | Properties                                                                                  | Methods | Inputs | Notes | Scenario | Output | Example |
| ------- | ------------------------------------------------------------------------------------------- | ------- | ------ | ----- | -------- | ------ | ------- |
| Student | id(@String), firstName(@String), lastName(@String), githubUsername(@String), email(@String) |         |        |       |          |        |         |
