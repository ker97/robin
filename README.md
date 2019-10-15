# Sample NodeJS files for booking app

## Setup

```
sudo service mongod start
npm install
node src/index.js
```
**To check if MongoDB is up and running**
```
sudo cat /var/log/mongodb/mongod.log
```
You should be seeing this snippet of code within the text log:
```
2019-10-15T13:52:47.424+1000 I  NETWORK  [initandlisten] Listening on 127.0.0.1
2019-10-15T13:52:47.424+1000 I  NETWORK  [initandlisten] waiting for connections on port 27017
```
