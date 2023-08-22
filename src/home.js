import {create, paragraph, title} from "./dom-manager";

export { Main };

function Main() {
  const output = document.createElement('main');

  output.append(
    Hero(),
    About(),
    Hours(),
    Location(),
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

  output.append( text, button );

  return output;
}

function About(){
  const output = document.createElement('section');
  output.id = 'about';

  output.append(
    title('About Us'),
    paragraph('This is a fake restaurant, with a delicious gastronomic approach. Created in Guatemala in 2023, it has the purpose of defying all that is known, creating a site with the complicated tool "webpack"'),
    paragraph('Come taste a unique experience that merges flavour and art! Are you ready?'),
    Card()
  )

  return output;
}

function Hours(){
  const output = document.createElement('section');
  output.id = 'hours';

  output.append(
    title('Hours'),
    paragraph('Tuesday — Friday from 18:00 to 00:00'),
    paragraph('Weekends from 20:00 to 02:00')
  )

  return output;
}

function Location(){
  const output = document.createElement('section');
  output.id = 'location';

  output.append(
    title('Location'),
    paragraph('P. Sherman, 42 Wallaby Way, Sydney'),
    paragraph('Just keep swimming ;)')
  )

  return output;
}

function Card(){
  const output = create('div', 'card');

  const img = create('img', 'circle');
  img.src = 'https://randomuser.me/api/portraits/men/11.jpg';
  img.alt = '';

  const name = create('h3', 'name');
  const role = create('h4', 'role');

  name.textContent = 'Hugh Mann';
  role.textContent = 'Founder';

  const content = create('div', 'content');
  content.append(
    name,
    role,
    paragraph('I love innovating. This restaurant has been in my mind ever since I learnt how to cook. You do not need to know about webpack to know good food')
  )

  output.append(img, content)

  return output;
}