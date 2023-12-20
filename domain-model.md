## Domain Model

| Method  | Input | Data | Scenario | Output |
| ------- | ----- | ---- | -------- | ------ |
| createCohort(cohortName) | cohortName(@string) | | if a new name does not exist in the cohortList and if there is a cohort name given |  cohortList[{ name: 'Cohort 1', students: [ ] }] |
| searchCohort() | cohortName(@string) | | if cohort name exists in the cohort list | return cohort being searched |


