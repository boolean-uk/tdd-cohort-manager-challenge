# Extensions

## CLASS CohortManager

1. Search for student by student ID
2. Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit.
3. Cohorts can't have the same name, and can't exist without a name
4. The same student can't exist in multiple cohorts.
5. A student can't be removed from a cohort if it wasn't present in the first place.
6. Search for students by name (first and last) and return all matching results

Properties: - allStudents: [@Student] - cohorts: [@Cohort], IDCount: number, allStudentsCount: number

METHODS:

1. findStudentbyID(id: number)
   INPUT: studentID
   OUTPUT: @student

2. UPDATE: addNewStudent -> output will be determined based on @cohortStudentCount
   INPUT: @addNewStudent
   OUTPUT: @cohortStudentCount at capacity? throw error : add student

3. UPDATE: createCohort(nameCohort)
   INPUT: unique cohort name
   OUTPUT: name already exists || no name input? Throw error : @Cohort

4. The same student can't exist in multiple cohorts.
   moveStudent(studentName: string, surname: string, cohortName: string)
   INPUT: studentName, student surname, newcohort
   OUTPUT: original cohort - student, updated cohort + moved student

5. already covered in core

6. findStudentbyName('name')
   INPUT: student's name or student's surname
   OUTPUT: all students that match

   findStudentbyFullame('name', 'surname')
   INPUT: student's name or student's surname
   OUTPUT: all students that match

## CLASS Cohort

1. A cohort should have a list of students.
2. Remove student from a specific cohort
3. Throw errors if student or cohort not found

properties: - IDCohort: number - nameCohort: string - maxStudents: number - studentsInCohort: [@Student], cohortStudentCount: number
