import createFooter from "./footer";
import Logo from './img/logoipsum-287.svg';
export {setup}

const setup = () => {
  console.log('Starting dom-setup...');

  const root = document.getElementById('content');
  console.log('current:', root)

  console.log('gen about:', About())

  root.append(
    Header(),
    Main(),
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
    navLink('About', ''),
    navLink('Menu', ''),
    navLink('Contact', '')
  )

  output.append(logo, nav);
  return output;
}

function Main() {
  const output = document.createElement('main');

  output.append(
    Hero(),
    About()
  )

  return output;
}

function Hero(){
  const output = document.createElement('section');
  output.id = 'hero';

  const text = create('h1');
  text.innerHTML = '<em>Art</em> is in the <em>food</em>.';

  const button = create('button', 'outlined');
  button.textContent = 'Go to menu'

  output.append(
    text,
    button
  )

  return output;
}

function About(){
  const output = document.createElement('section');
  output.id = 'about';

  const title = create('h1');
  title.textContent = 'About Us';

  const card = create('div', 'card');

  output.append(
    title,
    paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eaque maiores sequi, architecto ratione nisi libero quis perferendis sint qui nihil repellat, porro expedita doloremque?'),
    paragraph('Aliquam, nulla? Quibusdam, cumque provident consectetur dolor repellendus totam!'),
    Card()
  )

  return output;
}

function Card(){
  const output = create('div', 'card');

  const img = create('img', 'circle');
  img.src = 'https://randomuser.me/api/portraits/men/11.jpg';
  img.alt = '';

  const content = create('div', 'content');
  const name = create('h3', 'name');
  const role = create('h4', 'role');

  name.textContent = 'Hugh Mann';
  role.textContent = 'Founder';

  content.append(
    name,
    role,
    paragraph('Inventore quos quam natus quidem quaerat ratione quia. Lorem ipsum dolor sit amet.')
  )

  output.append(
    img,
    content
  )

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

function paragraph( text ) {
  const output = document.createElement('p');
  output.textContent = text;
  return output;
}