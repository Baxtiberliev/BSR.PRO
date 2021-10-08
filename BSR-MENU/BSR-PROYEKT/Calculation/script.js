const ekran = document.getElementById("txt");
function setinght(num){
    ekran.value += num;
};
function ten(){
    try {
    ekran.value = eval(ekran.value);
    } catch (e) {
    ekran.value = "Erorr"
    }
};
function cleear(cle){
    ekran.value = cle;
};
function back(bas){
    ekran.value = ekran.value.slice(0, -1);
};