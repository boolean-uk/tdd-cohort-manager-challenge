# Edd's wonderful model

| Status | Class          | Methods                  | Inputs             | Scenario                                          | Output                                                             |
| ------ | -------------- | ------------------------ | ------------------ | ------------------------------------------------- | ------------------------------------------------------------------ |
|        | CohortManager  |                          |                    |                                                   |                                                                    |
| [ x ]  |                | searchCohortByName       | name:string        | typeof input === String, input.length > 0         | return foundCohort:Cohort where cohort.name === inputName          |
| [ x ]  |                |                          |                    | invalid input                                     | throw error ('cohort name not found')                              |
|        |                |                          |                    |                                                   |                                                                    |
|        |                | searchCohortById         | id:number          | typeof input === Number                           | return foundCohort:Cohort where cohort.cohortId === inputId        |
|        |                |                          |                    | typeof input === Number, no match                 | throw error ('cohort id not found')                                |
|        |                |                          |                    | typeof input !== Number                           | throw error ('input must be Number')                               |
|        |                |                          |                    |                                                   |                                                                    |
| [ x ]  |                | createCohort             | name:string        | typeof input === String, input.length > 0         | return cohorts.push(cohort)                                        |
|        |                |                          |                    | typeof input !== String OR input.length === 0     | throw error ('input must be String')                               |
|        |                |                          |                    | nameInput matches existing cohort                 | throw error ('input matches existing cohortId: {matchingCohortId}) |
|        |                |                          |                    |                                                   |                                                                    |
| [ x ]  |                | removeCohortByName       | name:string        | inputName matches cohort.name in cohorts[]        | remove matching cohort from cohorts[], return cohorts[].length     |
| [ ]    |                |                          |                    | inputName does not match cohort.name in cohorts[] | throw error ('cohort not found')                                   |
|        |                |                          |                    |                                                   |                                                                    |
|        |                |                          |                    |                                                   |                                                                    |
| [ x ]  | Cohort         |                          |                    |                                                   |                                                                    |
| [ x ]  |                | setCapacity              | newCapacity:number | typeof input === Number                           | set Cohort.capacity = inputCapacity                                |
| [ x ]  |                |                          |                    | typeof input !== Number                           | throw error ('capacity number must be Number)                      |
|        |                |                          |                    |                                                   |                                                                    |
|        | StudentManager |                          |                    |                                                   |                                                                    |
|        |                | searchStudentById        | id:number          | id:number found in students                       | return foundStudent:Student where student.studentId === inputId    |
|        |                |                          |                    |                                                   |                                                                    |
|        |                | searchStudentByCohortId  | id:number          | id:number                                         | return Student[] where student.cohortId === inputId                |
|        |                |                          |                    |                                                   |                                                                    |
|        |                | searchStudentByFirstName | name:string        |                                                   | return Student[] where student.firstName === inputName             |
|        |                |                          |                    |                                                   |                                                                    |
|        |                | searchStudentByLastName  | name:string        |                                                   | return Student[] where student.lastName === inputName              |
|        |                |                          |                    |                                                   |                                                                    |
| [ ]    |                | assignStudentToCohort    | studentId:number,  | inputIds match existing Ids                       | foundStudent.cohortId = inputCohortId, return foundStudent         |
|        |                |                          | cohortId:number    |                                                   |                                                                    |
|        |                |                          |                    | studentId not found                               | throw error ('student not found')                                  |
|        |                |                          |                    | cohortId not found                                | throw error ('cohort not found')                                   |
|        |                |                          |                    | cohortStudentSize >= cohort.capacity              | throw error ('cohort capacity exceeded')                           |
|        |                |                          |                    |                                                   |                                                                    |
|        |                | removeStudentFromCohort  | studentId:number,  | inputIds match existing Ids                       | foundStudent.cohortId = null, return foundStudent                  |
|        |                |                          | cohortId:number    |                                                   |                                                                    |
|        |                |                          |                    | studentId not found                               | throw error ('studentId not found')                                |
|        |                |                          |                    | cohortId not found                                | throw error ('cohortId not found')                                 |
|        |                |                          |                    |                                                   |                                                                    |
|        |                |                          |                    | foundStudent.cohortId !== inputCohortId           | throw error ('student not in passed cohort')                       |
|        |                |                          |                    |                                                   |                                                                    |
| [ x ]  | Student        |                          |                    |                                                   |                                                                    |
| [ x ]  |                | details                  |                    |                                                   | return { ... student properties }                                  |
|        |                |                          |                    |                                                   |                                                                    |

## CohortManager

| Property | Type     | Data                      |
| -------- | -------- | ------------------------- |
| cohorts  | Cohort[] | [Cohort(), Cohort(), ...] |
|          |          |                           |

## Cohort

| Property | Type   | Data          |
| -------- | ------ | ------------- |
| cohortId | Number | 0             |
| name     | String | '2023 Summer' |
| capacity | Number | 24            |

## StudentManager

| Property | Type      | Data                        |
| -------- | --------- | --------------------------- |
| students | Student[] | [Student(), Student(), ...] |
|          |           |                             |

## Student

| Property       | Type   | Data              |
| -------------- | ------ | ----------------- |
| cohortId       | Number | 0                 |
| studentId      | Number | 0                 |
| firstName      | String | 'Bob'             |
| lastName       | String | 'Builder'         |
| gitHubUserName | String | 'BobbyBuilder'    |
| email          | String | 'Bob@Builder.com' |
|                |        |                   |
