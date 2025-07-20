# react-snack-or-booze


Snack or Booze is a single-page React app that allows users to browse and add their favorite snacks and drinks. It demonstrates routing, forms, API integration, and component structure in a React frontend.

### Features
Browse snacks and drinks

View item details with recipe and serving suggestions

Add new snacks or drinks via a form

Client-side routing using React Router

API integration using Axios

Mocked backend support (JSON server or Express API)

### Tech Stack
React

React Router

Axios

Reactstrap (Bootstrap components)

JSON Server or custom backend API

### Installation
Clone the repository:


git clone https://github.com/your-username/snack-or-booze.git
cd snack-or-booze
Install dependencies:


npm install
Start the frontend app:


npm start
(Optional) Start backend API:

If using json-server:

bash
Copy
Edit
npm install -g json-server
json-server --watch db.json --port 5000

### Running Tests

npm test
Includes smoke tests and form behavior tests using React Testing Library.

### Project Structure

src/
│
├── App.js
├── Api.js
├── AddItemForm.js
├── Menu.js
├── MenuItem.js
├── NavBar.js
├── test/
│   ├── app.test.js
│   ├── addnewitemform.test.js
│   └── ...other tests
└── index.js


### Learnings
This app was built to understand:

React component patterns

Controlled forms and state

Routing and navigation

Integration with mock APIs

Unit and integration testing

