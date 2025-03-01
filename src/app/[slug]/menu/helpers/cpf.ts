export function validateCPF(cpf: string): boolean {
    // Remove caracteres não numéricos
    const cleanCPF = cpf.replace(/\D/g, '');

    // Verifica se tem 11 dígitos
    if (cleanCPF.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cleanCPF)) {
        return false;
    }

    // Calcula primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cleanCPF[i]) * (10 - i);
    }
    let firstDigit = 11 - (sum % 11);
    if (firstDigit > 9) firstDigit = 0;

    // Verifica primeiro dígito
    if (parseInt(cleanCPF[9]) !== firstDigit) {
        return false;
    }

    // Calcula segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cleanCPF[i]) * (11 - i);
    }
    let secondDigit = 11 - (sum % 11);
    if (secondDigit > 9) secondDigit = 0;

    // Verifica segundo dígito
    return parseInt(cleanCPF[10]) === secondDigit;
}

// Função auxiliar para formatar CPF
export function formatCPF(cpf: string): string {
    const cleanCPF = cpf.replace(/\D/g, '');
    return cleanCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

// Validação
console.log(validateCPF('123.456.789-09')); // retorna true ou false

// Formatação
console.log(formatCPF('12345678900')); // retorna "123.456.789-00"
