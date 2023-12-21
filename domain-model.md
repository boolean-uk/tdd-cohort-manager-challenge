# DOMAIN MODEL

## CORE REQUIREMENTS

1. Create a cohort with a cohort name

   ```js
   // The user will need to create a new CohortManager(), for example
   const myCohortManager = new CohortManager()
   // then do:
   const newCohort = Cohort('some cool name')
   // and finally:
   myCohortManager.handleNewItem(newCohort)
   ```

2. Search for a cohort by cohort name

   ```js
   // if the set up in 1. has been done, then:
   myCohortManager.searchByName('some cool name')
   ```

3. Add student to a specific cohort

    ```js
   // if the set up in 1. has been done, then:
   const studentManager = new StudentManager()
   const newStudent = new Student()
   studentManager.handleNewItem(newStudent)
   newCohort.addStudent(1, studentManager)
   // this assume that a school would first want their students to exist in their 
   // systems and all be stored somewhere, before starting to move them in 
   // and out of cohorts as required. Also, it means that, should a cohort
   // be deleted by mistake (and they can be removed), the student data
   // would persist within studentManager.
   ```

4. Remove a cohort by cohort name

    ```js
   // if the set up in 1. has been done, then:
   myCohortManager.removeCohort('some cool name')
   ```

5. Remove student from a specific cohort

    ```js
   // if the set up in 1. has been done, and 4. did not happen:
   newCohort.removeStudent(1)
   ```

6. Throw errors if student or cohort not found - DONE

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.

## CORE DOMAIN MODEL

|Requirement number|Class|Methods|Inputs|Scenarios|Outputs|Data|
|-|-|-|-|-|-|-|
||Manager()|||||properties: properties: idCount(@integer), list(@objects[])|
|||setList()|items(@objects)||list(@objects)
|||setIDCount()||| this.idCount(@integer)|
|||assignID()||| this.idCount(@integer)|
|||handleNewItems()||| this.list|
||CohortManager()|||||properties: same as Manager()|
|2||searchBy()|cohortName(@string)|cohort found| cohort(@Cohort)|
|6||||cohort not found| throw error|
|4||removeCohort()|cohortName(@string)|cohort found| this.list(@cohort[])|
|6||||cohort not found|throw error|
||Cohort()|||||properties: id(@string), studentCount(@integer) cohortName(@string), students(@Student[])|
|1||constructor()|cohortName(@string)|invalid input| throw error|
|||||valid input| new instance of class Cohort()|
|||searchById()|studentId(@string)|student found| cohort(@Cohort)|
|||||student not found| throw error|
|3||addStudent()|id(@string)|student found|this.students(@Student[])|
|||||student not found|throw error|
|5||removeStudent()|id(@string)|student found|this.students(@cohort[])|
|6||||student not found| throw error|
||StudentManager()||||properties: same as Manager()|
||Student()|||||properties: id(@string), firstName(@string), lastName(@string), githubUsername(@string), email(@string)|
|||constructor()|firstName(@string), lastName(@string), githubUsername(@string), email(@string)|valid input| throw error|
|||||valid input| new instance of class Student()|
