import SignUpForm from "@components/User/Auth/SignUp"
import AuthModal from "@components/User/Auth/Modal"

function SignUp() {
  return (
    <AuthModal modalPath="/sign-up">
      <SignUpForm
        replace
        className="w-full" />
    </AuthModal>
  )
}

export default SignUp
