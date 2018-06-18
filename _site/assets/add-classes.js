/*ADD "THE OVERVIEW", "THE ROLE", OUTER DIVS, AND REMOVE PARAGRAPH*/
/*DISPLAY ARROW IN MENU*/
window.onload = function(){


    //ADD IN "THE OVERVIEW" AND OUTER DIV
    // get first paragraph in post-content-outer
    var para1 = document.getElementById('post-content-outer').getElementsByTagName('ul')[0];
    // create wrapper div
    var wrapper = document.createElement('div');
    wrapper.classList.add("overview");
    // create h2 tag
    var title = document.createElement('h2');
    title.innerHTML = "the inspiration";
    // insert wrapper before para1 in the DOM tree
    para1.parentNode.insertBefore(wrapper, para1);
    //move h2 and para into wrapper
    wrapper.appendChild(title);
    wrapper.appendChild(para1);


    //ADD IN "THE ROLE" AND OUTER DIV
    // get first paragraph in post-content-outer
    var para2 = document.getElementById('post-content-outer').getElementsByTagName('ul')[1];
    // create wrapper div
    var wrapper2 = document.createElement('div');
    wrapper2.classList.add("role");
    // create h2 tag
    var title2 = document.createElement('h2');
    title2.innerHTML = "the medium";
    // insert wrapper before para1 in the DOM tree
    para2.parentNode.insertBefore(wrapper2, para2);
    //move h2 and para into wrapper
    wrapper2.appendChild(title2);
    wrapper2.appendChild(para2);

    //REMOVE 1st PARAGRAPH TAG BETWEEN LISTS
    var para3 = document.getElementById('post-content-outer').getElementsByTagName('p')[0];
    para3.parentNode.removeChild(para3);




    //DISPLAY ARROW IN MENU
    var elem = document.getElementById("js-animate-right"); 
    //var pos = 0;  
    var pos = getCssProperty("js-animate-right", "left");
    pos = pos.substring(0, pos.length-2);
    var id = setInterval(moveRight, 15);

    function moveRight() {
        if (pos == 0) {
          clearInterval(id);
        } else {
          pos++; 
          elem.style.left = pos + 'px'; 
        }
    }

    function getCssProperty(elmId, property){
        var elem = document.getElementById(elmId);
        return window.getComputedStyle(elem,null).getPropertyValue(property);
    }
    

    //REMOVE ARROW IN MENU
    var link1 = document.getElementsByTagName('a')[0];
    link1.onclick = clickHandler;

    function clickHandler(event) {
        event.preventDefault();
        var travelTo = this.getAttribute("href");

        id = setInterval(moveLeft, 15);

        // delay page out until the animation finishes
        setTimeout(function() {
          window.location.href = travelTo;
        }, 1000);
    };

    function moveLeft() {
        if (pos == -45) {
          clearInterval(id);
        } else {
          pos--; 
          elem.style.left = pos + 'px'; 
        }
    }



}