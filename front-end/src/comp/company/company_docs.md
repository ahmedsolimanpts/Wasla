# Company App Documentation

### Website Url:
    - https://big-pizza.onrender.com/

## Company Type :
##### ADD One OR GET ALL 
    -  url : localhost/api/company-type/
    - methods : GET / POST
    - description:
        - GET All Company Types OR add new One
    - Request-Body for POST OR:
        {
            "type": STRING, # REQUIERD
            "language": PRIMARYKEY, # REQUIERD FOR TABEL NAME "language"
        }
#### Update or Delete or Get BY ID
    - localhost/company-type/{pk}
    - methods : GET / PUT / DELETE
    - description:
        - GET Company Type By id OR update by ID  OR Delete company Type
    - Request-Body FOR UPDATE:
            {
                "type": STRING, # REQUIERD
                "language":PRIMARY_KEY, # REQUIERD FOR TABEL NAME "language"
            }


## Company : 
##### ADD One OR GET ALL 
    - localhost/api/company/
    - methods : GET /POST
    - description:
        - GET All Company OR add new One
    - Request-Body:
            {
                "name": STRING, # REQUIERD
                "verbose_name":STRING, # REQUIERD
                "companytype": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "CompanyType"
            }
#### Update or Delete or Get BY ID
    - localhost/api/company/{pk}
    - methods : GET / PUT / DELETE
    - description:
        - GET Company by ID OR UPDATE Company OR DELETE
    - Request-Body:
            {
                "name": STRING, # REQUIERD
                "verbose_name":STRING, # REQUIERD
                "companytype": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "CompanyType"
            }


## Compny Managers :
##### ADD One OR GET ALL 
    - url : localhost/api/company-managers/
    - methods : GET /POST
    - description:
        - GET All Company Managers OR add new One
    - Request-Body:
            {
                "company": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "Company"
                "manager": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "manager"
            }

#### Update or Delete or Get BY ID
    - url : localhost/api/company-managers/{pk}
    - methods : GET / PUT / DELETE
    - description:
        - GET Company Managers by ID OR UPDATE Company OR DELETE
    - Request-Body:
            {
                "company": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "Company"
                "manager": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "manager"
        }



## Compny Members :
##### ADD One OR GET ALL 
    - url : localhost/api/company-members/
    - methods : GET /POST
    - description:
        - GET All 
    - Request-Body:
            {
                "company": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "Company"
                "user": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "manager"
            }

#### Update or Delete or Get BY ID
    - url : localhost/api/company-members/{pk}/
    - methods : GET / PUT / DELETE
    - description:
        - GET Company Member by ID OR UPDATE Company OR DELETE
    - Request-Body:
            {
                "company": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "Company"
                "user": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "manager"
        }



## Compny Location :
##### ADD One OR GET ALL 
    - url : localhost/api/company-location/
    - methods : GET / POST
    - description:
        - GET ALL Company  Location OR ADD New One
    - Request-Body:
            {
                "company": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "Company"
                "location": FOREGIN_KEY, # REQUIERD FOR TABEL NAME "location"
            }

#### Update or Delete or Get BY ID
    - url : localhost/api/company-location/{pk}
    - methods : GET / PUT / DELETE
    - description:
        - GET Company Location by ID OR UPDATE Company Location OR DELETE
    - Request-Body:
            {
                "company": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "Company"
                "location": FOREGIN_KEY, # REQUIERD FOR TABEL NAME "location"

            }


## Compny Address :
##### ADD One OR GET ALL 
    - url : localhost/api/company-address/
    - methods : GET / POST
    - description:
        - GET ALL Company  Address OR ADD New One
    - Request-Body:
          {
              "company": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "Company"
              "address": FOREGIN_KEY, # REQUIERD FOR TABEL NAME "address"
          }

#### Update or Delete or Get BY ID
    - url : localhost/api/company-address/{pk}
    - methods : GET / PUT / DELETE
    - description:
        - GET Company Adress by ID OR UPDATE Company Address OR DELETE
    - Request-Body:
            {
                "company": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "Company"
                "address": FOREGIN_KEY, # REQUIERD FOR TABEL NAME "address"

            }


## Compny Logo :
##### ADD One OR GET ALL 
    - url : localhost/api/company-logo/
    - methods : GET / POST
    - description:
       - GET ALL Company Logo OR ADD New One
    - Request-Body:
           {
               "company": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "Company"
               "logo": FOREGIN_KEY, # REQUIERD FOR TABEL NAME "logo"
           }

#### Update or Delete or Get BY ID
    - url : localhost/api/company-logo/{pk}
    - methods : GET / PUT / DELETE
    - description:
        - GET Company Logo by ID OR UPDATE Company Logo OR DELETE
    - Request-Body:
            {
                "company": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "Company"
                "logo": FOREGIN_KEY, # REQUIERD FOR TABEL NAME "logo"

            }


## Compny prcode :
##### ADD One OR GET ALL 
    - url : localhost/api/company-prcode/
    - methods : GET / POST
    - description:
        - GET ALL Company prcode OR ADD New One
    - Request-Body:
            {
                "company": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "Company"
                "qr_code": FOREGIN_KEY, # REQUIERD FOR TABEL NAME "QrCode"
            }

#### Update or Delete or Get BY ID
    - url : localhost/api/company-prcode/{pk}
    - methods : GET / PUT / DELETE
    - description:
        - GET Company prcode by ID OR UPDATE Company prcode OR DELETE
    - Request-Body For PUT:
           {
               "company": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "Company"
               "qr_code": FOREGIN_KEY, # REQUIERD FOR TABEL NAME "QrCode"
           }


## Company Phone :
##### ADD One OR GET ALL 
    - url : localhost/api/company-phone/
    - methods : GET / POST
    - description:
        - GET ALL Company  Phone OR ADD New One
    - Request-Body:
            {
                "company": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "Company"
                "phone": FOREGIN_KEY, # REQUIERD FOR TABEL NAME "phone"
            }
#### Update or Delete or Get BY ID
    - url : localhost/api/company-phone/{pk}
    - methods : GET / PUT / DELETE
    - description:
        - GET Company Phone by ID OR UPDATE Company Phone OR DELETE
    - Request-Body:
            {
                "company": FOREGIN_KEY, # REQUIERD  FOR TABEL NAME "Company"
                "phone": FOREGIN_KEY, # REQUIERD FOR TABEL NAME "phone"
            }

# Join & Get Full Data For Tabels
    - method : GET
    - description:
        - Join Tabels and Get all Realated data to the row in
### Company Type Full Data:
    - url : localhost/api/company-type-full-data/
    - Response-Body Example:
            {
            "id": 3,
            "language": {
                "id": 2,
                "language": "en"
            },
            "type": "Drink"
            }

### Company Full Data:
    - url : localhost/api/company-full-data/
    - Response-Body Example:
             {
                "id": 3,
                "companytype": {
                    "id": 3,
                    "type": "Drink",
                    "language": 2
                },
                "name": "HartAttack",
                "verbose_name": "hat",
                "create_at": "2023-03-26T23:17:00.891000Z"
            }


### Company Managers :
    - url : localhost/api/get-company-manager/{pk}/
    - methods : GET
    - description:
        - GET All Managers For A Company
    - url -parameters:
        - pk : is the id for Company

### User Company_Managers :
    - url : localhost/api/get-user-company-manager/{pk}/
    - methods : GET
    - description:
        - GET All Company that manage by a user
    - url -parameters:
        - pk : is the id for user


### User Company_Member :
    - url : localhost/api/user-company-member/{pk}/
    - methods : GET
    - description:
        - GET All Company that a user is member in
    - url -parameters:
        - pk : is the id for user

### Company Phone Full Data:
    - url : localhost/api/company-phone-full-data/
    - Response-Body Example:
            {

            }

### Company Location Full Data:
    - url : localhost/api/company-location-full-data/
    - Response-Body Example:
            {

            }

### Company Address Full Data:
    - url : localhost/api/company-address-full-data/
    - Response-Body Example:
            {

            }

### Company Managers Full Data:
    - url : localhost/api/company-managers-full-data/
    - Response-Body Example:
            {

            }


### Company Member Full Data:
    - url : localhost/api/company-members-full-data/
    - Response-Body Example:
            {

            }


### Company Information Full Data:
    - url : localhost/api/get-company-info/{pk}/
    - Response-Body Example:
            {
                "name": "Hart Attack",
                "verbose_name": "HTK",
                "companytype__type": "Drink",
                "companyphone__phone__phone": "01015044531",
                "companylocation__location": 1,
                "companyaddress__address__description": "new",
                "companyaddress__address__street": "str 1",
                "companyaddress__address__building_number": "115",
                "companyaddress__address__district__district": "District Test",
                "companyaddress__address__district__city": 1
            }