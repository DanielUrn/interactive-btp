const chatBtn = document.getElementById('tawkBtn')

chatBtn.addEventListener('click', ()=>{
    if(widget.length > 0){
        widget[0].setAttribute('class', 'widget-visible')
    }
})