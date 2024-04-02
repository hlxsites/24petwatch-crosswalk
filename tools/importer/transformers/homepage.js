/* global WebImporter */

import createCarousel from './carousel.js';
import createColumns from './columns.js';
import createTeaser from './teaser.js';
import createImageList from './imageList.js';
import createOverflowHero from './overflowHero.js';
import createColumnsFlex from './columnsFlex.js';

function createSection(currentBlock, main, document) {
  if (currentBlock.textContent.trim() === '') {
    return;
  }

  const teaser = currentBlock.querySelector('div.teaser');
  if (teaser) {
    createTeaser(main, document);
  }

  const gridFlex = currentBlock.querySelector('div.cmp-container--layoutflex div.aem-Grid div.aem-GridColumn');
  if (!teaser && gridFlex) {
    createColumnsFlex(currentBlock, main, document);
  }

  const headers = currentBlock.querySelector('div.headers.aem-GridColumn--default--12');
  if (headers) {
    main.append(headers);
  }

  const carousel = currentBlock.querySelector('div.carousel');
  if (carousel) {
    createCarousel(currentBlock, main, document);
  }

  const grid = currentBlock.querySelector('div.aem-Grid div.aem-GridColumn');
  if (!teaser && grid) {
    createColumns(currentBlock, main, document);
  }

  const imageList = currentBlock.querySelector('div.aem-Grid.aem-Grid--12.aem-Grid--default--12 ul.cmp-image-list__list');
  if (imageList) {
    createImageList(currentBlock, main, document);
  }

  // Add metadata to end of section
  // Get metadata from background color defined in class of the block
  for (let i = 0; i < currentBlock.classList.length; i += 1) {
    // Iterate over block classes to find background class
    if (currentBlock.classList[i].match('cmp-container--bg*')) {
      const cells = [
        ['Section Metadata'],
        ['Style', currentBlock.classList[i].substring(17)],
      ];

      const metadata = WebImporter.DOMUtils.createTable(cells, document);
      main.append(metadata);
      break;
    }
  }
}

// Generalize creating columns from grids
// Extract all aem-Grid--12 that have aem-GridColumn--default--6
// 12 is the container (100%) that holds two columns of 6 (50% each)
const createHomepage = (main, document) => {
  // Find all aem-GridColumn--default--6 that are children of aem-Grid--12
  const sectionRaw = main.querySelectorAll('div#mainContent > div.aem-Grid > div.aem-GridColumn--default--12:nth-child(2) > div.cmp-container > div.aem-Grid > div.aem-GridColumn');

  if (sectionRaw) {
    for (let i = 0; i < sectionRaw.length; i += 1) {
      createSection(sectionRaw[i], main, document);

      if (i < sectionRaw.length - 1) {
        main.append(document.createElement('hr'));
      }
    }
  }
};

export default createHomepage;
