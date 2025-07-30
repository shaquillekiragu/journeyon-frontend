import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
    <main className="flex flex-col justify-center items-center gap-5 mt-[20vh]">
      <h1 className="text-4xl text-center font-semibold mb-10">Signup Page</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex gap-5">
          <label htmlFor="firstName" className="font-semibold">
            First Name:
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder=" First name..."
            value={firstName}
            required
            className="border rounded-md"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="lastName" className="font-semibold">
            Last Name:
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder=" Last name..."
            value={lastName}
            required
            className="border rounded-md"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="email" className="font-semibold">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder=" Email..."
            value={email}
            required
            className="border rounded-md"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="password" className="font-semibold">
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder=" Password..."
            value={password}
            required
            className="border rounded-md"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Courses:</h3>

          <div className="flex gap-3 ml-5">
            <input
              id="software-development"
              name="course"
              type="radio"
              className="border rounded-md"
            />
            <label htmlFor="software-development" className="font-semibold">
              Software Development
            </label>
          </div>

          <div className="flex gap-3 ml-5">
            <input
              id="digital-marketing"
              name="course"
              type="radio"
              className="border rounded-md"
            />
            <label htmlFor="digital-marketing" className="font-semibold">
              Digital Marketing
            </label>
          </div>
        </div>

        <p
          className={`text-red-600 text-center mb-4 ${
            showError ? "visible" : "hidden"
          }`}
        >
          An account with this email already exists.
        </p>

        <button
          type="submit"
          className="border rounded-md mt-5 p-1 hover:cursor-pointer"
        >
          Submit
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="hover:underline">
          Login!
        </Link>
      </p>
    </main>
  );
}
