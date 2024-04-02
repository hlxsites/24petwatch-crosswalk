const createHeader = async (main, document) => {
  const header = main.querySelector('div.page-header');

  if (header) {
    const logo = document.createElement('span');
    logo.classList.add('icon');
    logo.classList.add('icon-logo');
    logo.textContent = ':logo:';
    main.append(logo);

    main.append(document.createElement('hr'));

    const strong = document.createElement('strong');
    strong.append(document.querySelector('div.page-header__get-quote'));
    main.append(strong);

    main.append(document.createElement('hr'));

    const navigationGroup = document.querySelector('ul.cmp-navigation__group');

    main.append(navigationGroup);

    main.append(document.createElement('hr'));

    const ul = document.createElement('ul');
    const ids = [];
    document.querySelectorAll('div.page-header__notificationBar > div > div').forEach((element) => {
      const link = element.querySelector(':scope > a');

      if (!element.classList.contains('languagenavigation') && !ids.includes(link.id)) {
        const li = document.createElement('li');
        ids.push(link.id);
        li.append(link);
        ul.append(li);
      }
    });
    main.append(ul);

    header.innerHTML = '';
  }
};

export default createHeader;
