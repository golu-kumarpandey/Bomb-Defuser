let defuserinput = document.getElementById("defuser")
let timer = document.getElementById("timer")
let conter = 20
let setid = null



        let audio1 = document.createElement("audio");
        audio1.src ="part1.mp3"

        let audio2 = document.createElement("audio")
        audio2.src = "part2.mp3"

        let friend = document.getElementById("g")

 setid = setInterval
(function() {
        conter -= 1
        timer.textContent = conter
        
        if (conter === 0 && defuserinput.value !== "GOURI"){

            
            let randomHexCode = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
            friend.style.color = randomHexCode
            friend.style.fontWeight = "bold"

            audio2.play()
            timer.textContent = "BooM !!!"
            timer.style.color = "red"
            audio1.pause()
             
            
            clearInterval(setid)
        } else if (conter >= 0 && defuserinput.value === "GOURI") {
            
            timer.style.color = "green"
            timer.style.fontWeight="bold"
            timer.textContent = " you did it"
            
            audio1.pause()
           
            clearInterval(setid) 
            let randomHexCode = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
            friend.style.color = randomHexCode
            friend.style.fontWeight = "bold"

          
            

        }else{
            if (conter >= 0){
                
                 timer.style.color = "red"
                 timer.textContent = conter
                 
                 audio1.play()
                 let randomcolor = "#" + Math.floor(Math.random()*16).toString(16)
                 console.log(randomcolor)
                 let randomHexCode = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
                 friend.style.color = randomHexCode
                 friend.style.fontWeight = "bold"
                 
            
           
             
            }
        }
       
        
        
    }, 1000)




