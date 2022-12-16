const myName = (name) => name;

const forms = () => {
    let form = document.createElement("form");
    form.id = "form";

    let element1 = document.createElement("input"); 
    let first = document.createElement("h3");
    first.textContent = "First Name";

    let element2 = document.createElement("input");  
    let last = document.createElement("h3");
    last.textContent = "Last Name";

    element1.name="un";
    form.appendChild(first);
    form.appendChild(element1);  

    element2.name="pw";
    form.appendChild(last);
    form.appendChild(element2);

    let submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.id = "submit";
    form.appendChild(submit);

    event.preventDefault();

    document.body.appendChild(form);
  }

const homes = () => {
    let recreate = document.createElement("img");
        recreate.id = "main-pic";
        recreate.src = myName("traditional.jpg");
        
        document.body.appendChild(recreate);

        let recreateTxt = document.createElement("h3");
        recreateTxt.id = "main-text";
        recreateTxt.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        
        document.body.appendChild(recreateTxt);
}

const menus = () => {
    let menuList1 = document.createElement("h3");
            menuList1.textContent = "Pineapple!";
            menuList1.id = "pineapple-text";
            document.body.appendChild(menuList1);
            
        
          let menuPic1 = document.createElement("img");
          menuPic1.src = myName("pineapplepizza.jpg");
          menuPic1.id = "pineapple";
          document.body.appendChild(menuPic1);
          
  

          let menuList2 = document.createElement("h3");
          menuList2.textContent = "Pepperoni!";
          menuList2.id = "pineapple-text";
          document.body.appendChild(menuList2);

       
          let menuPic2 = document.createElement("img");
          menuPic2.src = myName("download.jpg");
          menuPic2.id = "pineapple";
          document.body.appendChild(menuPic2);
}

    export {
        myName, forms, homes, menus
    }