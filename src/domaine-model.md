# Domaine Model

## User story

```
The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Throw errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.
```

## Keywords

1. **Verbs:** Create, Search, Add, Remove, Throw
2. **Nouns:** Cohort, name, student, errors

## COHORT MANAGER

Objects | Properties | Methods | Notes | Scenario | Output | Example
------- | ---------- | -------- | ----- | -------- | ------ | -------
| | | | | | |
CohortManager | this.cohortList, this.allStudents | createCohort(name(@string)) | a new cohort starting next month, a teacher creates a new class | a parameter is inputed | will return a new cohort class with a name and add it to this.cohortList |`Cohort {constructor() { this.name = name, this.studentList = []}}`
| | | | | no parameter added | throws an error stating "Cohort needs a name!" | `"Error: "Cohort needs a name!"`
| | | removeCohort(name(@string))| a teacher no longer needs cohort data | a name is inputed and it valid | found cohort is removed from this.cohortList | `this.cohortList = []`
| | | | | a name is inputed and it not found | throws an error | `Error: "No cohort found with that name"`
| | | | |No parameter is entered | Throwns an error | `Error: "Please enter a cohort name"`
| | | findCohort(name(@string)) | a teacher wants to find a specific cohort | a valid cohort name is inputted |returns the cohort object | `Cohort { name: name, studentList = []}`
| | | | | no paramter is inputed |throws an error | "Error: 'please enter a cohort name'"
| | | | |no cohort by that name is found |throws an error |"Error: 'no cohort found'

## COHORT

Objects | Properties | Methods | Notes | Scenario | Output | Example
------- | ---------- | -------- | ----- | -------- | ------ | -------
| | | | | | |
| Cohort | this.studentList | createStudent(firstName(@string), lastName(@string), gitHub(@string),email(@string)) | A teacher wants to add a student to a cohort | valid parameters added | returns the student class with as many details as possible  | `Student: {studentId: 1, firstName: 'string', lastName: 'string', gitHub: 'string',email: 'string'}`
| | | | | only a name was added | returns object with only a name and empty strings |
| | | | | | |

## STUDENT

Objects | Properties | Methods | Notes | Scenario | Output | Example
------- | ---------- | -------- | ----- | -------- | ------ | -------
| | | | | | |
| Student |this.studentID, this.firstName, this.lastName, this.gitHub, this.email | | | | |

| | | | | | |