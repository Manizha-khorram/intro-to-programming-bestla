
var today= new Date();
var thisYear= today.getFullYear();

let footer=document.querySelector('footer');
let copyright=document.createElement('p');
copyright.innerHTML=`Manizha Khorram ${thisYear}`;
footer.appendChild(copyright);
let skills=['MS Office', 'Adobe Illustrator','Programing languages (HTML, CSS, JavaScript)'];
let skillsSection=document.querySelector('#skills');
let skillsList=skillsSection.querySelector('ul');
for(let i=0; i<skills.length; i++){
    let skill=document.createElement('li');
    skill.innerText=skills[i];
    skillsList.appendChild(skill);
}
