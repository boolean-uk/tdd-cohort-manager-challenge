### Manager class
| Properties   | Methods | Output | Comments
|--------------|---------|--------|---------
| cohorts = [] | createCohort (cohortName @String) | @Cohort | adds new cohort to cohorts array
|              |search (cohortName @String) | @Cohort **OR** error (not found) | looks for cohort in cohorts array
|              | removeCohort (cohortName @String) | @Cohort **OR** error (not found) | deletes a specific cohort

---

### Cohort class
| Properties    | Methods | Output | Comments
|---------------|---------|--------|---------
| name @String  | addStudent (@Student, cohortName @String) | @Student | adds a student to a specific cohort
| students = [] | removeStudent (studentID, cohortName @String) | @Student **OR** error (not found) | deletes a student from a specific cohort

---

### Student class
| Properties        |
|-------------------|
| studentID @Number |
| firstName @String |
| lastName @String  |
| gitHub @String    |
| email @String     |