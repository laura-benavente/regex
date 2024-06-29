export function displayImageLinks(imageLinks: string[], imageLinksDiv: HTMLElement) {
    if (imageLinks.length === 0) {
      imageLinksDiv.textContent = "No se encontraron enlaces a imágenes.";
    } else {
      imageLinksDiv.innerHTML = imageLinks
        .map((link) => `<p><a href="${link}" target="_blank">${link}</a></p>`)
        .join("");
    }
  }
  