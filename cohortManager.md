# Domain Model

## CLASS CohortManager

1. Create a cohort with a cohort name
2. Search for a cohort by cohort name
3. Remove a cohort by cohort name
4. Add student to a specific cohort

Properties: - students: [@Student] - cohorts: [@Cohort]

METHODS:

1. createNewCohort(string)
   INPUT: name of cohort
   OUTPUT: Cohort item - idCohort increments

2. searchCohort(string)
   INPUT: @nameCohort that user would like to search
   OUTPUT:

   - if cohort exists: Cohort
   - if cohort does not exist: alert "Cohort not found"

3. deleteCohort(string)
   INPUT: @nameCohort
   OUTPUT:

   - if cohort exists: Cohort removed from @cohorts (void)
   - if cohort does not exist: alert "Cohort not found"

4. reassignStudentCohort(string, number)
   INPUT: @StudentID of student to assign, cohortID of where to assign student to
   OUTPUT: student moved to appropriate cohort, @cohortID of @Student updates

## CLASS Cohort

1. A cohort should have a list of students.
2. Remove student from a specific cohort
3. Throw errors if student or cohort not found

properties: - idCohort: number - nameCohort: string - maxStudents: number - students: [@Student]

METHODS:

1. addStudent(@number)
   INPUT: student ID
   OUTPUT: - if exists => the student - if does not exist => error "Student not found"

2. removeStudent(@number)
   INPUT: student ID
   OUTPUT: - if exists => the student removed from the list => void - if does not exist => error "Student not found"

## CLASS Student

1. Each student should have a studentID, first name, last name, github username, email.

properties:

- studentID: number
- cohortID: number
- firstName: string
- lastName: string
- githubUser: string
- email: string

METHODS:

1. createStudent(firstName: string, lastName: string, githubUser: string, email: string, cohortID: string)
   INPUT: firstName, lastName, githubUser details, student email, cohortID of cohort student is to be in.
   OUTPUT: @Student where studentID increments on each new creation
