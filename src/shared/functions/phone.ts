import { removeSpecialCaracter } from "./caracteres";

export const insertMaskInPhone = (phone: string) =>{
    const noMask = removeSpecialCaracter(phone);
    return noMask
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(noMask.length === 11 ? /(\d{5})(\d)/ : /(\d{5})(\d)/, '$1-$2');
}

export const validPhone = (phone: string): boolean =>{
    const noMask = removeSpecialCaracter(phone);
    return noMask.length === 11 || noMask.length === 10;
}

