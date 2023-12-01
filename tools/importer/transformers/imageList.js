/* global WebImporter */

function createImageList(currentBlock, main, document) {
  // Find if there is a heading before the image list
  const heading = currentBlock.closest('div.container').querySelectorAll('p');

  // If there is a heading, add to document
  if (heading) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    p.textContent = heading.textContent;
    div.append(p);
    main.append(div);
  }

  // Build array for image list and add to document as a table with one cell
  const cells = [
    ['Cards (blog-teaser)'],
    ['']
  ];

  const block = WebImporter.DOMUtils.createTable(cells, document);
  main.append(block);
}

export default createImageList;
