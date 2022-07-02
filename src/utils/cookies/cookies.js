import Cookies from 'universal-cookie';


const setAuthCookie = (token) => {
    const cookies = new Cookies();
    cookies.set('foot_auth', token, { path: '/', domain: "localhost", sameSite: "strict" },);
}

const getAuthCookie = () => {
    const cookies = new Cookies();
    try {
        return cookies.get('foot_auth');
    }
    catch (err) {
        console.log(err)
    }
}

const removeAuthCookie = () => {
    const cookies = new Cookies();
    cookies.remove('foot_auth', { path: '/', domain: "localhost", sameSite: "strict" });
}





const setLoginCookie = () => {
    const cookies = new Cookies();
    cookies.set('foot_login', true, { path: '/', domain: "localhost", sameSite: "strict" },);
}

const getLoginCookie = () => {
    const cookies = new Cookies();
    try {
        return cookies.get('foot_login');
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