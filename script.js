let submitButton = document.querySelector(".submit");
let messages = document.querySelector(".result");
let pitbull=document.querySelector(".pitbull");
let maltese=document.querySelector(".maltese");
let ck=document.querySelector(".ck");
let lr=document.querySelector(".lr");
let ch=document.querySelector(".ch");
let corgi=document.querySelector(".corgi");

submitButton.onclick = function() {
    let comment =
        document.querySelector(".comment").value;
    console.log(comment);
    let box2 = document.querySelector(".comment2").value;

    if (comment === "extrovert" && box2 === "shop") {
        messages.style.display = "block";
        messages.innerHTML = "You got Pitbull!";
        pitbull.style.display="block";
    }
   else if (comment === "introvert" && box2 === "read"){
        messages.style.display= "block";
        messages.innerHTML = "You got Maltese!";
        maltese.style.display="block";
    }
   else if (comment === "both" && box2 === "all"){
        messages.style.display= "block";
        messages.innerHTML = "You got cavalier king charles spaniel!";
        ck.style.display="block";
   }
       else if (comment === "both" && box2 === "being with friends"){
        messages.style.display= "block";
        messages.innerHTML = "You got labrador retriever!";
        lr.style.display="block";
       }
    else if (comment === "introvert" && box2 === "being with friends"){
        messages.style.display= "block";
        messages.innerHTML= "You got Chihuahua!";
        ch.style.display= "block";
    }
    else if (comment === "extrovert" && box2 === "read"){
        messages.style.display= "block";
        messages.innerHTML= "You got Corgi!";
        corgi.style.display= "block";
    }
    };
	