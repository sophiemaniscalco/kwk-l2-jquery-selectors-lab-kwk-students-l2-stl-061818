'use-strict';
//add your code here
function h1Selector(){
  return $('h1')
}

function liInOlSelector(){
  document.querySelectorAll("ol li");
 return document.querySelectorAll("ol li");
}

function linkSelector(){
  return $('a', '#box4', '.box5')
}

function imageSelector() {
  return $("img[alt='cat sleeping']")
}

function checkboxInputSelector() {
  return $(":checkbox")
}