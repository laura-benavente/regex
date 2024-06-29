export function displayIbanDetails(resultDiv: HTMLElement, details: any) {
    resultDiv.innerHTML = `
      <p>Código de país: ${details.countryCode}</p>
      <p>Nombre del banco: ${details.bankName}</p>
      <p>Código de banco: ${details.bankCode}</p>
      <p>Código de sucursal: ${details.branchCode}</p>
      <p>Dígito de control: ${details.checkDigits}</p>
      <p>Número de cuenta: ${details.accountNumber}</p>
    `;
  }
  