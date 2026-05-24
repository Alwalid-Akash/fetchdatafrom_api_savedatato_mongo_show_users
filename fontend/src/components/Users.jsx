import { useEffect, useState } from "react";
import API from "../services/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    API.get("/users")
      .then((response) => {
        if (isMounted) {
          setUsers(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Integrated Users Data</h1>

      {users.map((user) => (
        <div
          key={user.userId}
          style={{
            border: "1px solid gray",
            marginBottom: "20px",
            padding: "15px",
            borderRadius: "10px"
          }}
        >
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>

          <h3>Posts</h3>

          {user.posts.map((post) => (
            <div
              key={post.id}
              style={{
                background: "#f4f4f4",
                padding: "10px",
                marginBottom: "10px"
              }}
            >
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Users;
