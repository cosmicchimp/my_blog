import {Link} from "react-router-dom"
export default function Login() {
  return (
    <div className="loginPageWrapper">
      <h2>Login</h2>
      <form className="loginForm">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
      <button><Link to="/">Home</Link></button>
    </div>
  );
}
