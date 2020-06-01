import AxiosService from "../Axios/AxiosServices";
var axiosService = new AxiosService ();

export function userRegistration (registrationDto) {
  return axiosService.axiosPost (
    "http://localhost:8080/user/register",
    registrationDto,
    {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  );
}

export function userLogin (loginDTO) {
  return axiosService.axiosPost (
    "http://localhost:8080/user/login",
    loginDTO,
    {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  );
}

export function forgotPassword (forgotPasswordDTO) {
  return axiosService.axiosPost (
    "http://localhost:8080/user/forgotpassword",
    forgotPasswordDTO,
    {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  );
}
export function resetPassword (resetPasswordDTO) {
  return axiosService.axiosPost (
    "http://localhost:8080/user/resetpassword",
    resetPasswordDTO,
    {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  );
}

  