import LoginForm from "@auth/components/Login"
import AuthModal from "@auth/components/Modal"

function Login() {
  return (
    <AuthModal modalPath="/login">
      <LoginForm
        replace
        className="w-full" />
    </AuthModal>
  )
}

export default Login
