## Domain Model

| Method         | Input               | Data | Scenario                                       | output |
|:--------------:|:-------------------:|      | :--------------------------------------------:
| createCohort() | cohortName(@string) |      | if a new name does not exist in the cohortList | cohortList[{name: 'Cohort 1', students: []}]
|                |                     |      |  and if there is a cohort name given           |
