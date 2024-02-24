
// Question 1
// Update the style of the first paragraph tag in the HTML to use a different font family, color and/or size.
const p = document.getElementsByTagName("p")[0];
p.style.color = "green";
p.style.fontFamily = "monospace";


// Question 2
// Add a new paragraph tag at the bottom of the "section" node.
const new_para = document.createElement('p');
new_para.textContent = "hello this is my new para";

const bottom = document.getElementsByTagName('Section')[0];
bottom.appendChild(new_para);


//Question 3
//Create a table and paint alternative colors to its rows.

const rows = document.querySelectorAll("tr");

rows.style.color = "green";