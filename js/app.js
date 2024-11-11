let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 100 && distancia_skills <= window.innerHeight + 1600) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("cmas");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("kotlin");
        habilidades[5].classList.add("uiux");
        habilidades[6].classList.add("sql");
        habilidades[7].classList.add("excel");
        habilidades[8].classList.add("sap");
        habilidades[9].classList.add("react");
        habilidades[10].classList.add("vuejs");
        habilidades[11].classList.add("aspnet");
        habilidades[12].classList.add("docker");
        habilidades[13].classList.add("git");
        habilidades[14].classList.add("linux");
        habilidades[15].classList.add("mongodb");
        habilidades[16].classList.add("powerbi");
        habilidades[17].classList.add("procreate");
    }else{
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.remove("htmlcss");
        habilidades[1].classList.remove("javascript");
        habilidades[2].classList.remove("cmas");
        habilidades[3].classList.remove("python");
        habilidades[4].classList.remove("kotlin");
        habilidades[5].classList.remove("uiux");
        habilidades[6].classList.remove("sql");
        habilidades[7].classList.remove("excel");
        habilidades[8].classList.remove("sap");
        habilidades[9].classList.remove("react");
        habilidades[10].classList.remove("vuejs");
        habilidades[11].classList.remove("aspnet");
        habilidades[12].classList.remove("docker");
        habilidades[13].classList.remove("git");
        habilidades[14].classList.remove("linux");
        habilidades[15].classList.remove("mongodb");
        habilidades[16].classList.remove("powerbi");
        habilidades[17].classList.remove("procreate");
    }
}
function descargaCV() {
    window.location.href = 'https://drive.google.com/uc?export=download&id=1ba9c4bTCF9CmVZoSuAdJQSDc1AExWK4L';
    //https://drive.google.com/file/d//view?usp=sharing
    //1ba9c4bTCF9CmVZoSuAdJQSDc1AExWK4L
    //https://drive.google.com/uc?export=download&id=16TUYOaij8GCWG8Ybxs-1oMrMtWEWBnf7
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// https://drive.google.com/uc?export=download&id=1yyKlWpo4AvC0voKSedPHpLTjHjgSxfue
