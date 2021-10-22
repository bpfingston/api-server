# api-server
Created by Bryce Pfingston

## Installation  
npm i { jest, express, dotenv, supertest, pg, sequelize, sqlite3, seqluelize-cli }  
  
## Summary of Problem Domain  
Testing routes through collection, and testing CRUD on server.


## Links to application deployment  
 
Heroku: https://api-server-bryce.herokuapp.com/
Githut: https://github.com/bpfingston/api-server
  
## Include embedded UML
![embedded UML](./images/devpath.png)

## Talk about your routes

Path: /food
HTTP POST - responds with a specific { object } with following key value pairs{title: 'title', typeOfFood: 'typeOfFood'}  
HTTP PUT - responds with updating a specific { object } with following key value pairs{title: 'title', typeOfFood: 'typeOfFood'}  
HTTP GET - responds with all/specfic { object } with following key value pairs{title: 'title', typeOfFood: 'typeOfFood'}  
HTTP DELETE - responds with destroying a specific { object } with following key value pairs{title: 'title', typeOfFood: 'typeOfFood'}  

Path: /restaurant  
HTTP POST - responds with a specific { object } with following key value pairs{title: 'title', typeOfFood: 'typeOfFood'}  
HTTP PUT - responds with updating a specific { object } with following key value pairs{title: 'title', typeOfFood: 'typeOfFood'}  
HTTP GET - responds with all/specfic { object } with following key value pairs{title: 'title', typeOfFood: 'typeOfFood'}  
HTTP DELETE - responds with destroying a specific { object } with following key value pairs{title: 'title', typeOfFood: 'typeOfFood'}