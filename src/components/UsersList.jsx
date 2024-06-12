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
