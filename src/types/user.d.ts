export interface User {
  name: string
  email: string
  token: string
}

export interface UserContextBase<UserValueType extends User | null> {
  user: UserValueType
  isLoggedIn: UserValueType extends User ? true : false
  isLoadingUser: boolean
  setUser: (_user: User) => void
  clearUser: () => void
}

export type UserContext = UserContextBase<User> | UserContextBase<null>
