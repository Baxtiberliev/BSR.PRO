const botPage = document.querySelector('#botPage')
const btnHid = document.querySelector('.playerPage')
const botVar = document.querySelector('#bot')
const playerVar = document.querySelector('#player')
const botEmoji = document.querySelector('#botEmoji')







function btnB() {
    playerVar.src = 'img/B.png'
}


function btnN() {
    playerVar.src = 'img/N.png'
}


function btnK() {
    playerVar.src = 'img/K.png'
}







function playerBtn() {
    let botSet = Math.floor(Math.random()*3)
    let botEmojiSet = Math.floor(Math.random()*8)


if (botEmojiSet === 0) {
    botEmoji.src = "img/emojiAwkward.gif"
}else if (botEmojiSet === 1) {
    botEmoji.src = "img/emojiOh.gif"
}else if (botEmojiSet === 2) {
    botEmoji.src = "img/emojiSad.gif"
}else if (botEmojiSet === 3) {
    botEmoji.src = "img/emojiThink.gif"
}else if (botEmojiSet === 4) {
    botEmoji.src = "img/emojiCompression.gif"
}else if (botEmojiSet === 5) {
    botEmoji.src = "img/emojiGreat.gif"
}else if (botEmojiSet === 6) {
    botEmoji.src = "img/emojiLeprosy.gif"
}else if (botEmojiSet === 7) {
    botEmoji.src = "img/emojiSmile.gif"
}







    if (botSet === 0) {
        botVar.src = "img/K.png"
    } else if (botSet === 1) {
        botVar.src = "img/N.png"
    }else {
        botVar.src = "img/B.png"
    }
    
    
    btnHid.style.visibility = "hidden"
    botVar.style.visibility = "visible"
    playerVar.style.visibility = "visible"
    
    
    setTimeout(function() {
        btnHid.style.visibility = 'visible'
        botVar.style.visibility = "hidden"
        playerVar.style.visibility = "hidden"
        botEmoji.src = 'img/emojiFonSmile.gif'
    }, 2000)
}