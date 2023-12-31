# BMind
### Video Demo: <URL>
#### Description: 
This is my CS50 final project BMind!
Bmind is a node.js budgeting web application that allows you to visualize and keep track of your monthly expenses. Users are able to create new expenses with a form that collects data such as category, cost, due date etc. These new submissions are then rendered to a table and saved to a database./

Project Structure:
This project is structured into two folders, Client and Server. The client folder contains my files responsible for rendering the web application and the logic behind the components, like the table and new expense submission for example using Vue framework. The server folder contains the code responsible for setting up the connections for the project and holds the SQL queries in the api endpoints.

Database Design:
I am using MySQL for this project with a one to many relationship between the tables in the database. I used SQL because of it ability to allow me to describe the data and retrieve it from relational databases. In this project Expense is the parent table with, Category and Subcategory being the child tables. In the Expense table, it has six columns being: Id (primary key), CategoryId, Sub_CategoryId, Cost, Item_Name and Due-Date. In this parent table CategoryId and Sub_CategoryId, are foreign keys, where Category and Subcategory are the related tables the keys derive from.


Server Side Design:
Before starting the client side I installed and imported my dependencies for the backend in the app.js file. The decision behind the packages i chose were based off past projects I have practiced with. Most of them I picked up along way when encountering errors or needed specific solutions to bugs.

app.js:
This file is responsible for importing the modules, setting up the express database connection, and api endpoints. 
Important Dependencies:
Cors - middleware needed to bypass single origin policy, which does not allow for cross origin request(makes getting data difficult between server and client local host)
Express - Popular node.js webb app framework for the back end, comes with tons of features like routing middleware etc.
MySQL2 - The management for relational databases, letting you handle, store, modify and delete data, it makes data organization much easier
Nodemon - this node.js tool automatically restarts the application when file changes ina directory are picked up


Client Side Design:
I went with Vue for my front end framework. Vue is a great javascript framework for web-applications with it being component based which makes writing code easier and reusable. I also used BootstrapVue which was a large contributor to creating the table populated with the computed expense data; as well as the button and form field involved in saving a new expense where the field collects user input via drop down selector, user input fields (cost, Item Name) and a datepicker for populating Due_date in the expense table.

Home.vue:
This file is where most of the heavy lifting takes place. It is responsible for rendering the HTML and logic for handling data from the database, also holds the api requests and responses for getting said data.

index.js:
Within a folder named "router", index.js is responsible for creating the route to the    home.vue file so that it is accessible in the browser and rendered by the application

