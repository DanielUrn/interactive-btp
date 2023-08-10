const upBtn = document.getElementById('tawkBtn-up')
const downBtn = document.getElementById('tawkBtn-down')

Tawk_API.onLoad = function(){
    Tawk_API.hideWidget();
};

Tawk_API.onChatMinimized = function(){
    Tawk_API.hideWidget();
};

function chatNow(){
    Tawk_API.showWidget();
    Tawk_API.toggle();
}

upBtn.addEventListener('click', ()=>{
    chatNow()
})

downBtn.addEventListener('click', ()=>{
    chatNow()
})