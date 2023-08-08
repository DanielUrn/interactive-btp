const upBtn = document.getElementById('tawkBtn-up')
const downBtn = document.getElementById('tawkBtn-down')
const shown = document.getElementsByClassName('widget-visible')
var tawkPanel = document.getElementsByClassName('open')

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
        if(tawkPanel.length > 0 && tawkPanel[0].className === 'open'){   
            shown[0].setAttribute('class', 'tawk-widget-visible')
        }
    }
}