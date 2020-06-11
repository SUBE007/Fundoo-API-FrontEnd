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

export function forgotPassword (forgotPasswordDto) {
  return axiosService.axiosPost (
    "http://localhost:8080/user/forgotpassword",
    forgotPasswordDto,
    {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        
      },
    }
  );
}
export function resetPassword (resetPasswordDTO,token) {
  return axiosService.axiosPost (
    "http://localhost:8080/user/resetpassword",
    resetPasswordDTO,
    {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        token:token,
      },
    }
  );
}

export function chanageprofile (file) {
  return axiosService.axiosPost (
    "http://localhost:8080/user/uploadFile",
     file, 
     {
       headers: {
          "Content-Type": "multipart/form-data",
          // token: token,
       },
     }
  );
}
  