var widget = document.getElementsByClassName('widget-visible')

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

window.onload = async function() {
    await sleep(1000)
    widget[0].setAttribute('class', 'tawk-widget-visible')
    widget = document.getElementsByClassName('tawk-widget-visible')
};