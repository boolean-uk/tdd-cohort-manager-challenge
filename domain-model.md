Pseudocode | Objects  | Methods |Messages / Properties | Output
---- |---- | ---- | ---- | ----
|| Cohort (class)||this.classes @array||
|||addStudent()|add student to cohort|
|||removeStudent()|remove student from cohort|
||Students(class)||studentID@number,firstName&LastName @string|
|| cohortManager(class)|| this.cohortClasses @array and this.error message @string | 
|||  add(cohortN) | adds cohort to cohort classes using [.push] | cohort pushed into this.cohortClasses
||| foundCohort(cohortN) | checks if cohort exists using [For-loop] and [Conditional statement] | returns the cohort name or error message
||| remove(cohortN) | removes cohort using [For-loop] and [Conditional statement] and [.splice] | the cohort is removed or an error message is returned
<!-- |||addStudent() -->