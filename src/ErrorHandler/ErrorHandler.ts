import { AxiosError } from "axios";
import { ErrorCode } from "./ErrorCode";

export const handleApiError = (error: AxiosError) => {
  const errorCode = error?.response?.status;
  let errorMessage: string;

  switch (errorCode) {
    case ErrorCode.Unauthorized:
      errorMessage = "You are not authorized to access this resource.";
      break;
    case ErrorCode.Forbidden:
      errorMessage = "Access to this resource is forbidden.";
      break;
    case ErrorCode.NotFound:
      errorMessage = "The requested resource was not found.";
      break;
    case ErrorCode.BadRequest:
      errorMessage = "Bad request. Please check your request data.";
      break;
    case ErrorCode.InternalServerError:
      errorMessage = "An internal server error occurred.";
      break;
    default:
      errorMessage = "An unknown error occurred.";
  }
  return new Error(errorMessage);
};
