# Domain Model

## CLASS CohortManager

1. Create a cohort with a cohort name
2. Search for a cohort by cohort name
3. Remove a cohort by cohort name
4. Add student to a specific cohort

Properties: - allStudents: [@Student] - cohorts: [@Cohort], IDCount: number, allStudentsCount: number

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

5. createStudent(firstName: string, lastName: string, githubUser: string, email: string, cohortID: string)
   INPUT: firstName, lastName, githubUser details, student email, cohortID of cohort student is to be in.
   OUTPUT: @Student where studentID increments on each new creation, and cohort student lists update

6. addStudent(name, surname, github, email, cohort)
   INPUT: student ID
   OUTPUT: - if exists => the student - if does not exist => error "Student not found"

7. removeStudent(name, surname, nameCohort)
   INPUT: student ID
   OUTPUT: - if exists => the student removed from the list => void - if does not exist => error "Student not found"

## CLASS Cohort

1. A cohort should have a list of students.
2. Remove student from a specific cohort
3. Throw errors if student or cohort not found

properties: - IDCohort: number - nameCohort: string - maxStudents: number - studentsInCohort: [@Student], cohortStudentCount: number
