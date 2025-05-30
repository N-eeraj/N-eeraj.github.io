import LoginForm from "@components/User/Auth/Login"
import AuthModal from "@components/User/Auth/Modal"

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
