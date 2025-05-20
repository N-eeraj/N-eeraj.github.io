export interface User {
  name: string
  email: string
  token: string
}

export interface AuthContextBase<UserValueType extends User | null> {
  user: UserValueType
  isLoggedIn: UserValueType extends User ? true : false
  setUser: (_user: User) => void
  clearUser: () => void
}

export type AuthContext = AuthContextBase<User> | AuthContextBase<null>
