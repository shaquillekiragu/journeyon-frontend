import axios from "axios";

const API_URL: string = "http://localhost:5002";

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
          first_name: "Jane",
          last_name: "Doe",
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

// export async function getUsers() {
export function getUsers() {
  try {
    // const response = await axios.get(`${API_URL}/Users/get-users`);
    if (response && response.data) {
      return response;
    } else {
      console.error("No data found in the response.");
      return null;
    }
  } catch (error) {
    console.error(
      "Error fetching events:",
      error instanceof Error ? error.message : error
    );
    return null;
  }
  // return response;
}

export async function getUserDetails(id: number) {
  try {
    const response = await axios.get(`${API_URL}/users/get-user-details/${id}`);
    if (response && response.data) {
      return response;
    } else {
      console.error("No data found in the response.");
      return null;
    }
  } catch (error) {
    console.error(
      "Error fetching events:",
      error instanceof Error ? error.message : error
    );
    return null;
  }
}
