import {setup, setMainContent} from "./dom-setup";
import './style.css';

import { Main as Home } from "./home";
import { Main as Menu } from "./menu";
import { Main as Contact } from "./contact";

setup();

const tabs = document.querySelectorAll('header .tab');

function navigate( id ) {
  const route = 
    id === 'home' ? Home :
    id === 'menu' ? Menu :
    id === 'contact' ? Contact:
    null

  if( route === null ) return;
  setMainContent( route );
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    navigate(tab.id)
  })
})

const heroNav = document.querySelector('#hero button');
heroNav.addEventListener('click', () => { setMainContent(Menu) })