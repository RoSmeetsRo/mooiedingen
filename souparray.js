// Hieronder declareer ik soupCollection en voeg ik daar een array aan toe
// Deze array heet "soups" en bevat de namen & voornamelijkste ingredienten van verschillende soepen
// De namen van de soepen console log ik en deze komen hier dus ook weer tevoorschijn.

var soupCollection = {
    "soups": [
        {
            "name": "Groentesoep",
            "ingredient": "Groente"
        },
        {
            "name": "Kippensoep",
            "ingredient": "Kip"
        },
        {
            "name": "Tomatensoep",
            "ingredient": "Tomaat"
        },
        {
            "name": "Franse uiensoep",
            "ingredient": "uien"
        },
        {
            "name": "Goulashsoep",
            "ingredient": "Goulash"
        },
    ]
};

for (var i = 0; i < soupCollection.soups.length; i++) {     // voor alle soepen uit array 'soups'
    console.log(soupCollection.soups[i].name);              // console log alle namen van de soepen in array soups
}