export { Main } 

import { create, paragraph, title, write } from './dom-manager'
import Img from './img/hero-contact.jpg'

function Main(){
  const output = document.createElement('main');

  output.append(
    Hero(),
    Contact()
  )

  return output
}

function Hero(){
  const output = document.createElement('section');
  output.id = 'hero';

  let background = `linear-gradient(90deg, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 100%)`
  background += `, center / cover url(${Img})`

  output.style.background = background;

  const text = create('h1');
  text.innerHTML = '<em>Art</em> is in the <em>food</em>.';

  output.append( text);

  return output;
}

function Contact(){
  const output = document.createElement('section');
  output.id = 'menu'

  output.append(
    title('Contact Us'),
    write('h3', 'Email'),
    paragraph('booking@fakerestaurant.com'),
    write('h3', 'Cellphone'),
    paragraph('123-456-7890'),
    write('h3', 'Instagram / Facebook'),
    paragraph('@kens.mojo.dojo')
  )

  return output
}