let menuBtn = document.getElementById("menuBars")
let mainMenu = document.getElementById("mainMenu")
mainMenu.style.opacity = '1'

menuBtn.addEventListener("click", function(){


    if(mainMenu.style.opacity === '1') {

        mainMenu.style.opacity = '0'
        menuBtn.style.transform = 'rotate(90deg)'
         

    } else {

        mainMenu.style.opacity = '1'
        menuBtn.style.transform = 'rotate(0deg)'

    }


})
