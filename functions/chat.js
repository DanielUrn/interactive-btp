const upBtn = document.getElementById('tawkBtn-up')
const downBtn = document.getElementById('tawkBtn-down')

upBtn.addEventListener('click', ()=>{
    chatNow()
})

downBtn.addEventListener('click', ()=>{
    chatNow()
})

function chatNow(){
    if(widget.length > 0){
        widget[0].setAttribute('class', 'widget-visible')
    }
    if(typeof Tawk_API !== undefined){
        Tawk_API.toggle()
    }
}