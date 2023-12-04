/* global WebImporter */

function createOverflowHero(currentBlock, main, document) {
  const overflowHero = [
    ['OverflowHero'],
    [currentBlock],
  ];

  const block = WebImporter.DOMUtils.createTable(overflowHero, document);

  main.append(block);
}

export default createOverflowHero;
