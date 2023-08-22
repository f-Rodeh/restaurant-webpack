import createFooter from "./footer";
import Logo from './img/logoipsum-287.svg';
import { Main as Home } from "./home" ;
export {setup}

const setup = () => {
  const root = document.getElementById('content');

  root.append(
    Header(),
    Home(),
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
    navLink('Home', ''),
    navLink('Menu', ''),
    navLink('Contact', '')
  )

  output.append(logo, nav);
  return output;
}

function create(type, cls) {
  const output = document.createElement(type);
  if (cls) output.classList.add(cls);
  return output;
}

function navLink( text, href = '' ){
  const output = document.createElement('a');
  output.textContent = text;
  output.href = href;
  return output;
}

