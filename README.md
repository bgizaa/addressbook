****ADDRESS BOOK****

Get Started

_install node_modules_
1. ```npm install```

_create file for required environment variables_ <br>
2. ```touch .env``` <br>
   -  Add database connection variables in .env file <br><br>

   **Example of .env file** ⬇ <br>
      POSTGRES_HOST=127.0.0.1  <br>
      POSTGRES_PORT=5432  <br>
      POSTGRES_USER=postgres  <br>
      POSTGRES_DB=postgres  <br>
      POSTGRES_PASSWORD=root  <br>


_run project_ <br>
3. ```npm run start:dev```

API's
   - GET /contacts - List all contacts
   - GET /contacts/:phoneNumber - Search contact by Phone Number
   - GET /contacts/:firstName - Search contact by First Name
   - POST /contacts  - Create new contact
   
         
	"phoneNumber": "250782292968",
	"firstName": "ope",
	"lastName": "Ayuna",
	"emailAddress": "ayuna@gmail.com"

   - DELETE /contacts/:phoneNumber - Delete contact
   - PATCH /contacts/:phoneNumber - Update contact

         
	"phoneNumber": "250782292968",
	"firstName": "Rose",
	"lastName": "Ayuna",
	"emailAddress": "ayuna@gmail.com"
      