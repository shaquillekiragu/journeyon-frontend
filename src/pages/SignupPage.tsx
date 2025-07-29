import React from "react";

export default function SignupPage(): React.ReactElement {
  function handleSubmit(event: any): void {
    event.preventDefault();
  }

  function handleClick(event: any): void {
    event.preventDefault();
  }

  return (
    <main className="flex flex-col justify-center items-center gap-10 mt-[20vh]">
      <h1 className="text-4xl text-center font-semibold mb-5">Signup Page</h1>

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
            className="border rounded-md"
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
            className="border rounded-md"
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
            className="border rounded-md"
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
            className="border rounded-md"
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

        <button
          onClick={handleClick}
          className="border rounded-md mt-5 p-1 hover:cursor-pointer"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
