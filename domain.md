The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name /  push item into an array
- Search for a cohort by cohort name / may need to use a loop
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
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
        student            |    {studentID,              |                                  |     @string / 
                           |    firstname,               |                                  |     function
                           |    lastnAme,                |
                           |    githubuser}              |
                                             
                           

        






