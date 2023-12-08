type AuthError = "Wrong Creds" | "No Account Found" | "Account Already Exists" | "Signup Failed" | "Login Failed"

type UnExpectedError = "Unauthorized" | "Forbidden" | "Not Found" | "Internal Server Error" | "Something went Wrong"

type ValidationError = "Validation Error" | "Validation Failed"

type TokenError = "Token Error" | "Token Expired" | "Token Invalid" | "Token Missing"

type EventError = "Event Creation Failed" | "Event Update Failed" | "Event Deletion Failed" | "Event Not Found" | "Event Already Exists" | "Event Not Found"

type S3Error = "S3 Error" | "S3 Upload Failed" | "S3 Delete Failed"

export type IErrorMessage =  AuthError | EventError | S3Error | UnExpectedError | ValidationError | TokenError