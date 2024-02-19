export interface ProfileGoogle {
  email: string
  family_name: string
  given_name: string
  id: string
  name: string
  picture: string
}

export interface UserLogin {
  name: string | null
  email: string | null
  picture: string | null
}
