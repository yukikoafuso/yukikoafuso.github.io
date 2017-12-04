/*ADD "THE OVERVIEW", "THE ROLE", OUTER DIVS, AND REMOVE PARAGRAPH*/
window.onload = function(){


    //ADD IN "THE OVERVIEW" AND OUTER DIV
    // get first paragraph in post-content-outer
    var para1 = document.getElementById('post-content-outer').getElementsByTagName('ul')[0];
    // create wrapper div
    var wrapper = document.createElement('div');
    wrapper.classList.add("overview");
    // create h2 tag
    var title = document.createElement('h2');
    title.innerHTML = "the overview";
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
    title2.innerHTML = "the role";
    // insert wrapper before para1 in the DOM tree
    para2.parentNode.insertBefore(wrapper2, para2);
    //move h2 and para into wrapper
    wrapper2.appendChild(title2);
    wrapper2.appendChild(para2);

    //REMOVE 1st PARAGRAPH TAG BETWEEN LISTS
    var para3 = document.getElementById('post-content-outer').getElementsByTagName('p')[0];
    para3.parentNode.removeChild(para3);


}