//scss
import './scss/main.scss';

//js
import { navMenu } from "./main-menu.js";
import { result } from './json';

const m = [{
        title: 'Home',
        pathLink: '/'
    },
    {
        title: 'About',
        pathLink: '/pages/about/'
    },
    {
        title: 'Node',
        pathLink: '/pages/node/'
    },
    {
        title: 'ООП',
        pathLink: '/pages/oop/'
    },
];

navMenu(m, 'collapse', 'navbar-nav me-auto mb-2 mb-lg-0', 'nav-item', 'nav-link');

// data.json
result();