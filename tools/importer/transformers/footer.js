const iconLinks = {
  '/content/24petwatch/us/en/contact-us.html': 'contactus',
  'tel:': 'phone',
  'https://instagram.com': 'instagram',
  'https://www.facebook.com': 'facebook',
  'https://twitter.com': 'twitter',
};

function getIconLink(link) {
  const iconLink = Object.keys(iconLinks).find((key) => link.startsWith(key));
  return iconLink ? iconLinks[iconLink] : null;
}

function processEntry(entry, main, document) {
  const title = entry.querySelector('*:is(h2, h3, h4, h5, h6)');
  const ul = document.createElement('ul');
  entry.querySelectorAll('div.text p').forEach((e) => {
    const li = document.createElement('li');
    const link = e.querySelector('a');
    const icon = getIconLink(link.getAttribute('href'));

    if (icon) {
      const iconSpan = document.createElement('span');
      iconSpan.textContent = `:${icon}:`;
      li.append(iconSpan);
    }

    li.append(link);
    ul.append(li);
  });
  if (title !== null) {
    main.append(title);
    main.append(ul);
  }
}

const createFooter = (main, document) => {
  const footer = main.querySelector('div#footer');

  if (!footer) {
    return;
  }

  main.querySelectorAll('#footer-labels > div.aem-Grid > div.aem-GridColumn').forEach((element) => {
    let isAccordion = false;
    element.querySelectorAll('div.cmp-accordion__item').forEach((subelement) => {
      isAccordion = true;
      processEntry(subelement, main, document);
    });

    if (!isAccordion) {
      processEntry(element, main, document);
    }
  });

  main.append(document.createElement('hr'));

  main.querySelectorAll('div.image').forEach((img) => {
    main.append(img);
  });

  main.append(document.createElement('hr'));

  const linkContainer = main.querySelectorAll('div#footer-links-container a');

  if (linkContainer) {
    const ul = document.createElement('ul');
    linkContainer.forEach((link) => {
      const li = document.createElement('li');
      li.append(link);
      ul.append(li);
    });
    main.append(ul);
  }

  main.append(main.querySelector('div#footer-notice-global'));
};

export default createFooter;
