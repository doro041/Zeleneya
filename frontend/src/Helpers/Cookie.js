import Cookies from 'universal-cookie'
const cookies = new Cookies();

export const SetUserCookie = (user) => {
    cookies.set("user", user, {path: '/'});
}


export const CheckIfCookieExist = () => {
    var user = cookies.get("user");

    return user;
}