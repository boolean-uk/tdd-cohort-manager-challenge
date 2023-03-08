MODEL
 
Verbs: Create, Search, Remove, Throw
nouns: CohortManager, Cohort, name, Student, error

-----

CohortManager class
Properties
-cohortsList[@Cohort]
-studentsList[@student]

Methods
-addCohort(@string)
    no return
-searchCohort(@string)
    return @cohort / throw error if not found
-addStudent(@string, @number, @name)
    no return

-----

Cohort class
properties
-cohortName (@string)
-studentsList [@student]

Methods
-constructor(@string)
    no return
-getName()
    return name
-addStudent(@student, @string)
    no return

-----

Student class
properties
-ID(@number)
-FirstName(@string)
-LastName(@string)
-gitUsername(@string)
-email(@string)

Methods
-constructor(@string, @number)
    no return
