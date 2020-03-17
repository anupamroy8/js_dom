var myul = document.querySelector('ul');
var p1 = document.createElement('p');
var p2 = document.createElement('p');
var p3 = document.createElement('p');
var p4 = document.createElement('p');
myul.append(p1);
myul.append(p2);
myul.append(p3);
myul.append(p4);

var movemouse = document.addEventListener("mousemove", function(myevent) {
     p1.textContent = myevent.screenX;
     p2.textContent = myevent.screenY;
     p3.textContent = myevent.clientX;
     p4.textContent = myevent.clientY;
});