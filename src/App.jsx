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
