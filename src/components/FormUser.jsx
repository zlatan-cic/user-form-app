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
