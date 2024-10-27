import Image from "next/image"
import "./signup.css"

export default function SignUpLayout({children}) {
  return (
    <div className="signupPage">
      {children}
    <div className="SignupImage">
    <Image priority src="/img/cicek.png" alt="Login Image" width={700} height={800} />
    </div>
  </div>
  )
}