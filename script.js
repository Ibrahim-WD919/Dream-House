var body = document.querySelector("body")
var moon = document.querySelector("#moon")
var sun = document.querySelector("#sun")

// Our Project
var ourProject1 = document.querySelector("#op1")
var ourProject2 = document.querySelector("#op2")
var ourProject3 = document.querySelector("#op3")

// Our Services
var ourServices1 = document.querySelector("#os1")
var ourServices2 = document.querySelector("#os2")
var ourServices3 = document.querySelector("#os3")
var ourServices4 = document.querySelector("#os4")
var ourServices5 = document.querySelector("#os5")
var ourServices6 = document.querySelector("#os6")

// Our Team
var ourTeam1 = document.querySelector("#ot1")
var ourTeam2 = document.querySelector("#ot2")
var ourTeam3 = document.querySelector("#ot3")
var ourTeam4 = document.querySelector("#ot4")

// Our Team
var contact = document.querySelector("#cu")
var contact1 = document.querySelector("#cu1")
var contact2 = document.querySelector("#cu2")
var contact3 = document.querySelector("#cu3")



moon.addEventListener("click",function(){
    moon.style.display = "none"
    sun.style.display = "inline-block"

    body.style.backgroundColor = "#1c1c1c"
    body.style.color = "#a6a6a6"

    ourProject1.style.backgroundColor = "#303030"
    ourProject1.style.color = "#bababa"
    ourProject2.style.backgroundColor = "#303030"
    ourProject2.style.color = "#bababa"
    ourProject3.style.backgroundColor = "#303030"
    ourProject3.style.color = "#bababa"
    
    ourServices1.style.backgroundColor = "#303030"
    ourServices1.style.color = "#bababa"
    ourServices2.style.backgroundColor = "#303030"
    ourServices2.style.color = "#bababa"
    ourServices3.style.backgroundColor = "#303030"
    ourServices3.style.color = "#bababa"
    ourServices4.style.backgroundColor = "#303030"
    ourServices4.style.color = "#bababa"
    ourServices5.style.backgroundColor = "#303030"
    ourServices5.style.color = "#bababa"
    ourServices6.style.backgroundColor = "#303030"
    ourServices6.style.color = "#bababa"

    ourTeam1.style.backgroundColor = "#303030"
    ourTeam1.style.color = "#bababa"
    ourTeam2.style.backgroundColor = "#303030"
    ourTeam2.style.color = "#bababa"
    ourTeam3.style.backgroundColor = "#303030"
    ourTeam3.style.color = "#bababa"
    ourTeam4.style.backgroundColor = "#303030"
    ourTeam4.style.color = "#bababa"

    contact.style.border = "5px solid #383838"
    
    contact1.style.backgroundColor = "#303030"
    contact1.style.color = "#bababa"
    contact1.style.borderColor = "#303030"

    contact2.style.backgroundColor = "#303030"
    contact2.style.color = "#bababa"
    contact2.style.borderColor = "#303030"

    contact3.style.backgroundColor = "#303030"
    contact3.style.color = "#bababa"
    contact3.style.borderColor = "#303030"

})

sun.addEventListener("click",function(){
    sun.style.display = "none"
    moon.style.display = "inline-block"

    body.style.backgroundColor = "white"
    body.style.color = "black"

    ourProject1.style.backgroundColor = "white"
    ourProject1.style.color = "black"
    ourProject2.style.backgroundColor = "white"
    ourProject2.style.color = "black"
    ourProject3.style.backgroundColor = "white"
    ourProject3.style.color = "black"

    ourServices1.style.backgroundColor = "white"
    ourServices1.style.color = "black"
    ourServices2.style.backgroundColor = "white"
    ourServices2.style.color = "black"
    ourServices3.style.backgroundColor = "white"
    ourServices3.style.color = "black"
    ourServices4.style.backgroundColor = "white"
    ourServices4.style.color = "black"
    ourServices5.style.backgroundColor = "white"
    ourServices5.style.color = "black"
    ourServices6.style.backgroundColor = "white"
    ourServices6.style.color = "black"

    ourTeam1.style.backgroundColor = "white"
    ourTeam1.style.color = "black"
    ourTeam2.style.backgroundColor = "white"
    ourTeam2.style.color = "black"
    ourTeam3.style.backgroundColor = "white"
    ourTeam3.style.color = "black"
    ourTeam4.style.backgroundColor = "white"
    ourTeam4.style.color = "black"

    contact.style.border = "5px solid white"

    contact1.style.backgroundColor = "white"
    contact1.style.color = "black"
    contact1.style.border = "1px solid #cfcfcf"

    contact2.style.backgroundColor = "white"
    contact2.style.color = "black"
    contact2.style.border = "1px solid #cfcfcf"

    contact3.style.backgroundColor = "white"
    contact3.style.color = "black"
    contact3.style.border = "1px solid #cfcfcf"
})