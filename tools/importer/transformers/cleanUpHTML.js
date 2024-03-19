function cleanUpHTML(main, document) {
  // to remove /content/24petwatch/us/en' from internal URL
  main.querySelectorAll('a').forEach((anc) => {
    anc.href = anc.href.replace('/content/24petwatch/us/en', '');
    anc.href = anc.href.replace('/content/24petwatch/language-masters/en', '');
    anc.href = anc.href.replace('/content/24petwatch/ca/en', '/ca');
  });

  main.querySelectorAll('span.cmp-text--largetext').forEach((e) => {
    e.outerHTML = `<b>${e.textContent}</b>`;
  });

  main.querySelectorAll('div.cmp-text-specialfineprint ').forEach((e) => {
    e.outerHTML = `<em>${e.textContent}</em>`;
  });

  main.querySelectorAll('div.button').forEach((e) => {
    const importedLink = e.querySelector('a');
   // var hasOverflowParent = hasParentWithClass(e, 'overflowhero',document);
    let buttonType;
 if (hasParentWithClass(e,"cmp-overflowhero--content",document)) {
        buttonType = e.classList.contains('cmp-button--styleprimary')
        ? 'em'
        : 'strong';
       console.log("e.classList is"+e.classList);
       console.log("buttonType is"+buttonType);
       } else {
        buttonType = e.classList.contains('cmp-button--styleprimary')
        ? 'strong'
        : 'em';
      }
    const cta = document.createElement('a');
    const button = document.createElement(buttonType);
    cta.setAttribute('href', importedLink.getAttribute('href'));
    cta.textContent = importedLink.textContent;
    button.append(cta);
    e.outerHTML = button.outerHTML;
    console.log(" button.outerHTML is"+ button.outerHTML);
    console.log(" e.outerHTML is"+ e.outerHTML);
  });

  const img = main.querySelector('body > div:first-child > img');
  if (img) {
    img.remove();
  }

  return main;
}
function hasParentWithClass(element, className,document) {
  // Start with the parent node of the given element
  var parent = element.parentNode;

  // Traverse up the DOM tree until we reach the top or find the desired class
  while (parent !== null && parent !== document) {
      if (parent.classList.contains(className)) {
        console.log("parent.classList"+parent.classList);
          return true; // Found the class in a parent element
      }
      parent = parent.parentNode; // Move up to the next parent node
  }

  return false; // Did not find the class in any parent element
}




export default cleanUpHTML;
