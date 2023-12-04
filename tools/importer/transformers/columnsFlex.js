/* global WebImporter */

function createColumnsFlex(currentBlock, main, document) {
  const cols = currentBlock.querySelectorAll('.cmp-container--layoutflex > div > div > div.aem-GridColumn--default--12:not(.aem-GridColumn--default--hide)');
  if (cols.length === 0) {
    return;
  }
  const cells = [];

  for (let i = 0; i < cols.length; i += 1) {
    cells.push(cols[i]);
  }

  const columns = [
    ['Columns'],
    cells,
  ];
  const block = WebImporter.DOMUtils.createTable(columns, document);
  main.append(block);
}

export default createColumnsFlex;
