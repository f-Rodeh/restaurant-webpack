export { Main } 

import { create, paragraph, title, write } from './dom-manager'
import Img from './img/hero-menu.jpg'

function Main(){
  const output = document.createElement('main');

  output.append(
    Hero(),
    Starters(),
    Dishes(),
    Desserts(),
    Cocktails()
  )

  return output
}

function Hero(){
  const output = document.createElement('section');
  output.id = 'hero';

  let background = `linear-gradient(90deg, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 75%)`
  background += `, center / cover url(${Img})`

  output.style.background = background;

  const text = create('h1');
  text.innerHTML = '<em>Art</em> is in the <em>food</em>.';

  output.append( text);

  return output;
}

function Starters(){
  const output = document.createElement('section');
  output.id = 'menu'

  output.append(
    title('Starters'),
    write('h3', 'Pisces'),
    paragraph('Served with back-end sauce'),
    write('h3', 'Sagitarium'),
    paragraph('Marinated in cold December'),
    write('h3', 'Gemini'),
    paragraph('Twined and steam cooked')
  )

  return output
}

function Dishes(){
  const output = document.createElement('section');
  output.id = 'menu'

  output.append(
    title('Main Dishes'),
    write('h3', 'Jupiter'),
    paragraph('Biggest planet on the solar system'),
    write('h3', 'Mars'),
    paragraph('The reddish color of its surface is due to finely grained iron(III) oxide dust in the soil'),
    write('h3', 'Venus'),
    paragraph('The densest atmosphere of all the rocky bodies in the Solar System'),
  )

  return output
}

function Desserts(){
  const output = document.createElement('section');
  output.id = 'menu'

  output.append(
    title('Desserts'),
    write('h3', 'Shinjuku'),
    paragraph('Buzzing clubs and karaoke rooms of neon-lit in the Skyscraper District'),
    write('h3', 'Shibuya'),
    paragraph('A major commercial and finance center'),
    write('h3', 'Shimokita'),
    paragraph('Narrow, mural-painted lanes lined with stylish stores for vintage clothes and vinyl')
  )

  return output
}

function Cocktails(){
  const output = document.createElement('section');
  output.id = 'menu'

  output.append(
    title('Cocktails'),
    write('h3', 'Freyja'),
    paragraph('Love, beauty, fertility, sex, war, gold, and seiðr. Freyja is the owner of the necklace Brísingamen and rides a chariot pulled by two cats.'),
    write('h3', 'Valkyrie'),
    paragraph('A female spirit that decides if warriors die or survive. If they are worthy, she guides them to Valhalla.'),
    write('h3', 'Heimdall'),
    paragraph('Keeps watch for invaders and the onset of Ragnarök from his dwelling Himinbjörg, where the burning rainbow bridge Bifröst meets the sky.'),
  )

  return output
}
