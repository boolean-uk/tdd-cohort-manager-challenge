# DOMAIN MODEL

## CORE REQUIREMENTS

1. Create a cohort with a cohort name
2. Search for a cohort by cohort name
3. Add student to a specific cohort
4. Remove a cohort by cohort name
5. Remove student from a specific cohort
6. Throw errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.

## CORE DOMAIN MODEL

|Requirement number|Class|Methods|Inputs|Scenarios|Outputs|Data|
|-|-|-|-|-|-|-|
||Manager()|||||properties: properties: idCount(@integer), list(@objects[])|
|||setList()|items(@objects)||list(@objects)
|||setIDCount()||| this.idCount(@integer)|
|||assignID()||| this.idCount(@integer)|
|||handleNewItems()||| this.list|
||CohortManager()|||||properties: list(@cohort[]), idCount(@integer)|
|2||searchBy()|cohortName(@string)|cohort found| cohort(@Cohort)|
|6||||cohort not found| throw error|
|4||removeCohort()|cohortName(@string)|cohort found| this.list(@cohort[])|
|6||||cohort not found|throw error|
||Cohort()|||||properties: id(@string), studentCount(@integer) cohortName(@string), students(@Student[])|
|1||constructor()|cohortName(@string)|invalid input| throw error|
|||||valid input| new instance of class Cohort()|
|3||addStudent()|studentID(@string)|student found|this.students(@Student[])|
|||||student not found|throw error|
|5||removeStudent()|studentID(@string)|student found|this.students(@cohort[])|
|6||||student not found| throw error|
||StudentManager()||||properties: studentIDcount, list(@Students[])|
||Student()|||||properties: studentID(@string), firstName(@string), lastName(@string), githubUsername(@string), email(@string)|
|||constructor()|firstName(@string), lastName(@string), githubUsername(@string), email(@string)|valid input| throw error|
|||||valid input| new instance of class Student()|
