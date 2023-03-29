import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    console.log("Username: " + username);
    console.log("Password: " + password);

    alert("Username: " + username);
  }

  return (
    <div>
      <h1 className="logintitle">Scrum Board</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <h1>Log in</h1>

          <div>
            <p>Email*</p>
            <input
              placeholder="Enter your Email"
              type="text"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <p>Password*</p>
            <input
              placeholder="Password"
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            >
            Login
          </button>

          <p >
            Don't have an account?
            <Link href="/register">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
