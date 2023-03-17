// hover icon

const hoverIcons = document.querySelectorAll('.icons-interaction')

for (const hoverIcon of hoverIcons){ 
    
    hoverIcon.addEventListener('mouseover',function showiconDecriptions(){
        timeDelay = setTimeout(() => {            
            hoverIcon.firstElementChild.firstElementChild.style.display = 'flex'
        },1000)
    })
    hoverIcon.addEventListener('mouseout',function showiconDecriptions(){
        clearTimeout(timeDelay)
        hoverIcon.firstElementChild.firstElementChild.style.display = 'none'
     })
}
