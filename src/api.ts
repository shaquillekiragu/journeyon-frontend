import axios from "axios";

const API_URL: string = "";

const response = {
  data: {
    users: [
      {
        user: {
          id: 1,
          email: "JohnDoe@gmail.com",
          password: "password1",
          first_name: "John",
          last_name: "Doe",
        },
      },
      {
        user: {
          id: 2,
          email: "JaneDoe@outlook.com",
          password: "password2",
          firstName: "Jane",
          lastName: "Doe",
        },
      },
      {
        user: {
          id: 3,
          email: "MJ25@gmail.com",
          password: "password3",
          first_name: "Mark",
          last_name: "James",
        },
      },
    ],
  },
};

export function getUsers() {
  // try {
  //   const response = await axios.get(`${API_URL}/api/users`);
  //   if (response && response.data) {
  //     return response;
  //   } else {
  //     console.error("No data found in the response.");
  //     return null;
  //   }
  // } catch (err) {
  //   console.error("Error fetching events:", err.message || err);
  //   return null;
  // }
  return response;
}

// This is what response.data looks like:
