//Select the section with an id of container without using querySelector.
document.getElementById('container');

//Select the section with an id of container using querySelector.
document.querySelector('#container');

//Select all of the list items with a class of "second".
document.querySelectorAll(".second");

//Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol').querySelector('.third');

//Give the section with an id of container the text "Hello!".
document.querySelector('#container').append('Hello!');


//Add the class main to the div with a class of footer.
document.querySelector('.footer').classList.add('main');

//Remove the class main on the div with a class of footer.
document.querySelector('.footer').classList.remove('main');

//Create a new li element.
var fourth = document.createElement('li');

//Give the li the text "four".
fourth.innerText = "four";


//Append the li to the ul element.
document.querySelector('ul').append(fourth);


//Loop over all of the list inside the ol tag and give them a background color of "green".
document.querySelector('ul').querySelectorAll('li').forEach(value => value.style.background = 'green');

//Remove the div with a class of footer.
document.querySelector(".footer").remove()