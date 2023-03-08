DOMAINE MODEL

cohortManager class
properies:
 - cohorts: []
 - students:[]
 - idCounter: int

 methods:

findCorhortByName(name) -> 
    input: cohort name
    output: a single cohort
    output: if cohort not found throw an error  


cohort class:
properites:
 - name: str
 - students: []


methods:

addStudentToCohort(name, course) -> 
    input: name of student, course of student
    output: student class instance added to students array

RemoveStudent from cohort(name) ->
    input: name of student
    output: student removed from students arr
    output: if student not found throw an error

student class 
properties:
 - firstName: str
 - lastName: str
 - studentID: int
 - githubUsername: str
 - email: str