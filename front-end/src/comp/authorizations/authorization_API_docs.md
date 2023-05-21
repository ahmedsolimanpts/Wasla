# Authorizations App API Documentation

### Website Url:
    - https://big-pizza.onrender.com/

## Feature : 
##### ADD One OR GET ALL 
    - url : localhost/api/feature/
    - methods : GET /POST
    - description:
        - GET All OR add new One
    - Request-Body:
            {
                  "feature": STRING, # REQUIERD
                  "description": TEXTFIELD, # OPTIONAL
                  "language": FK , # FOREIGNKEY TO Language Table
            }
#### Update or Delete or Get BY ID
    - url : localhost/api/feature/{pk}/
    - methods : GET / PUT / DELETE
    - description:
        - GET ROW by ID OR UPDATE , DELETE By ROW ID
    - Request-Body:
            {
                "feature": STRING, # REQUIERD
                "description": TEXTFIELD, # OPTIONAL
                "language": FK , # FOREIGNKEY TO Language Table
            }

## Liciens : 
##### ADD One OR GET ALL 
    - url : localhost/api/liciens/
    - methods : GET /POST
    - description:
        - GET All OR add new One
    - Request-Body:
            {
                "feature" : FK , # REQUIERD TO Feature Table
                "branch" : FK , # REQUIERD TO Branch Table
                "company" : FK , # FOREIGNKEY TO Company Table
                "start_date" : DATE , # REQUIERD
                "start_date" : DATE , # REQUIERD
            }
#### Update or Delete or Get BY ID
    - url : localhost/api/liciens/{pk}/
    - methods : GET / PUT / DELETE
    - description:
        - GET ROW by ID OR UPDATE , DELETE By ROW ID
    - Request-Body:
            {
                "feature" : FK , # REQUIERD TO Feature Table
                "branch" : FK , # REQUIERD TO Branch Table
                "company" : FK , # FOREIGNKEY TO Company Table
                "start_date" : DATE , # REQUIERD
                "start_date" : DATE , # REQUIERD
            }

## Permission : 
##### ADD One OR GET ALL 
    - url : localhost/api/permission/
    - methods : GET /POST
    - description:
        - GET All OR add new One
    - Request-Body:
            {

                "permission" : FK , # REQUIERD TO Permission Table
                "description" : FK , # REQUIERD TO Description Table
                "language" : FK , # FOREIGNKEY TO Language Table

            }
#### Update or Delete or Get BY ID
    - url : localhost/api/permission/{pk}/
    - methods : GET / PUT / DELETE
    - description:
        - GET ROW by ID OR UPDATE , DELETE By ROW ID
    - Request-Body:
            {

                "permission" : FK , # REQUIERD TO Permission Table
                "description" : FK , # REQUIERD TO Description Table
                "language" : FK , # FOREIGNKEY TO Language Table

            }

## User Permission : 
##### ADD One OR GET ALL 
    - url : localhost/api/user-permissions/
    - methods : GET /POST
    - description:
        - GET All OR add new One
    - Request-Body:
            {

                "permission" : FK , # REQUIERD TO Permission Table
                "user" : FK , # REQUIERD TO User Table
                "branch" : FK , # FOREIGNKEY TO Branch Table

            }
#### Update or Delete or Get BY ID
    - url : localhost/api/user-permissions/{pk}/
    - methods : GET / PUT / DELETE
    - description:
        - GET ROW by ID OR UPDATE , DELETE By ROW ID
    - Request-Body:
            {

                "permission" : FK , # REQUIERD TO Permission Table
                "user" : FK , # REQUIERD TO User Table
                "branch" : FK , # FOREIGNKEY TO Branch Table

            }


#  Full Data &  GET Queries

### Get Feature Full Data
    - url : localhost/api/feature-full-data/
    - methods : GET
    - description : 
        -  JOIN Table With all Other Related Tabel


### Get liciens Full Data
    - url : localhost/api/liciens-full-data/
    - methods : GET
    - description : 
        -  JOIN Table With all Other Related Tabel

### Get Permission Full Data
    - url : localhost/api/permission-full-data/
    - methods : GET
    - description : 
        -  JOIN Table With all Other Related Tabel

### Get User Permission Full Data
    - url : localhost/api/user-permissions-full-data/
    - methods : GET
    - description : 
        -  JOIN Table With all Other Related Tabel

### Get User Permission
    - url : localhost/api/get-user-permissions/{pk}/
    - methods : GET
    - description : 
        - GET all Permission to a Specific User
    - url Query : 
        - PK : is the user id  

### Get All Branch Feature
    - url : localhost/api/get-branch-feature/{pk}/
    - methods : GET
    - description : 
        - GET all Feature to a Specific Branch what 
          ever is the time end or not
    - url Query : 
        - PK : is the Branch id  

### Get All Available Branch Feature
    - url : localhost/api/get-available-branch-feature/{pk}/
    - methods : GET
    - description : 
        - GET all Feature to a Specific Branch Where the end date
            is Greater than or equal the current date
    - url Query : 
        - PK : is the Branch id  