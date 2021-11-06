const botPage = document.querySelector('#botPage')
const btnHid = document.querySelector('.playerPage')
const botVar = document.querySelector('#bot')
const playerVar = document.querySelector('#player')
const botEmoji = document.querySelector('#botEmoji')







function btnB() {
    playerVar.src = 'img/B.png'
    playerVar.style.visibility = "visible"
    setTimeout(function() {
        playerVar.style.visibility = "hidden"
        playerVar.className = ''
    }, 2000);
}


function btnN() {
    playerVar.src = 'img/N.png'
    playerVar.style.visibility = "visible"
    setTimeout(function() {
        playerVar.style.visibility = "hidden"
        playerVar.className = ''
    }, 2000);
}


function btnK() {
    playerVar.src = 'img/K.png'
    playerVar.style.visibility = "visible"
    setTimeout(function() {
        playerVar.style.visibility = "hidden"
        playerVar.alt = ''
    }, 2000);
}







function playerBtn() {
    let botSet = Math.floor(Math.random()*3)
    let botEmojiSet = Math.floor(Math.random()*8)


if (botEmojiSet === 0) {
    botEmoji.src = 'img/emojiAwkward.gif'
}else if (botEmojiSet === 1) {
    botEmoji.src = 'img/emojiOh.gif'
}else if (botEmojiSet === 2) {
    botEmoji.src = 'img/emojiSad.gif'
}else if (botEmojiSet === 3) {
    botEmoji.src = 'img/emojiThink.gif'
}else if (botEmojiSet === 4) {
    botEmoji.src = 'img/emojiCompression.gif'
}else if (botEmojiSet === 5) {
    botEmoji.src = 'img/emojiGreat.gif'
}else if (botEmojiSet === 6) {
    botEmoji.src = 'img/emojiLeprosy.gif'
}else if (botEmojiSet === 7) {
    botEmoji.src = 'img/emojiSmile.gif'
}


setTimeout(function() {
    botEmoji.src = 'img/emojiFonSmile.gif'
}, 2000);







    if (botSet === 0) {
        botVar.src = 'img/K.png'
        botVar.style.visibility = "visible"
        setTimeout(function() {
            botVar.style.visibility = "hidden"
        }, 2000)
    } else if (botSet === 1) {
        botVar.src = 'img/N.png'
        botVar.style.visibility = "visible"
        setTimeout(function() {
            botVar.style.visibility = "hidden"
        }, 2000)
    }else {
        botVar.src = 'img/B.png'
        botVar.style.visibility = "visible"
        setTimeout(function() {
            botVar.style.visibility = "hidden"
        }, 2000)
    }
    btnHid.style.visibility = 'hidden'
    setTimeout(function() {
        btnHid.style.visibility = 'visible'
    }, 2000)
}