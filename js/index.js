
//togleBUTTON
const toggleButton = document.getElementById('menu');
const naviList = document.getElementById('navi-list');
  toggleButton.addEventListener('click',(e)=>{
    naviList.classList.toggle('active');
    console.log("e");
  })


//creating this year date beside my name in the footer section 
let today= new Date();
let thisYear= today.getFullYear();
let footer=document.querySelector('footer');
let copyright=document.createElement('p');
copyright.innerHTML=`Manizha Khorram ${thisYear}`;
footer.appendChild(copyright);

//My skills list
let skills=['HTML', 'CSS','JavaScript'];
let skillsSection=document.querySelector('#skills');
let skillsList=skillsSection.querySelector('ul');
for(let i=0; i<skills.length; i++){
    let skill=document.createElement('li');
    skill.innerText=skills[i];
    skillsList.appendChild(skill);
}

//creating form for user to leave a message
const messageForm=document.getElementsByName("leave_message");
messageForm.item(0).addEventListener("submit",(event) => {
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const message=event.target.message.value;
    const messageSection=document.getElementById('messages');
    const messageList=messageSection.querySelector('ul');
    const newMessage=document.createElement('li');
    newMessage.innerHTML=`<a href="mailto: ${email}">${name}</a> wrote:<span>${message}</span>`;

   //creating remove button and edit button and saving the edited message
    const removeButton=document.createElement('BUTTON');
    const editButton=document.createElement('BUTTON');
    removeButton.innerText='remove';
    removeButton.type='button';
    editButton.innerText='edit';
    editButton.type='button';
    newMessage.addEventListener('click',(e)=>{
        if(e.target.tagName==="BUTTON"){
        const button=e.target;
        let entry=removeButton.parentNode;
        console.log(e.target);
        console.log("here is entry",entry);
        console.log("here is the target",e.target.parentNode);
        if(button.innerText==='remove'){
            entry.remove();
        }else if(button.innerText==='edit'){
            const span= newMessage.childNodes[2];
            const input=document.createElement('input');
            input.type='text';
            input.value=span.innerText;
            newMessage.insertBefore(input,span);
            newMessage.removeChild(span);
            button.innerText ='save';

        }else if(button.innerText === 'save'){
            const input = newMessage.childNodes[2];
            const span = document.createElement('span');
            span.type='text';
            span.innerText = input.value;
            newMessage.insertBefore(span,input);
            newMessage.removeChild(input);
            button.innerText = 'edit';
        }
}})
      messageList.appendChild(newMessage);
      newMessage.appendChild(removeButton);
      newMessage.appendChild(editButton);
      messageForm.item(0).reset();
})




    
fetch('https://api.github.com/users/Manizha-khorram/repos')
 .then(response => response.json())
 .then( data => {
      console.log(data);
     let projectSection = document.getElementById('projects');
     let projectList = projectSection.querySelector('ul');
     for(let i = 0; i < data.length; i++){
         let project = document.createElement('li');
         project.innerHTML =`<a href="${data[i].html_url}"> ${data[i].name}</a>`
         projectList.appendChild(project);
    
             } }).catch(error => console.log('Looks like there is an error!!',error))
 
 