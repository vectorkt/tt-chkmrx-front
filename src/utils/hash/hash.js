import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import { HmacSHA1, HmacSHA384 } from 'crypto-js';


const hashPassword = (password) => {

    const one = Base64.stringify(sha256(password))
    const firstQuarter = one.slice(0, Math.floor((one.length - 1) / 4));

    const two = Base64.stringify(HmacSHA1(firstQuarter,"35711"))
    const lastQuarter = two.slice(Math.floor(3 * (two.length - 1) / 4));

    const three = Base64.stringify(HmacSHA384(lastQuarter,"131719"))
    const middle = three.slice(Math.floor((three.length - 1) / 4), Math.floor(3 * (three.length - 1) / 4));
    
    const last = Base64.stringify(sha256(middle));

    return last;

}


export { hashPassword }