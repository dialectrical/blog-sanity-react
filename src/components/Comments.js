import { Timestamp } from "./Timestamper.js";

export default Comments = ({ comments = [] }) => {
  return (
    <>
      <h2>Comments:</h2>
      <ul>
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <li key={_id}>
            <h4 className="mb-2 leading-tight">
              <a href={`mailto:${email}`}>{name}</a>
            </h4>
            <p>{comment}</p>
            <hr className="mt-5 mb-5" />
          </li>
        ))}
      </ul>
    </>
  );
};
