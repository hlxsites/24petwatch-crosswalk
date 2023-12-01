/* global WebImporter */

function createColumnsFlex(currentBlock, main, document) {
  const cols = currentBlock.querySelectorAll('.cmp-container--layoutflex > div > div > div.aem-GridColumn--default--12:not(.aem-GridColumn--default--hide)');
  const text = document.createElement('div');
  const image = document.createElement('div');
  let content = false;
  let textPos = 0;
  let imagePos = 0;

  let cells = [];

  for (let i = 0; i < cols.length; i += 1) {
    // Headers
    cells.push(cols[i]);
    if (cols[i].querySelector('div.headers')) {
      // H1 heading
      if (cols[i].querySelector('h1')) {
        const h1 = document.createElement('h1');
        h1.textContent = cols[i].querySelector('h1').textContent;
        text.append(h1);
        content = true;
        textPos = i;
      }

      // H2 heading
      if (cols[i].querySelector('h2')) {
        const h2 = document.createElement('h2');
        h2.textContent = cols[i].querySelector('h2').textContent;
        text.append(h2);
        content = true;
        textPos = i;
      }

      // H4 heading
      if (cols[i].querySelector('h4')) {
        const h4 = document.createElement('h4');
        h4.textContent = cols[i].querySelector('h4').textContent;
        text.append(h4);
        content = true;
        textPos = i;
      }
    }

    // Text
    if (cols[i].querySelector('div.text')) {
      const p = document.createElement('p');
      p.textContent = cols[i].querySelector('p').textContent;
      text.append(p);
      content = true;
      textPos = i;
    }

    // Content Fragment
    if (cols[i].querySelector('div.image')) {
      const img = document.createElement('img');
      const imgSrc = cols[i].querySelector('img').getAttribute('src');
      img.setAttribute('src', imgSrc);
      image.append(img);
      content = true;
      imagePos = i;
    }

    // CTA button
    if (cols[i].querySelector('div.button')) {
      let buttonType = 'strong';
      const cta = document.createElement('a');
      const importedLink = cols[i].querySelector('a');
      if (importedLink.getAttribute('href').startsWith('https://')) {
        buttonType = 'em';
      }
      const button = document.createElement(buttonType);
      cta.setAttribute('href', importedLink.getAttribute('href'));
      cta.textContent = importedLink.textContent;
      button.append(cta);
      text.append(button);
      content = true;
      textPos = i;
    }
  }

  // If content was found and created as a document element, build table and add to main
  if (content) {
    const columns = [
      ['Columns',''],
      cells,
    ];
    const block = WebImporter.DOMUtils.createTable(columns, document);
    main.append(block);
  }
}

export default createColumnsFlex;
