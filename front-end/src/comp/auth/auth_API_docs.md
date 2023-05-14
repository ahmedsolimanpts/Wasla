# Auth Documentation

    App Url : https://big-pizza.onrender.com/

## Get All Users
    - url : localhost/api/users/
    - method : GET
    - description:
        - Get All Users Information
    - Response-Body:
            {
                "id": NUMBER,
                "password": STRING,
                "last_login": DATE_TIME,
                "is_superuser": BOOLEAN,
                "email":STRING,
                "is_staff": BOOLEAN,
                "is_active": BOOLEAN,
                "date_joined": DATE_TIME,
                "groups": [],
                "user_permissions": []
            }

## Sign UP
    - url : localhost/api/user/registration/
    - method : POST
    - description:
        - ADD new User
    - RequestBody:
        {

            "password": STRING, # REQUIERD
            "email": STRING, # REQUIERD
        }


## Login
    - url : localhost/api/user/login/
    - methods : POST
    - description:
        - LOGIN To The System and Generate token if user is authienticate 
    - RequestBody:
            {
                "password": STRING, # REQUIERD
                "email": STRING , # REQUIERD
            }
    - Response-Body:
        {
            "refresh": "",
            "access": ""
        }

## Generate Token
    - url : localhost/api/token/
    - methods : POST
    - description:
        - Get User Token by sending email and password in json requests and respone with token and refresh
    - RequestBody:
            {
                "password": STRING, # REQUIERD
                "email": STRING , # REQUIERD
            }
    - Response-Body:
        {
            "refresh": "",
            "access": ""
        }

## Refresh Token
    - url : localhost/api/token/refresh/
    - methods : POST
    - description:
        - regenrate User token before expire by sending refresh tocken in json requests
    - RequestBody:
            {
                "refresh": STRING, # REQUIERD
            }

##  Verify Token
    - url : localhost/api/token/verify/
    - methods : POST
    - description:
        - know if User token is valid or not by sending
            token in json requests if valid will return empty json {}
    - RequestBody:
            {
                "token": STRING, # REQUIERD
            }

## Get User Data From Token
    - url : localhost/api/token/user-data/
    - methods : POST
    - description:
        - get user data from access token
    - RequestBody:
            {
                "token": STRING, # REQUIERD
            }

# Create Admin Users
    - url : localhost/api/create-admin-users/
    - methods : POST
    - description:
        - Creat new Admin user or Regular User
    - RequestBody:
            {
                "password": STRING, # REQUIERD
                "email": STRING , # REQUIERD
                "is_superuser": BOOLEN , # REQUIERD
            }