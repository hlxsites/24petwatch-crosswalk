/* global WebImporter */
function cleanUpHTML(main, document) {
  // to remove /content/24petwatch/us/en' from internal URL
  main.querySelectorAll('a').forEach((anc) => {
    anc.href = anc.href.replace('/content/24petwatch/us/en', '');
  });

  main.querySelectorAll('span.cmp-text--largetext').forEach((e) => {
    e.outerHTML = `<b>${e.textContent}</b>`;
  });

  return main;
};

export default cleanUpHTML;