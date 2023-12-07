taille = document.getElementById("taille")
poids = document.getElementById("poids")
resultat = document.getElementById("resultat")
calculer = document.getElementById("calculer")

function calcimc() {
    if (taille.value == "" || poids.value == "") {
        alert("Veuillez remplir tous les champs")
        return
    } else if (taille.value < 0 || poids.value < 0) {
        alert("Veuillez entrer des valeurs positives")
        return
    } else if (taille.value > 250 || poids.value > 200) {
        alert("Valeur(s) trop grande(s)\nTaille maximale : 250cm (2,5m)\nPoids maximal : 200kg")
        return
    } else {
        taillem = taille.value / 100
        imc = poids.value / (taillem * taillem)
        resultat.innerHTML = imc.toFixed(2)
        switch (true) {
            case imc < 18.5:
                resultat.innerHTML += " : Insuffisance pondérale"
                break;
            case imc < 25:
                resultat.innerHTML += " : Corpulence normale"
                break;
            case imc < 30:
                resultat.innerHTML += " : Surpoids"
                break;
            case imc < 35:
                resultat.innerHTML += " : Obésité modérée"
                break;
            case imc < 40:
                resultat.innerHTML += " : Obésité sévère"
                break;
            case imc > 40:
                resultat.innerHTML += " : Obésité morbide"
                break;
            default:
                break;
        }
    }
}