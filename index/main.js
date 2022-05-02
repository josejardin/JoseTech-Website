// ------------------------- Typing Effect
class Typings {
    constructor(txtElement, words, wait = 1000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      const current = this.wordIndex % this.words.length;
      const fullTxt = this.words[current];
  
      if(this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
      // -------- Control Speed
      let typeSpeed = 100;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
      if(!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 100;
      }
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  document.addEventListener('DOMContentLoaded', init);
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new Typings(txtElement, words, wait);
  } // ------------------------- End Typing Effect

  // 
 // const link = document.querySelector(".link");
  //const transition = document.querySelector(".transition");
  //link.addEventListener("click", (e) => {
  //e.preventDefault();
  //transition.classList.add("slide");
  //setTimeout(() => {
    //window.location = link.href;
  //}, 900);
//});

// Setup End Date for Countdown (getTime == Time in Milleseconds)
let launchDate = new Date("June, 18 2022 24:00:00").getTime();

// Setup Timer to tick every 1 second
let timer = setInterval(tick, 1000);

function tick () {
  // Get current time
  let now = new Date().getTime();
  // Get the difference in time to get time left until reaches 0
  let t = launchDate - now;

  // Check if time is above 0
  if (t > 0) {
    // Setup Days, hours, seconds and minutes
    // Algorithm to calculate days...
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    // prefix any number below 10 with a "0" E.g. 1 = 01
    if (days < 10) { days = "0" + days; }
    
    // Algorithm to calculate hours
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = "0" + hours; }

    // Algorithm to calculate minutes
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) { mins = "0" + mins; }

    // Algorithm to calc seconds
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) { secs = "0" + secs; }

    // Create Time String
    let time = `${days} : ${hours} : ${mins} : ${secs}`;

    // Set time on document
    document.querySelector('.countdown').innerText = time;
  }
}