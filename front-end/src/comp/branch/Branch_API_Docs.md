# Branch App API Documentation

### Website Url:
    - https://big-pizza.onrender.com/

## Branch : 
##### ADD One OR GET ALL 
    - localhost/api/branch/
    - methods : GET /POST
    - description:
        - GET All Branchs OR add new One
    - Request-Body:
            {
                  "name": STRING, # REQUIERD
                  "verbose_name": STRING, # REQUIERD
                  "company": FK , # FOREIGNKEY TO Company Table
            }
#### Update or Delete or Get BY ID
    - localhost/api/branch/{pk}/
    - methods : GET / PUT / DELETE
    - description:
        - GET Branch by ID OR UPDATE Branch OR DELETE By ID
    - Request-Body:
            {
                  "name": STRING, # REQUIERD
                  "verbose_name": STRING, # REQUIERD
                  "company": FK , # FOREIGNKEY TO Company Table
            }



## Branch Managers : 
##### ADD One OR GET ALL 
    - localhost/api/branch-managers/
    - methods : GET /POST
    - description:
        - GET All Branch Manager OR add new One
    - Request-Body:
            {
                    "branch": FK, # REQUIERD FK FOR TABLE "branch"
                    "manager": FK, # REQUIERD FK FOR TABLE "user"
            }
#### Update or Delete or Get BY ID
    - localhost/api/branch-managers/{pk}/
    - methods : GET / PUT / DELETE
    - description:
        - GET Branch Manager by ID OR UPDATE OR DELETE By ID
    - Request-Body:
            {
                    "branch": FK, # REQUIERD FK FOR TABLE "branch"
                    "manager": FK, # REQUIERD FK FOR TABLE "user"
            }



## Branch Phone : 
##### ADD One OR GET ALL 
    - localhost/api/branch-phone/
    - methods : GET /POST
    - description:
        - GET All Branch Phone OR add new One
    - Request-Body:
            {
                    "branch": FK, # REQUIERD FK FOR TABLE "branch"
                    "phone": FK, # REQUIERD FK FOR TABLE "phone"
            }
#### Update or Delete or Get BY ID
    - localhost/api/branch-phone/{pk}/
    - methods : GET / PUT / DELETE
    - description:
        - GET Branch Phone by ID OR UPDATE OR DELETE By ID
    - Request-Body:
            {
                    "branch": FK, # REQUIERD FK FOR TABLE "branch"
                    "phone": FK, # REQUIERD FK FOR TABLE "phone"
            }




## Branch Address : 
##### ADD One OR GET ALL 
    - localhost/api/branch-address/
    - methods : GET /POST
    - description:
        - GET All Branch Address OR add new One
    - Request-Body:
            {
                    "address": FK , # REQUIERD FOR TABEL NAME "address"
                    "branch": FK  , # REQUIERD FOR TABEL NAME "branch"
            }
#### Update or Delete or Get BY ID
    - localhost/api/branch-address/{pk}/
    - methods : GET / PUT / DELETE
    - description:
        - GET Branch Address by ID OR UPDATE OR DELETE By ID
    - Request-Body:
            {
                    "address": FK , # REQUIERD FOR TABEL NAME "address"
                    "branch": FK  , # REQUIERD FOR TABEL NAME "branch"
            }




## Branch Location : 
##### ADD One OR GET ALL 
    - localhost/api/branch-location/
    - methods : GET /POST
    - description:
        - GET All Branch Location OR add new One
    - Request-Body:
            {
                "branch": FK , # REQUIERD FOR TABEL NAME "branch"
                "location": FK , # REQUIERD FOR TABEL NAME "location"
            }
#### Update or Delete or Get BY ID
    - localhost/api/branch-location/{pk}/
    - methods : GET / PUT / DELETE
    - description:
        - GET OR UPDATE OR DELETE By ID
    - Request-Body:
            {
                "branch": FK , # REQUIERD FOR TABEL NAME "branch"
                "location": FK , # REQUIERD FOR TABEL NAME "location"
            }




## Branch Status : 
##### ADD One OR GET ALL 
    - localhost/api/branch-status/
    - methods : GET /POST
    - description:
        - GET All Rows OR add new One
    - Request-Body:
            {
                "status": STRING, # REQUIERD
                "language": FK , # REQUIERD FOR TABEL NAME "language"
            }
#### Update or Delete or Get BY ID
    - localhost/api/branch-status/{pk}/
    - methods : GET / PUT / DELETE
    - description:
        - GET OR UPDATE OR DELETE By ID
    - Request-Body:
            {
                "status": STRING, # REQUIERD
                "language": FK , # REQUIERD FOR TABEL NAME "language"
            }




## Branch Current Status : 
##### ADD One OR GET ALL 
    - localhost/api/branch-current-status/
    - methods : GET /POST
    - description:
        - GET All Rows OR add new One
    - Request-Body:
            {
                "status": FORIEGNKEY, # REQUIERD FOR TABEL NAME "status"
                "branch": FORIEGNKEY, # REQUIERD FOR TABEL NAME "branch"
            }
#### Update or Delete or Get BY ID
    - localhost/api/branch-current-status/{pk}/
    - methods : GET / PUT / DELETE
    - description:
        - GET OR UPDATE OR DELETE By ID
    - Request-Body:
            {
                "status": FORIEGNKEY, # REQUIERD FOR TABEL NAME "status"
                "branch": FORIEGNKEY, # REQUIERD FOR TABEL NAME "branch"
            }




## Branch QRCODE : 
##### ADD One OR GET ALL 
    - localhost
    - methods : GET /POST
    - description:
        - GET All Rows OR add new One
    - Request-Body:
            {
          
            }
#### Update or Delete or Get BY ID
    - localhost
    - methods : GET / PUT / DELETE
    - description:
        - GET OR UPDATE OR DELETE By ID
    - Request-Body:
            {

            }




## Branch Service Price : 
##### ADD One OR GET ALL 
    - localhost/api/branch-service-price/
    - methods : GET /POST
    - description:
        - GET All Rows OR add new One
    - Request-Body:
            {
                  "branch": FORIEGNKEY, # REQUIERD FOR TABEL NAME "branch"
                  "service_price": DECIMAL, # REQUIERD
            }
#### Update or Delete or Get BY ID
    - localhost/api/branch-service-price/
    - methods : GET / PUT / DELETE
    - description:
        - GET OR UPDATE OR DELETE By ID
    - Request-Body:
            {
                  "branch": FORIEGNKEY, # REQUIERD FOR TABEL NAME "branch"
                  "service_price": DECIMAL, # REQUIERD
            }



## Branch Work Time: 
##### ADD One OR GET ALL 
    - localhost/api/branch-work-time/
    - methods : GET /POST
    - description:
        - GET All Rows OR add new One
    - Request-Body:
            {
                    "branch": FORIEGNKEY, # REQUIERD FOR TABEL NAME "branch"
                    "open_at": TIME, # REQUIERD
                    "close_at": TIME, # REQUIERD
            }
#### Update or Delete or Get BY ID
    - localhost/api/branch-work-time/
    - methods : GET / PUT / DELETE
    - description:
        - GET OR UPDATE OR DELETE By ID
    - Request-Body:
            {
                    "branch": FORIEGNKEY, # REQUIERD FOR TABEL NAME "branch"
                    "open_at": TIME, # REQUIERD
                    "close_at": TIME, # REQUIERD
            }

# Full Data & Queris

# Branch Full Data
    - url : localhost/api/branch-full-data/
    - methods : GET
    - description:
        - GET All Rows with all Details
    - Response-Body:
            {

            }

# Branch Managers Full Data
    - url : localhost/api/branch-managers-full-data/
    - methods : GET
    - description:
        - GET All Rows with all Details
    - Response-Body:
            {

            }


# Branch Phone Full Data
    - url : localhost/api/branch-phone-full-data/
    - methods : GET
    - description:
        - GET All Rows with all Details
    - Response-Body:
            {

            }

# Branch Address Full Data
    - url : localhost/api/branch-address-full-data/
    - methods : GET
    - description:
        - GET All Rows with all Details
    - Response-Body:
            {

            }

# Branch Status Full Data
    - url : localhost/api/branch-status-full-data/
    - methods : GET
    - description:
        - GET All Rows with all Details
    - Response-Body:
            {

            }


# Branch Work Time Full Data
    - url : localhost/api/branch-work-time-full-data/
    - methods : GET
    - description:
        - GET All Rows with all Details
    - Response-Body:
            {

            }

# Branch Current Status Full Data
    - url : localhost/api/branch-current-status-full-data/
    - methods : GET
    - description:
        - GET All Rows with all Details
    - Response-Body:
            {

            }

# Branch Service Price Full Data
    - url : localhost/api/branch-service-price-full-data/
    - methods : GET
    - description:
        - GET All Rows with all Details
    - Response-Body:
            {

            }


# Get Company Branch
    - localhost/api/get-company-branch/{pk}/
    - methods : GET
    - description:
        - GET All Rows that have the same Company id
    - Response-Body:
            {

            }
