export default function LoginForm() {
  return (
    <form className="loginForm" action="">
      <label htmlFor="email">
        <input name="email" type="text" placeholder="username@mail.com" />
      </label>
      <label htmlFor="password">
        <input name="password" type="text" placeholder="******" />
      </label>
      <button className="loginBtn">Log in</button>
    </form>
  )
}