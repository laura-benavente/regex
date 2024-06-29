import { displayImageLinks } from "./ui";

const extractButtonNode = document.getElementById("extract-button");

extractButtonNode?.addEventListener("click", extractImageLinks);

function extractImageLinks(event: Event) {
  event.preventDefault();
  
  const htmlContent = getHtmlContent();
  const imageLinksDiv = getImageLinksDiv();

  if (!htmlContent || !imageLinksDiv) {
    return;
  }

  const imageLinks = extractImageLinksFromHtml(htmlContent);
  displayImageLinks(imageLinks, imageLinksDiv);
}

function getHtmlContent(): string | null {
  const htmlContentElement = document.getElementById("html-content");
  if (htmlContentElement instanceof HTMLTextAreaElement) {
    return htmlContentElement.value;
  } else {
    console.error(
      'Elemento HTML no encontrado o tipo incorrecto para "html-content".'
    );
    return null;
  }
}

function getImageLinksDiv(): HTMLElement | null {
  const imageLinksDiv = document.getElementById("image-links");
  if (imageLinksDiv instanceof HTMLElement) {
    return imageLinksDiv;
  } else {
    console.error('Elemento HTML no encontrado para "image-links".');
    return null;
  }
}

function extractImageLinksFromHtml(htmlContent: string): string[] {
  const imgTagRegex = /<img[^>]*src=["']([^"']+)["'][^>]*>/g;
  const imageLinks = [];
  let match;

  while ((match = imgTagRegex.exec(htmlContent)) !== null) {
    imageLinks.push(match[1]);
  }

  return imageLinks;
}

