import {myName, forms, homes, menus} from './myFunction';

let home = 1;
let menu = 0;
let contact = 0;

function component() {
    const element = document.createElement('h1');
  
    element.textContent = myName('Pizza!');
    element.id = "pizza";
    let content = document.getElementById("content");
    content.appendChild(element);
    return element;
  }

  function makeImage() {
    const element = document.createElement('img');
  
    element.id = "main-pic";
    element.src = myName("traditional.jpg");

    return element;
  }
  

  function makeParagraph() {
    const element = document.createElement('h3');
  
    element.id = "main-text";
    element.textContent = myName('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam');
    //let content = document.getElementById("content");
    //content.appendChild(element);
    return element;
  }

  function makeMenu() {
    const element = document.createElement('button');
  
    element.textContent = myName('menu');
    let content = document.getElementById("content");
    content.appendChild(element);
    
    element.addEventListener("click", () => {
      menu = 1;

      if (home == 1) {
        home = 0;

        let pic = document.getElementById("main-pic");
        pic.remove();

        let text = document.getElementById("main-text");
        text.remove();

        menus();
      }
      else if (contact == 1) {
        contact = 0;

        let form = document.getElementById("form");
        form.remove();

        menus();
      }
       return element;
    });
  }

  function makeHome() {
    const element = document.createElement('button');
  
    element.textContent = myName('Home');
    let content = document.getElementById("content");
    content.appendChild(element);

    element.addEventListener("click", () => {
      home = 1;
      
      if (menu == 1) {
        function recreateImg() {
          menu = 0;

          let text1 = document.getElementById("pineapple-text");
          text1.remove();
          let text2 = document.getElementById("pineapple-text");
          text2.remove();

          let img1 = document.getElementById("pineapple");
          img1.remove();
          let img2 = document.getElementById("pineapple");
          img2.remove();

        //let content = document.getElementById("content");

          homes();
      }
      recreateImg();
    }
      else if (contact == 1) {
        contact = 0;

        let form = document.getElementById("form");
        form.remove();

        homes();
      }
    })
    
    return element;
  }

  function makeContact() {
    const element = document.createElement('button');
  
    element.textContent = myName('contact');
    element.classList.add = "contact";
    let content = document.getElementById("content");
    content.appendChild(element);

    element.addEventListener("click", () => {
      contact = 1;

      if (home == 1) {
        home = 0;

        let pic = document.getElementById("main-pic");
        pic.remove();

        let text = document.getElementById("main-text");
        text.remove();

        //creates form
        forms();
      }
      else if (menu == 1) {
        menu = 0;

          let text1 = document.getElementById("pineapple-text");
          text1.remove();
          let text2 = document.getElementById("pineapple-text");
          text2.remove();

          let img1 = document.getElementById("pineapple");
          img1.remove();
          let img2 = document.getElementById("pineapple");
          img2.remove();
          
          forms();
      }
    })

    return element;
  }
  
  component();

  makeHome();

  makeMenu();

  makeContact();

  document.body.appendChild(makeImage());

  document.body.appendChild(makeParagraph());