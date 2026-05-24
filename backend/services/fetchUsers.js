const axios = require("axios");

const fetchUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.data;
};

module.exports = fetchUsers;