const setingBtn = document.querySelector('#setingBtn')
const setingArrBtn = document.querySelector('#setingArrowBtn')
const setingCard = document.querySelector('#setCard')


setingBtn.onclick = function(){
    if (setingCard.className === "setingCard") {
        setingCard.className = "setingCardRen"
    }
}


setingArrBtn.onclick = function(){
    if(setingCard.className === "setingCardRen"){
        setingCard.className = "setingCard"
    }
}


//seting white & black.
const setingWBtn = document.querySelector('#setingWBtn')
const setingBBtn = document.querySelector('#setingBBtn')
const menuH = document.querySelector('#menuH')


let bodyLocalS = localStorage.bodyTSave
let menuHLocalS = localStorage.menuHTSave


document.body.className = bodyLocalS
menuH.className = menuHLocalS




setingWBtn.onclick = function(){
    let bodyLocalL = document.body.className = ""
    let menuHLocalL = menuH.className = "menuH"
    
    
    bodyLocalS = bodyLocalL
    menuHLocalS = menuHLocalL
    
    
    localStorage.bodyTSave = bodyLocalS
    localStorage.menuHTSave = menuHLocalS
}


setingBBtn.onclick = function(){
    let bodyLocalL = document.body.className = "bodyRen"
    let menuHLocalL = menuH.className = "menuHRen"
    
    
    bodyLocalS = bodyLocalL
    menuHLocalS = menuHLocalL
    
    
    localStorage.bodyTSave = bodyLocalS
    localStorage.menuHTSave = menuHLocalS
}


//seting Language
const setEng = document.querySelector('#setEng')
const setRus = document.querySelector('#setRus')
const setKaz = document.querySelector('#setKaz')
const homeName = document.querySelector('#homeName')
const themaName = document.querySelector('#themaName')
const languageName = document.querySelector('#languageName')


let homeNLocalS = localStorage.homeNLSave
let themaNLocalS = localStorage.themaNLSave
let languageNLocalS = localStorage.languageNLSave
let setingWBtnNLocalS = localStorage.setingWBtnLSave
let setingBBtnNLocalS = localStorage.setingBBtnLSave


homeName.innerHTML = homeNLocalS
themaName.innerHTML = themaNLocalS
languageName.innerHTML = languageNLocalS
setingWBtn.innerHTML = setingWBtnNLocalS
setingBBtn.innerHTML = setingBBtnNLocalS


if (document.body.className === "undefined") {
    document.body.className = ""
    menuH.className = "menuH"
    
}
if (homeName.innerHTML === "undefined") {
    homeName.innerHTML = "Home"
    themaName.innerHTML = "Thema"
    languageName.innerHTML = "Language"
    setingWBtn.innerHTML = "White"
    setingBBtn.innerHTML = "Black"
}


setEng.onclick = function(){
    let homeNLocalL = homeName.innerHTML = "Home"
    let themaNLocalL = themaName.innerHTML = "Thema"
    let languageNLocalL = languageName.innerHTML = "Language"
    let setingWBtnNLocalL = setingWBtn.innerHTML = "White"
    let setingBBtnNLocalL = setingBBtn.innerHTML = "Black"
    
    
    homeNLocalS = homeNLocalL
    themaNLocalS = themaNLocalL
    languageNLocalS = languageNLocalL
    setingWBtnNLocalS = setingWBtnNLocalL
    setingBBtnNLocalS = setingBBtnNLocalL
    
    
    localStorage.homeNLSave = homeNLocalS
    localStorage.themaNLSave = themaNLocalS
    localStorage.languageNLSave = languageNLocalS
    localStorage.setingWBtnLSave = setingWBtnNLocalS
    localStorage.setingBBtnLSave = setingBBtnNLocalS
}
setRus.onclick = function(){
    let homeNLocalL = homeName.innerHTML = "Меню"
    let themaNLocalL = themaName.innerHTML = "Тема"
    let languageNLocalL = languageName.innerHTML = "Язык"
    let setingWBtnNLocalL = setingWBtn.innerHTML = "Бельи"
    let setingBBtnNLocalL = setingBBtn.innerHTML = "Чорныи"
    
    
    homeNLocalS = homeNLocalL
    themaNLocalS = themaNLocalL
    languageNLocalS = languageNLocalL
    setingWBtnNLocalS = setingWBtnNLocalL
    setingBBtnNLocalS = setingBBtnNLocalL
    
    
    localStorage.homeNLSave = homeNLocalS
    localStorage.themaNLSave = themaNLocalS
    localStorage.languageNLSave = languageNLocalS
    localStorage.setingWBtnLSave = setingWBtnNLocalS
    localStorage.setingBBtnLSave = setingBBtnNLocalS
}
setKaz.onclick = function(){
    let homeNLocalL = homeName.innerHTML = "Бейнебет"
    let themaNLocalL = themaName.innerHTML = "Түсқағаз"
    let languageNLocalL = languageName.innerHTML = "Тіл"
    let setingWBtnNLocalL = setingWBtn.innerHTML = "Ақ"
    let setingBBtnNLocalL = setingBBtn.innerHTML = "Қара"
    
    
    homeNLocalS = homeNLocalL
    themaNLocalS = themaNLocalL
    languageNLocalS = languageNLocalL
    setingWBtnNLocalS = setingWBtnNLocalL
    setingBBtnNLocalS = setingBBtnNLocalL
    
    
    localStorage.homeNLSave = homeNLocalS
    localStorage.themaNLSave = themaNLocalS
    localStorage.languageNLSave = languageNLocalS
    localStorage.setingWBtnLSave = setingWBtnNLocalS
    localStorage.setingBBtnLSave = setingBBtnNLocalS
}