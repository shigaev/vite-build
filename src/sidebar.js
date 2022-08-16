const listCategory = [{
        id: 0,
        title: 'Cat. 1',
        link: '/pages/nested/1'
    },
    {
        id: 1,
        title: 'Cat. 2',
        link: '/pages/nested/2'
    },
    {
        id: 2,
        title: 'Cat. 3',
        link: '/pages/nested/3'
    }
]

const result = listCategory.map((item) => {
    return `
        <li class="list-item"><a class="list-item__link" href="${item.link}">${item.title}</a></li>
    `
}).join('')

const categoryClass = document.querySelector('.category')

if (categoryClass) {
    categoryClass.innerHTML = result
}

export { result }