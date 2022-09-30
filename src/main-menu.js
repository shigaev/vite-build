function navMenu(data, elem = '', classUl = '', classLi = '', classLink = '') {
    const element = document.querySelector('.' + `${elem}`);

    let menu = data.map((item, index) => {
        item.id = index;
        return `
            <li class="${classLi}">
                <a class="${classLink}" href="${item.pathLink}">${item.title}</a>
            </li>
        `;
    }).join('');

    if (elem) {
        element.innerHTML = `
        <ul class="${classUl}">
            ${menu}
        </ul>
        `;
    }
}

export { navMenu };