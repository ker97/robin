# Sample NodeJS files for booking app

**Setup**

```
sudo service mongod start
node src/index.js
```
To check if MongoDB is up and running:
```
sudo cat /var/log/mongodb/mongod.log
```
You should be seeing this snippet of code within the text log:
```
2019-10-15T13:52:47.424+1000 I  NETWORK  [initandlisten] Listening on 127.0.0.1
2019-10-15T13:52:47.424+1000 I  NETWORK  [initandlisten] waiting for connections on port 27017
```
To create a sample object, copy and paste the following text into Postman as request body:
```
{
	"name": "Test",
	"email": "test@hotmail.com",
	"phoneNumber": "123456789",
	"birthDate": "1/1/2019",
	"location": "",
	"password": "test",
	"accountType": "instructor",
	"qualifications": ["degree1", "degree2"],
	"languages": ["language1", "language2"],
	"bio": "test",
	"social": "",
	"availability": "",
	"studio": ""
}
```
