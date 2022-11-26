const textarea = document.getElementById("text_output");
const virtual_keyboard_regular_keys = document.querySelectorAll(".key");
const enter = document.getElementById("key_enter");
const backspace = document.getElementById("key_backspace");
const capslock = document.getElementById("key_capslock");
const shift = document.getElementById("key_shift");
const space = document.getElementById("key_space");
const ok = document.getElementById("key_ok");


const change_keys_caps_lock = () =>{
    virtual_keyboard_regular_keys.forEach(key =>{
        // console.log(key) 
        if(capslock.classList.contains("capslock")) {
        console.log("Aa")
        }
    })
}


textarea.addEventListener('blur', () => {
    setTimeout(() => {
        textarea.focus();
    }, 0);
});

document.getElementById("show_keyboard").addEventListener("click", () => {
    document.querySelector(".keyboard").classList.toggle("hidden")
})

virtual_keyboard_regular_keys.forEach(key => {
    key.addEventListener('click', () => {
        // textarea.value = textarea.value.slice(0, -1)
        let char = key.value;
        textarea.focus();
    if ((shift.classList.contains('active') && !capslock.classList.contains('active')) || (!shift.classList.contains('active') && capslock.classList.contains('active'))) {
        textarea.value += char.toUpperCase(); 
        // textarea.value += char.toUpperCase() + "|"; kursor ? 
        shift.classList.remove('active');
    } else {
        textarea.value += char;
        shift.classList.remove('active');
    }
})
})

// document.addEventListener("keydown",(e)=>{
//     if(e.key === "Enter"){
//         // virtual_keyboard_regular_keys.forEach(key =>{
//             // if(key.clicked){
                
//                 // textarea.value = textarea.value.slice(0, -1)
//                 textarea.value += "\n"
//             // }
            
//         // })
//     }
// })

space.addEventListener('click', () => {
    textarea.focus();
    textarea.value += ' ';
})

enter.addEventListener('click', () => {
    // textarea.value = textarea.value.slice(0, -1)
    textarea.focus();
    textarea.value += '\n';
    // textarea.value += '\n|';
})

backspace.addEventListener('click', () => {
    textarea.focus();
    textarea.value = textarea.value.slice(0, -1);
})

shift.addEventListener('click', () => {
    textarea.focus();
    shift.classList.toggle('active');
    virtual_keyboard_regular_keys.forEach(key =>{

        key.classList.toggle("toUpperText")
     })
})

capslock.addEventListener('click', () => {
    textarea.focus();
   capslock.classList.toggle("active")
   virtual_keyboard_regular_keys.forEach(key =>{

       key.classList.toggle("toUpperText")
    })
   
})
backspace.addEventListener('click', () => {
    textarea.focus();
    textarea.value = textarea.value.slice(0, -1);
})



ok.addEventListener('click', () => {        
    alert(text.value);
    shift.classList.toggle("active")
    text.value = '';
})

document.getElementById("switch_theme").addEventListener("click",()=>{
    console.log("Aa");
    document.querySelector(".keyboard").classList.toggle("dark_theme_keyboard")
    document.querySelector(".main").classList.toggle("dark_theme_body")
})
