export default function SignupForm() {
  return (
    <form className="signupForm" action="">
      <label htmlFor="name">
        <input name="name" type="text" placeholder="name" />
      </label>
      <label htmlFor="lastname">
        <input name="lastname" type="text" placeholder="lastname" />
      </label>
      <label htmlFor="email">
        <input name="email" type="text" placeholder="email" />
      </label>
      <label htmlFor="password">
        <input name="password" type="text" placeholder="password" />
      </label>
      <button className="signUpBtn">Sing up</button>
    </form>
  )
}