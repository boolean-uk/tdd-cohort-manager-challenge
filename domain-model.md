## Domain Model

#### Standard Requirements
```
The Cohort Manager should be able to support the following interactions

✅ Create a cohort with a cohort name
✔ Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Throw errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.
```
--- 

| Method  | Input | Data | Scenario | Output |
| ------- | ----- | ---- | -------- | ------ |
| createCohort(cohortName) | cohortName(@string) | | if a new name does not exist in the cohortList and if there is a cohort name given |  cohortList[{ name: 'Cohort 1', students: [ ] }] |
| searchCohort() | cohortName(@string) | | if cohort name exists in the cohort list | return cohort being searched |


