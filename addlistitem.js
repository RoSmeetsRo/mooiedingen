// De volgende functie voegt list items toe aan een ul gemaakt in index.html.
// ps: Het is een het stappenplan om groentesoep te maken.

function addLiElement(step, text){
    var ul = document.getElementsByClassName('recipe'); // hier halen we de class recipe op en deze declareren we
    var li = document.createElement('li');              // declaratie create element van list item in unordered list
    li.classList.add(step);                             // met deze regel adden we een class per step/list item (step3, 4, 5 enz.)
    li.innerHTML = text;                                // hier voeren we tekst in voor het list item
    ul[0].appendChild(li);                              // hier plaatsen we het item onderaan de unordered list
}
    // nu we de functie hebben gemaakt moeten we nog wel listitems toevoegen naar onze eigen wens
    // hieronder voegen we de stappen/listitems toe aan de unordered list.

addLiElement('step3', 'Doe het bouillonblokje in het water');
addLiElement('step4', 'Wacht tot het water kookt');
addLiElement('step5', 'Doe de balletjes in het water');
addLiElement('step6', 'Laat de balletjes een uur koken');
addLiElement('step7', 'Doe de soepgroente erbij');
addLiElement('step8', 'Laat 15 minuten koken');
addLiElement('step9', 'En serveren maar!');






