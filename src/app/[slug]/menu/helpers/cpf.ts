export function validateCPF(cpf: string): boolean {
  const cleanCPF = cpf.replace(/\D/g, "");

  if (cleanCPF.length !== 11) {
    return false;
  }

  if (/^(\d)\1{10}$/.test(cleanCPF)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF[i]) * (10 - i);
  }
  let firstDigit = 11 - (sum % 11);
  if (firstDigit > 9) firstDigit = 0;

  if (parseInt(cleanCPF[9]) !== firstDigit) {
    return false;
  }

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF[i]) * (11 - i);
  }
  let secondDigit = 11 - (sum % 11);
  if (secondDigit > 9) secondDigit = 0;

  return parseInt(cleanCPF[10]) === secondDigit;
}

export function formatCPF(cpf: string): string {
  const cleanCPF = cpf.replace(/\D/g, "");
  return cleanCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}
