type AuthSuccess = "Signup Success" | "Login Success" | "Logout Success"

type ClientSuccess = "Account Found"
type EventSuccess = "Event Creation Success" | "Event Update Success" | "Event Deletion Success" | "Event Found"

type S3Success = "S3 Upload Success" | "S3 Delete Success"

export type ISuccessMessage = AuthSuccess | EventSuccess | ClientSuccess | S3Success