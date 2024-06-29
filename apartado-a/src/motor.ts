import { isValidIBAN } from "ibantools";
import { BankCodes, banks, ibanRegex } from "./model";
import { displayIbanDetails } from "./ui";

export const ibanFormNode = document.getElementById("iban-form");
export const ibanInputElement = document.getElementById("iban");
export const resultDiv = document.getElementById("result");


if (ibanFormNode) {
    ibanFormNode.addEventListener("submit", validateIban);
  }
  
  function validateIban(event: Event) {
    event.preventDefault();
  
    if (ibanInputElement instanceof HTMLInputElement) {
      const ibanInput = ibanInputElement.value.trim();
  
      if (resultDiv) {
        if (!isValidIbanFormat(ibanInput)) {
          resultDiv.textContent = "El IBAN tiene un formato incorrecto.";
          resultDiv.style.color = 'red';
          return;
        }
  
        if (!isValidIBAN(ibanInput.replace(/[- ]/g, ""))) {
          resultDiv.textContent = "El IBAN no es válido.";
          resultDiv.style.color = 'red';
          return;
        }
  
        const ibanDetails = extractIbanDetails(ibanInput);
        if (!ibanDetails) {
          resultDiv.textContent = "Error al analizar el IBAN.";
          resultDiv.style.color = 'red';
          return;
        }
        resultDiv.style.color = 'black';
        displayIbanDetails(resultDiv, ibanDetails);
      }
    }
  }
  
  function isValidIbanFormat(iban: string): boolean {
    return ibanRegex.test(iban);
  }
  
  function extractIbanDetails(iban: string) {
    const match = iban.match(ibanRegex);
    if (!match) return null;
  
    const [countryCode, bankCode, branchCode, checkDigits, accountNumber] = match;
    const bankName = banks[bankCode as BankCodes] || "Banco desconocido";
  
    return { countryCode, bankCode, branchCode, checkDigits, accountNumber, bankName };
  }
  