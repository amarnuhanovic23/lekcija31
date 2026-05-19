var name1 = document.getElementById("input1");
var name2 = document.getElementById("input2");
var name3 = document.getElementById("input3");
var btn = document.getElementById("btn");
var name_search = document.getElementById("name_input");
var search_btn = document.getElementById("search_btn");

btn.addEventListener("click", function() {
    var names = [];
    names.push(name1.value);
    names.push(name2.value);
    names.push(name3.value);
    console.log(names);
});

names.forEach((name) => {
  const li = document.createElement('li'); 
  li.textContent = name;                  
  listElement.appendChild(li);            
});

name_search.addEventListener("click", function() {
    var search_name = name_search.value;
    if (names.includes(search_name)) {
        search_name.CSScode("color", "green");
        console.log("Name found: " + search_name);
    }
});