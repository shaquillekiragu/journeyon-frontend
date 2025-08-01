import { useState, useContext, type FC, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { DataContext } from "../contexts/DataContextObject"; 
import { loginUser } from "../services/authService";
import Header from "../components/Header";

const LoginPageV2: FC = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(DataContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleLogin = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setShowError(false);
    try {
      const userData = await loginUser( { email, password } );
      setUser( userData );
      localStorage.setItem('user', JSON.stringify(userData))
      navigate( "/home" );
    } catch (error: unknown) {
      console.error('Login failed:', error);
      setShowError(true);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fefbf1" }}>
      <Header size="large" />

      <main className="flex flex-col justify-center items-center gap-5 mt-[10vh]">
        <div
          className="p-2 rounded-lg"
          style={{
            border: "2px solid #5c7fa3",
          }}
        >
          <div
            className="p-15 rounded-lg shadow-lg"
            style={{
              backgroundColor: "#5c7fa3",
            }}
          >
            <h1 className="text-4xl text-center font-semibold mb-8 text-white text-decoration-line: underline">
              Log In
            </h1>

            <form onSubmit={ handleLogin } className="flex flex-col gap-5">
              <div className="flex gap-5 items-center">
                <label
                  htmlFor="email"
                  className="font-normal text-white w-20"
                >
                  Email:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" Email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border bg-white rounded-md px-2 py-1"
                  required
                />
              </div>

              <div className="flex gap-5 items-center">
                <label htmlFor="password" className="font-normal text-white w-20">
                  Password:
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder=" Password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border bg-white rounded-md px-2 py-1"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-white text-gray-800 font-semibold border rounded-md mt-4 p-2 hover:bg-gray-100 hover:cursor-pointer transition-colors duration-200 text-decoration-line: underline"
              >
                Login
              </button>
              { showError && <p className="text-red-300 text-center mb-4">An error occurred. Please try again.</p>}
            </form>
          </div>
        </div>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="hover:underline">
            Sign Up
          </Link>
        </p>
      </main>
    </div>
  );
}

export default LoginPageV2;
