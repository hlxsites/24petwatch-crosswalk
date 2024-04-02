/* global WebImporter */
function createOverflowHero(currentBlock, main, document) {
  const discount = currentBlock.querySelector('div.cmp-container--rounded-all');
  discount.remove();

  const title = 'OverflowHero';
  const blockClassList = [];

  if (discount) {
    const discountParagraph = document.createElement('p');
    const originalDiscount = {
      title: discount.querySelector('div.cmp-title'),
      text: discount.querySelector('div.cmp-text--size-large'),
      smallPrints: discount.querySelector('div.cmp-text-specialfineprint'),
    };

    if (originalDiscount.title) {
      const amount = document.createElement('strong');
      amount.textContent = originalDiscount.title.textContent;
      discountParagraph.append(amount);
      discountParagraph.append(document.createElement('br'));
    }

    if (originalDiscount.text) {
      discountParagraph.append(originalDiscount.text.textContent);
      discountParagraph.append(document.createElement('br'));
    }

    if (originalDiscount.smallPrints) {
      const smallPrints = document.createElement('em');
      smallPrints.textContent = originalDiscount.smallPrints.textContent;
      discountParagraph.append(smallPrints);
    }

    currentBlock.append(discountParagraph);

    blockClassList.push('discount');
  }

  let blockTitle;
  if (blockClassList.length > 0) {
     //blockTitle = title + ' (' + blockClassList.join(',') + ')';
     blockTitle = `${title} (${blockClassList.join(',')})`;
  } else {
    blockTitle = title;
  }

  const overflowHero = [
    [blockTitle],
    [currentBlock],
  ];

  const block = WebImporter.DOMUtils.createTable(overflowHero, document);

  main.append(block);
}

export default createOverflowHero;
