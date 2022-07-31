export const storeUserData = data =>{
    const {accessToken,userStatus,name,userId,email,userTypes} = data ;
    localStorage.setItem("accessToken",accessToken);
    localStorage.setItem("userStatus",userStatus);
    localStorage.setItem("name",name);
    localStorage.setItem("userId",userId);
    localStorage.setItem("email",email);
    localStorage.setItem("userTypes",userTypes);
}