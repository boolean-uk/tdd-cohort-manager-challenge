# Domain model

## Cohort manager

### User Stories

```text
The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Throw errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.


```

## Nouns

**Cohort Manager**,

**Cohort**,

**Student**,

## Verbs

**Create** a cohort with a cohort name (Create Cohort)

**Search** for a cohort by cohort name (Find Cohort)

**Add** student to a specific cohort (Add Student to Cohort)

**Remove** a cohort by cohort name (Remove Cohort)

**Remove** student from a specific cohort (Remove Student from Cohort)

**Throw** errors if student or cohort not found (Error Handling)

## Cohort Manager

| Object| Properties| Methods|Inputs| Notes | Scenario| Output  |Example|
|-------|-----------|--------|------|-------|---------|---------|-------|
| CohortManager | cohorts(@Array) |||||||
||| createCohort()| cohortName(@String)|| name is unique| @Object | `createCohort('cohort-11') => Cohort {name: cohort-11, students: []}`|
|||||| name is not unique     | @String | `createCohort('cohort-11') => "cohort-11 already exists"`|
||| findCohort()| cohortName(@String)|| cohort exists| @Object | `findCohort('cohort-11') => Cohort {name: cohort-11, students: []}`|
|||||| cohort does not exist  | Error   | `findCohort('cohort-99') => Error: "Cohort does not exist"`|
||| removeCohortByName()| cohortName(@String)|| cohort exists| @String | `removeCohortByName('cohort-11') => "cohort-11 removed successfully"`|
|||||| cohort does not exist  | Error   | `removeCohortByName('cohort-11') => Error: "Cohort doesn't exist"`|
||| addStudentToCohort()      | student(@Object), cohortName(@String)   || cohort exists| @Object | `addStudentToCohort({firstName: "Pierluigi", lastName: "Capirci", github:"@PCapid3V", email: "pierluigi.capirci89@gmail.com"}, "cohort-11") => Cohort {name: 'cohort-11',students: [Student {id: 1,firstName: "Pierluigi", lastName: "Capirci", github:"@PCapid3V", email: "pierluigi.capirci89@gmail.com"} }` |
|||||| cohort does not exist  | Error   | `addStudentToCohort({}, 'cohort-33') => Error: "Cohort does not exist"`|
|||findStudentById()|studentId(@Number), cohortName(@String)||cohort and student exist|@Object|`findStudentById(studentId(@Number), cohortName(@String)) => return student` |
||||||student does not exist | Error | `findStudentInCohort(studentId(@Number), cohortName(@String)) => Error: "Student does not exist"`
||| removeStudentFromCohort() | studentId(@Number), cohortName(@String) || cohort exists| @String | `removeStudentFromCohort(2, 'cohort-11') => ' Pierluigi has successfully been removed from cohort-11'`|
|||||| cohort does not exist  | Error   | `removeStudentFromCohort(2, 'cohort-hove') => Error: "Cohort does not exist"`|
|||||| student does not exist | Error   | `removeStudentFromCohort(67, 'cohort-11') => Error: "Student does not exist"`|

## Cohort

| Object | Properties                      | Methods | Inputs | Notes | Scenario | Output | Example |
| ------ | ------------------------------- | ------- | ------ | ----- | -------- | ------ | ------- |
| Cohort | name(@String), students(@String[]) |         |        |       |          |        |         |

## Student

| Object  | Properties | Methods | Inputs | Notes | Scenario | Output | Example |
| ------- | -----------| ------- | ------ | ----- | -------- | ------ | ------- |
| Student | id(@Number), firstName(@String), lastName(@String), githubUsername(@String), email(@String) |
||||||
