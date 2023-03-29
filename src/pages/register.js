import { useState, useEffect } from "react";
import Link from "next/link";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {});

  function handleSubmit(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log("Submitted");
      console.log("Username: " + username);
      console.log("Password: " + password);
    } else {
      console.log("Password not Matched");
    }
  }

  return (
    <div>
      <h1>Scrum Board</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <h1>Sign up</h1>
          <div className="mt-4">
            <p>Name*</p>

            <input
              placeholder="Enter your Name"
              type="text"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {password === confirmPassword ? (
            true
          ) : (
            <p>Password do not match!</p>
          )}
          <div>
            <p>Email*</p>
            <input
              placeholder="Enter your Email"
              type="email"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <p>Name*</p>

            <input
              placeholder="Enter your Name"
              type="text"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {password === confirmPassword ? (
            true
          ) : (
            <p>Password do not match!</p>
          )}
          <div>
            <p>Password*</p>
            <input
              placeholder="Create Password"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p>
              Must be at least 8 characters
            </p>
          </div>
          <button
            type="submit"
            >
            Register
          </button>
          <p>
            Already have an account?
            <Link href="/login">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
