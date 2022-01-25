The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name /  push item into an array
- Search for a cohort by cohort name / may need to use a loop
- Add student to a specific cohort / adding a student cohort
- Remove a cohort by cohort name / remove a cohort on manager file.
- Remove student from a specific cohort /
- Return errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.

        CLASSES:           |    PROPERTIES:              |        METHODS:                  |     OUTPUT:
 ------------------------------------------------------------------------------------------------------------------
        cohortManager      |    this.cohortList = []     |        createCohort(cName)       |     ['']
                           |    this.capacity = 0        |        searchCohort(cName)       |     @number/counter
                           |    this.cName = cName       |        removeCohort(cName)       |     @string
 ------------------------------------------------------------------------------------------------------------------              
        cohort             |    this.studentList = []    |        addStudent(studentID)     |     @array
                           |    this.capacity = 0        |        removeStudent(studentID)  |     @number
 ------------------------------------------------------------------------------------------------------------------    
        student            |    {studentID,              |                                  |      
                           |    firstname,               |                                  |     
                           |    lastnAme,                |
                           |    githubuser}              |
                                             
                           

Extended    

- Search for student by student ID / create a loop based on student ID
- Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit. / Set capacity to 24 in constructor. IF capacity exceeded: return a string.
- Cohorts can't have the same name, and c an't exist without a name / compare two of the same name and return a string 
- The same student can't exist in multiple cohorts. / compare two of the same ID's and return a string 
- A student can't be removed from a cohort if it wasn't present in the first place. / try to remove a non-existing student: return a string
- Search for students by name (first and last) and return all matching results

Your program should be composed of at least two classes
