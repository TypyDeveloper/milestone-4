//listing element
document.getElementById("resumeform")?.addEventListener('submit',function(event)
{
    event.preventDefault();
    const namelement =document.getElementById('name') as HTMLInputElement;
    const emailelement =document.getElementById('email') as HTMLInputElement;
    const PhoneElement =document.getElementById('phone') as HTMLInputElement;
    const educationelement =document.getElementById('education') as HTMLInputElement;
    const ExperienceElement =document.getElementById('experience') as HTMLInputElement;
    const Skillselement =document.getElementById('skills') as HTMLInputElement;

    if(namelement && emailelement && PhoneElement &&educationelement && ExperienceElement &&Skillselement)
        {
        const name = namelement.value;
        const email = emailelement.value;
        const phone = PhoneElement.value;
        const education = educationelement.value   ;
        const Experience = ExperienceElement.value  ;
        const Skills = Skillselement.value;


         // / create resume output
    const resumeoutput = `h2>Resume</h2>
    <p> <strong>Name:</strong><span id="edit-name" class="editable"> ${name}</span> </p>
    <p> <strong>Email:</strong><span id="edit-email" class="editable"> ${email} </span> </p>
    <p> <strong>Phone:</strong> <span id="edit-phone" class="editable">${phone} </span> </p>

    <h3> Education</h3>
    <p id="edit-education class="editable">${education}   </p>

    <h3>Experience </h3>
    <p id="edit-experience" class="editable">${Experience}   </p>

    
    <h3>Skills </h3>'
    <p id="edit-skills" class="editable"> ${Skills}  </p>`;
    const resumeoutputElement = document.getElementById("resumeoutput")
    if(resumeoutputElement){
        resumeoutputElement.innerHTML = resumeoutput;
        makeEditable();
    }
    else{
        console.error("the resume output element are missing");
      

    }


   
    
      
    }
    else  {
    console.error("one or more output are missing");
    
    }

}
);
function makeEditable(){
    const editableElement =document.querySelectorAll('.editable');
    editableElement.forEach(element =>{element.addEventListener('click', function(){
        const currentElement =element as HTMLElement;
        const currentvalue =currentElement.textContent||"";


        // replace content
        if(currentElement.tagName === "p" || currentElement.tagName === "SPAN"){
            const input = document.createElement("input")
        input.type = "text";
        input.value = currentvalue;
        input.classList.add('editing-input')
        input.addEventListener('blur',function(){
            currentElement.textContent=input.value;
            currentElement.style.display="inline";
            input.remove();
        }
        )

        currentElement.style.display =" none"
        currentElement.parentNode?.insertBefore(input,currentElement)
        input.focus ()

}
    })})
}