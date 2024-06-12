# User Form App

This is a simple React application built with Vite for managing user information. Users can enter their name, lastname, email, and a short comment. The entered data is then displayed below the form.

## Features

- Add user information including name, lastname, email, and a short comment.
- Display a list of all entered user information.
- Show a message when there are no users.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/item-list-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd user-form-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

Running the Application

1.  Start the development server:

```bash
   npm run dev
```

2. Open your browser and navigate to the URL provided by Vite (usually http://localhost:3000) to see the application.

#### Usage

-  Enter your name, lastname, email, and a short comment in the form.
-  Click the "Submit" button to add the information to the list.
-  The entered information will be displayed below the form.
-  If there are no users, a message "No Users" will be displayed.

### Code Snippet

#### App component

```javascript
import { useState } from "react";
import FormUser from "./components/FormUser";
import UsersList from "./components/UsersList";

function App() {
  const [entries, setEntries] = useState([]);
  
  function addEntry(newEntry){
    setEntries([...entries, newEntry])
  }

  return (
    <>
      <main className="form-container">
        <div className="form-wrapper">
          <h1>Form Prototype</h1>
          {/* Form component */}
          <FormUser addEntry={addEntry}/>
        </div>
        <div className="content">
        {/* Users list */}
        <UsersList entries={entries}/>
        </div>
      </main>
    </>
  );
}

export default App;
```
#### FormUser Component
```javascript
import {useState} from "react";

export default function FormUser({addEntry}) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleLastnameChange(e) {
    setLastName(e.target.value);
  }
  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newEntry = {
      name,
      lastName,
      email,
      comment,
    };

    addEntry(newEntry);
    setName("");
    setLastName("");
    setEmail("");
    setComment("");
  }
  return (
    <>
      <form className="form-content" onSubmit={handleSubmit}>
        <div className="form-field">
          <p>Name</p>
          <input type="text" placeholder="Naruto" value={name} onChange={handleNameChange} required/>
        </div>
        <div className="form-field">
          <p>Lastname</p>
          <input type="text" placeholder="Uzumaki" value={lastName} onChange={handleLastnameChange} required/>
        </div>
        <div className="form-field">
          <p>Email Address</p>
          <input type="email" placeholder="name@example.com" value={email} onChange={handleEmailChange} required/>
        </div>
        <div className="form-field form-field--comment">
          <p>Comment</p>
          <textarea name="comment" maxLength="350" value={comment} onChange={handleCommentChange} required></textarea>
        </div>
        <div className="form-button">
          <button className="btn">Submit</button>
        </div>
      </form>
    </>
  );
}

```

#### UsersList Component
```javascript
export default function UsersList({ entries }) {
  return (
    <>
      {entries.length === 0 ? (
        <h1>No Users Found</h1>
      ) : (
        entries.map((entry) => (
          <div className="wrapper" key={entry.email}>
            <h2>
              Name: <span>{entry.name}</span>
            </h2>
            <h2>
              lastname: <span>{entry.lastName}</span>
            </h2>
            <h2>
              Email: <span>{entry.email}</span>
            </h2>
            <p>{entry.comment}</p>
          </div>
        ))
      )}
    </>
  );
}

```
