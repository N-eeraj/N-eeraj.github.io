import UserAuthForm from "@components/User/Auth/Form"

function SignUp() {
  return (
    <main className="flex flex-col justify-center items-center h-[calc(100svh-53px)] md:h-[calc(100svh-69px)] p-4">
      <UserAuthForm
        title="Sign up"
        description="Enter your email below to create an account"
        footerText="Already have an account?"
        segue={{
          link: "/login",
          text: "Login",
        }}>
        {/* Sign-Up form here */}
      </UserAuthForm>
    </main>
  )
}

export default SignUp
