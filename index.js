

function tableau() {
    let nom = document.getElementById('nom');
    let prenom = document.getElementById('prenom');
    let age = document.getElementById('age');
    let tab;
    nom = ' nom : '+nom.value;
    prenom =' prenom : '+prenom.value;
    age = ' age : '+age.value;
    tab = [nom, prenom, age];

    console.log(nom,prenom,age);
    liste(tab);
}


function liste(tab){
    let li = document.createElement("li");
    let e = document.createTextNode(tab)
    li.appendChild(e);
    if(tab == '') {
        alert('veuillez ecrire');
    }else{
        document.getElementById('liste').appendChild(li);
    }
    document.getElementById
}
//let listeUl = document.getElementById('liste');