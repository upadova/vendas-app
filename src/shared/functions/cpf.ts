import { removeSpecialCaracter } from "./caracteres";

export const insertMaskInCpf = (cpf: string) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export function validCPF(cpf: string): boolean {
  const strCPF = removeSpecialCaracter(cpf);
  let sum = 0;
  let rest;
  if (strCPF.length !== 11) return false;
  if (strCPF === '00000000000') return false;

  for (let i = 1; i <= 9; i++) sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(strCPF.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;

  if (rest == 10 || rest == 11) rest = 0;
  if (rest != parseInt(strCPF.substring(10, 11))) return false;
  return true;
}
