### Cohort Manager
-Properties
    -cohorts list(unique)

-methods
    -crud cohorts
    -crud students

-notes
    - encapsulate create functions for validation before insertion
    - unique students across all cohorts


---
### Cohort
-Properties
    -name(required)
    -list of students (max 24)

-methods
    -crud
    -read
        -search by id
        -search by name(first+last)
        -hasStudent(id)
-notes
    -throw if not found

---
### Student
-Properties
    - id
    - first name
    - last name
    - github
    - email


-notes
    -throw if not found
    -private readonly id

