import createFooter from "./footer";
import Logo from './img/logoipsum-287.svg';
import { Main as Home } from "./home";
import { Main as Menu } from "./menu";
import { Main as Contact } from "./contact";
export {setup, setMainContent}

let Main = Home;

function setMainContent( element ){
  Main.replaceWith(element);
  Main = element
}

const setup = () => {
  const root = document.getElementById('content');

  root.append(
    Header(),
    Main,
    createFooter(),
  );
}

function Header(){
  const output = document.createElement('header');

  const logo = create('img', 'logo');
  logo.src = Logo;
  logo.alt = '';

  const nav = create('nav');
  nav.append(
    tabElement('Home'),
    tabElement('Menu'),
    tabElement('Contact')
  )

  output.append(logo, nav);
  return output;
}

function create(type, cls) {
  const output = document.createElement(type);
  if (cls) output.classList.add(cls);
  return output;
}

function tabElement( text ){
  const output = document.createElement('span');
  output.classList.add('tab');
  output.textContent = text;
  output.id = text.toLowerCase().replace(' ', '');
  return output;
}