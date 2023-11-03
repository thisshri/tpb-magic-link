const preTag = document.querySelector("pre");
const description = preTag?.textContent;

const regex = /https:\/\/[^\n]*/g;

if (description) {
  const matches = description.match(regex);

  if (matches?.length) {
    const mainSection = document.querySelector("#main-content");

    for (const link of matches) {
      const iframe = document.createElement("iframe")
      iframe.src = link

      mainSection.insertAdjacentElement('afterend', iframe)
    }
  }
}