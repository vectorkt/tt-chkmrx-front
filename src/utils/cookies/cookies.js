import Cookies from 'universal-cookie';

const second = 1000
const minute = 60 * second;
const expirationTime = 10 * minute;

const setAuthCookie = (token) => {

    const cookies = new Cookies();
    cookies.set('foot_auth', token,
        {
            path: '/',
            domain: "localhost",
            sameSite: "strict",
            expires: new Date(Date.now() + expirationTime)
        });
}

const getAuthCookie = () => {
    const cookies = new Cookies();
    try {
        return cookies.get('foot_auth') ? cookies.get('foot_auth') : false;
    }
    catch (err) {
        console.log(err)
    }
}

const removeAuthCookie = () => {
    const cookies = new Cookies();
    cookies.remove('foot_auth', { path: '/', domain: "localhost", sameSite: "strict", });
}





const setLoginCookie = () => {

    const cookies = new Cookies();
    cookies.set('foot_login', true,
        {
            path: '/',
            domain: "localhost",
            sameSite: "strict",
            expires: new Date(Date.now() + expirationTime)
        });
}

const getLoginCookie = () => {
    const cookies = new Cookies();
    try {
        return cookies.get('foot_login') ? cookies.get('foot_login') : false;
    }
    catch (err) {
        console.log(err)
    }
}

const removeLoginCookie = () => {
    const cookies = new Cookies();
    cookies.remove('foot_login', { path: '/', domain: "localhost", sameSite: "strict" });
}


export { getAuthCookie, setAuthCookie, removeAuthCookie, setLoginCookie, getLoginCookie, removeLoginCookie }