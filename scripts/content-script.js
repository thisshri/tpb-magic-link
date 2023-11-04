function main() {
  const preTag = document.querySelector("pre");
  const description = preTag?.textContent;
  if (!description) return;

  const regex = /https:\/\/[^\n]*/g;
  const mainSection = document.querySelector("#main-content");

  const matches = description.match(regex);

  const createIframeSequentially = (index=0) => {
    console.log('index', index)

    if (index < matches.length) {
      const iframe = document.createElement("iframe")

      iframe.src = matches[index]

      iframe.addEventListener("load", () => {
          createIframeSequentially(index + 1);
        })

      mainSection.parentElement.appendChild(iframe)
    }
  }

  createIframeSequentially(0)
}

main()