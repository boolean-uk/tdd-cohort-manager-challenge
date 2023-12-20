The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Throw errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.

- Search for student by student ID
- Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit.
- Cohorts can't have the same name, and can't exist without a name
- The same student can't exist in multiple cohorts.
- A student can't be removed from a cohort if it wasn't present in the first place.
- Search for students by name (first and last) and return all matching results

| Name | Properties | Messages | Input | Output | Tests ❌ ✅ |
| - | - | - | - | - | -  |
| Branches@Object[] | | | | | ✅ 
| addBranch | | | location@String | @Object[]Branches | ✅
| Branch | Location @String
| | Cohorts | @Object[] | | | ❌
| | | addCohort | @Object{} | @Object{} | ✅
| | | removeCohort | @Object{} | @Object{} | ✅
| | | searchStudentsByName | @String | @Object[] | ❌
| | | cohortExists | @Object{} | @boolean | ❌
| Cohort | Name@String 
| | students @Object[] | | | | ❌
| | | getStudentbyName() | fullName()@String | @Object{} | ❌
| | | addStudent() | @Object{} | @Object{} | ❌
| | | removeStudent() | @Object{} | @Object{} | ❌
| | | setName() | cohortName@String | @Object{} | ❌
| | | isFull() | | @Boolean | ❌
| Student | firstName @String | | | | ❌
| | lastName @ String | | | | ❌
| | githubUsername @ String | | | | ❌
| | EMail @ String | | | | ❌
| | inCohort | Cohort@Object{} | | | ❌
| | | fullName() | – | @String | ❌
| | | assignCohort() | Cohort@Object{} | Student@Object{} | ❌
