const textarea = document.getElementById("text_output");
const virtual_keyboard_regular_keys = document.querySelectorAll(".key");
const enter = document.getElementById("key_enter");
const backspace = document.getElementById("key_backspace");
const capslock = document.getElementById("key_capslock");
const shift = document.getElementById("key_shift");
const space = document.getElementById("key_space");
const ok = document.getElementById("key_ok");
const dark_white_theme_switcher = document.getElementById("switch_theme");


const random_function = () => {

    console.log(`A photon checks into a hotel, where a bellhop asks where its suitcase is. The photon replies, “I didn’t bring any luggage. I’m traveling light."`);
}

random_function()
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
        textarea.focus();
        let char = key.value;
        document.querySelectorAll(".sup_number").forEach(item => item.classList.remove("sup_number_active"))
        document.querySelectorAll(".key_number").forEach(item => item.classList.remove("key_number_active"))
        if (shift.classList.contains("active")) {
            switch (key.value) {
                case "1": char = "!";
                    break;
                case "2": char = "@";
                    break;
                case "3": char = "#";
                    break;
                case "4": char = "$";
                    break;
                case "5": char = "%";
                    break;
                case "6": char = `"`;
                    break;
                case "7": char = "&";
                    break;
                case "8": char = "*";
                    break;
                case "9": char = "(";
                    break;
                case "0": char = ")";
                    break;
                case "_": char = "?";
                    break;
                case "-": char = ":";
                    break;

            }

        }
        if (shift.classList.contains("active")) {
            virtual_keyboard_regular_keys.forEach(item => {
                item.classList.toggle("toUpperText")
            })
        }
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
    document.querySelectorAll(".sup_number").forEach(item => item.classList.toggle("sup_number_active"))
    document.querySelectorAll(".key_number").forEach(item => item.classList.toggle("key_number_active"))
    console.log(document.querySelectorAll(".sup_number"));
    virtual_keyboard_regular_keys.forEach(key => {
        key.classList.toggle("toUpperText")

    })
})

capslock.addEventListener('click', () => {
    textarea.focus();
    capslock.classList.toggle("active")
    virtual_keyboard_regular_keys.forEach(key => {

        key.classList.toggle("toUpperText")
    })

})




ok.addEventListener('click', () => {
    alert(text.value);
    shift.classList.toggle("active")
    text.value = '';
})

dark_white_theme_switcher.addEventListener("click", () => {
    console.log("Aa");
    document.querySelector(".keyboard").classList.toggle("dark_theme_keyboard")
    document.querySelector(".main").classList.toggle("dark_theme_body")
})

ok.addEventListener("click", () => {
    alert(`${textarea.value}`)
    textarea.value = ""
})

let control_;
let enter_;
document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === "Control") {
        control_ = true;
    }
    if (e.key === "Enter") {
        enter_ = true;
    }
    if (control_ && enter_) {

        console.log("Aaaa");
        alert(`${textarea.value}`)
        textarea.value = ""
        control_ = false;
        enter_ = false;
    }
});


