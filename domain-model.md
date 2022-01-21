# Cohort Manager Challenge

## Standard Criteria

```
The Cohort Manager should be able to support the following interactions

1. Create a cohort with a cohort name -> DONE
2. Search for a cohort by cohort name -> DONE
3. Add student to a specific cohort
4. Remove a cohort by cohort name -> DONE
5. Remove student from a specific cohort
6. Return errors if cohort not found -> DONE
7. Return errors if student not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.
```
## Domain Model - Standard Criteria

```
Class CohortManager

- Properties
    - studentObject -> creates a new instance of a student
    - cohortID -> will identify the cohort and increment every time a new cohort is added
    - cohortArray -> this will contain the objects representing each student
    - academyArray -> this will contain all the arrays representing the different cohorts

- Methods
    - findCohortByID() -> find a cohort by ID
    - addStudent() -> add a new student object and pushes it to the cohort array
    - deleteCohort() -> delete a cohort from the cohort array
    - deleteStudent() -> delete a student object from the cohort data structure
    - error() -> throws an error if a student or a cohort we are looking for does not exist
```

## Extension Criteria

```
1. Search for student by student ID
2. Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit.
3. Cohorts can't have the same name, and can't exist without a name
4. The same student can't exist in multiple cohorts.
5. A student can't be removed from a cohort if it wasn't present in the first place.
6. Search for students by name (first and last) and return all matching results

Your program should be composed of at least two classes
```
