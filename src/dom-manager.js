export { create, paragraph, title, write }

function create(type, cls){
  const output = document.createElement(type);
  if( cls ) output.classList.add(cls);
  return output;
}

function paragraph( text ) {
  const output = document.createElement('p');
  output.textContent = text;
  return output;
}

function title( text ){
  const output = document.createElement('h1');
  output.textContent = text;
  return output;
}

function write( type, text ){
  const output = document.createElement(type);
  output.textContent = text;
  return output
}