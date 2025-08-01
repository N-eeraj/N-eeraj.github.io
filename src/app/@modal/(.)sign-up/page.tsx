import SignUpForm from "@auth/components/SignUp"
import AuthModal from "@auth/components/Modal"

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
