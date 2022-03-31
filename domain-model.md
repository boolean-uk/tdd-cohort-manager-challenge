### Manager class
| Properties   | Methods | Output | Comments
|--------------|---------|--------|---------
| cohorts = [] | createCohort (cohortName @String) | @Cohort | adds new cohort to cohorts array
| studentID @Number | getCohort (cohortName @String) | @Cohort **OR** false (not found) | looks for cohort in cohorts array
|              | removeCohort (cohortName @String) | @Cohort **OR** error (not found) | deletes a specific cohort
|              | addStudent (firstName @String, lastName @String, gitHub @String, email @String, cohortName @String) | @Student **OR** error (not found)| adds a student to a specific cohort
|              | removeStudent (studentID @Number, cohortName @String) | @Student **OR** error (not found) | deletes a student from a specific cohort
|              | getStudent(studentID @Number) | @Student | looks for a student in all cohorts

---

### Cohort class
| Properties    | Methods | Output | Comments
|---------------|---------|--------|---------
| name @String  | addStudent (@Student) | @Student | adds a student to the students list
| students = [] | removeStudent (studentID) | @Student **OR** error (not found) | removes student from students list

---

### Student class
| Properties        |
|-------------------|
| studentID @Number |
| firstName @String |
| lastName @String  |
| gitHub @String    |
| email @String     |