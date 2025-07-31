import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

interface INewAccount {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function SignupPage(): React.ReactElement {
  const navigate = useNavigate();

  const [accountIdCounter, setAccountIdCounter] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountsList, setAccountsList] = useState<INewAccount[]>([]);
  const [showError, setShowError] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setShowError(false);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    const accountExists = accountsList.some(
      (account) => account.email === email
    );

    if (accountExists) {
      setShowError(true);
      return;
    }

    const newAccount: INewAccount = {
      id: accountIdCounter,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: email,
      password: formData.get("password") as string,
    };

    setAccountsList((prevAccounts) => [...prevAccounts, newAccount]);
    setAccountIdCounter((prevCounter) => prevCounter + 1);

    console.log("New account added:", newAccount);
    console.log("Updated accounts list:", accountsList);

    navigate("/home");
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fefbf1" }}>
      <Header size="large" />
      <main className="flex justify-center items-end gap-8 mt-[10vh]">
        <div className="flex flex-col gap-5">
          <div
            className="p-6 rounded-lg w-[500px] h-auto"
            style={{
              border: "2px solid #5c7fa3",
            }}
          >
            <div
              className="p-16 rounded-lg shadow-lg"
              style={{
                backgroundColor: "#5c7fa3",
              }}
            >
              <h1 className="text-4xl text-center font-semibold mb-16 text-white text-decoration-line: underline">
                Sign Up
              </h1>

              <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                <div className="flex gap-5">
                  <label
                    htmlFor="firstName"
                    className="font-normal text-white w-24"
                  >
                    First Name:
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder=" First name..."
                    value={firstName}
                    required
                    className="border bg-white rounded-md px-2 py-1"
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                  />
                </div>

                <div className="flex gap-5">
                  <label
                    htmlFor="lastName"
                    className="font-normal text-white w-24"
                  >
                    Last Name:
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder=" Last name..."
                    value={lastName}
                    required
                    className="border bg-white rounded-md px-2 py-1"
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                  />
                </div>

                <div className="flex gap-5">
                  <label
                    htmlFor="email"
                    className="font-normal text-white w-24"
                  >
                    Email:
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder=" Email..."
                    value={email}
                    required
                    className="border bg-white rounded-md px-2 py-1"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>

                <div className="flex gap-5">
                  <label
                    htmlFor="password"
                    className="font-normal text-white w-24"
                  >
                    Password:
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder=" Password..."
                    value={password}
                    required
                    className="border bg-white rounded-md px-2 py-1"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>

                <div className="flex gap-5">
                  <label
                    htmlFor="courseId"
                    className="font-normal text-white w-24"
                  >
                    Course ID:
                  </label>
                  <input
                    id="courseId"
                    name="courseId"
                    type="text"
                    placeholder=" Course ID..."
                    required
                    className="border bg-white rounded-md px-2 py-1"
                  />
                </div>

                <p
                  className={`text-red-300 text-center mb-4 ${
                    showError ? "visible" : "hidden"
                  }`}
                >
                  An account with this email already exists.
                </p>

                <button
                  type="submit"
                  className="bg-white text-[#5c7fa3] font-semibold border rounded-md mt-4 p-2 hover:bg-gray-100 hover:cursor-pointer transition-colors duration-200 text-decoration-line: underline"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          <p className="text-[#5c7fa3]">
            Already have an account?{" "}
            <Link to="/login" className="hover:underline">
              Login!
            </Link>
          </p>
        </div>

        <div
          className="p-8 rounded-lg w-[350px] h-[400px] mb-11"
          style={{
            backgroundColor: "#b6a79a",
            border: "2px solid #5c7fa3",
          }}
        >
          <h3 className="text-xl font-semibold text-white text-center mb-6">
            Subscription includes:
          </h3>
        </div>
      </main>
    </div>
  );
}
