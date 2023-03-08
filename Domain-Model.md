# Cohort Manager Challange

## The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Throw errors if student or cohort not found

### CLASS Cohort

**Properties:**

- cohortName: @str
- maxStudents: @int
- students: [@Student]

**Methods:**

addStudent(@int)

- Input: The id of the Student to add
- Output: successful ? void : error message

removeStudent(@int)

- Input: The id of the Student to remove
- Output: found ? void : error message

### CLASS CohortManager

**Properties:**

- students: [@Student]
- cohorts: [@Cohort]

**Methods:**

createCohort(@str)

- Input: Name of the cohort to create
- Output: successful ? void : error message

searchCohort(@str)

- Input: Name of the cohort to search for
- Output: found ? the searched cohort : error message

newStudent(@str, @str, @str, @str)

- Input: Firstname, Lastname, gitname and email
- Output: successful ? void : error message

addStudentToCohort(@int, @str)

- Input: Id of the student and cohort name
- Output:
  - cohort found ? void : error message
  - student added ? void : error message

removeCohort(@str)

- Input: The name of the cohort to remove
- Output: found ? void : error message

removeStudentFromCohort(@int, @str)

- Input: Id of Student and cohort name to remove from
- Output:
  - cohort found ? void : error message
  - student found ? void : error message
  - student in cohort ? void : error message

## A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email

### CLASS Student

**Properties:**

- studentID: @int
- firstname: @str
- lastname: @str
- gitname: @str
- email: @str
