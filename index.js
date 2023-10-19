// technical bar Animation =========================================>
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  wordArray.push(letters);
}
changeWord();
setInterval(changeWord, 4000);



// circle animation ===================================================>
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor(dots*marked/100);
  var points = "";
  var rotate = 360/dots;
  for(let i = 0 ; i < dots ; i++){
    points += `<div class="points" style="--i: ${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;
  const pointsMarked = elem.querySelectorAll('.points');
  for(let i=0; i<percent; i++){
    pointsMarked[i].classList.add('marked')
  }
})


// mixitip portfolio ===============================================>

var mixer = mixitup('.portfolio-gallery');




// toggle icon navbar ======================================================>
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menuIcon.onclick = ()=>{
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
}

window.onscroll = ()=>{
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
}



// active menu bar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header ul li a');
// console.log(navLinks);

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 80;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header ul li a[href*=' + id + ']').classList.add('active');
            });
        };

    });
};





















