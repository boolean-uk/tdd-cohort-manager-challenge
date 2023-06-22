|User story|Methods|Inputs|Scenario|Output|
|:----|:----|:----|:----|:----|
|As a user, So I can find a specific student, I want to search student by studentID|`searchByStudentId(studentID)`|studentID|If studentID exist|`true|
| | | |If studentID does not exist|throw Error|
|As a user, So the cohorts are not too extensive, I want to have a limit of 24 students|`addStudent(cohortName, studentName)`|cohortName, studentName (first name, last name, GitHub username, email)|If students (array.length >= 24) cohort is full return message|throw Error|
| | | |If students is not full (array.length < 24) return cohort updated|Updated cohort containing the student|
|As a user, So I don't lose my sanity It's not possible to add cohorts with names already in use|`addCohort(cohort)`|cohort|If cohort name does not exist|Updated cohort manager containing cohorts `@object[]`|
| | | |If cohort name already exists|throw Error|
|As a user, So I don't lose my sanity It's not possible to the same student to multiple cohorts|`addStudent(cohortName, githubUsername)`|cohortName, studentName (first name, last name, GitHub username, email)|If student is in any other cohorts|throw Error|
| | | |If student is not in any other cohorts|Updated cohort containing the student|
|As a user, So I can find all students with same full name,I want to search students by fullname and get all matching results|`searchByFullname(fullname)`|fullname|If matching student objects exist|`true|
| | | |If no matching student objects exist|throw Error|
| | | |If student is not in any other cohorts|Updated cohort containing the student|
|As a manager of the cohort, So I can get notified when a student is added,I want to receive a text with student name|`addStudent(cohortName, studentName)`|cohortName, studentName (first name, last name, GitHub username, email)|If cohort name exists|Updated cohort containing the student and text sent|
| | | |If cohort name does not exist|throw Error|
|As a manager of the cohort, So I can get notified when a student is deleted,I want to receive a text with student githubUsername|`removeStudent(githubUsername)`|githubUsername|If githubUsername exists in the cohort|Cohort Manager with the student removed from the cohort `@object[]` and text sent|
| | | |If githubUsername does not exist|Cohort Manager remains unchanged|
