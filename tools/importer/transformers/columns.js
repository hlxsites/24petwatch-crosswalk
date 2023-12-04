/* global WebImporter */

function createColumns(currentBlock, main, document) {
  const containerId = currentBlock.querySelector('.cmp-container').getAttribute('id');
  const query = `#${containerId} > .aem-Grid > div > div > .aem-Grid > div.aem-GridColumn--default--6`;
  const cols = currentBlock.querySelectorAll(query);

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

export default createColumns;
