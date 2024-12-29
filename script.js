
        let head = document.getElementById("quote")
        head.textContent="Let each day be your masterpiece"
 
 
       let infobox=document.getElementsByClassName("info-box")
        for(let i=0;i<infobox.length;i++)
        infobox[i].style.backgroundColor='lightpink';
 
 
       let list = document.getElementsByTagName("li")
        list[2].textContent="Updated Text Content"
 
 
       let footer=document.querySelector("footer")
        footer.textContent += " - Have a great day"