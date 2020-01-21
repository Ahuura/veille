//fonction pour la navbar
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 
var navbar =
    '<div class="topnav">' +
      '<a href="index.html" class="active">Veille Technologique</a>' +
      '<div id="myLinks">' +
        '<a href="index.html">Accueil</a>' +
      '</div>' +
      '<a href="javascript:void(0);" class="icon" onclick="myFunction()">' +
        '<i class="fa fa-bars"></i>' +
      '</a>' +
    '</div>' ;
$("#navbar").append(navbar)



//récupération donnée airtable
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyL4KoNTaCErNwZv'
});
var base = Airtable.base('appk4MJHsoLhECKyi');



function initAirtable() {
    base('Veille').select({
           maxRecords: 300000,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
                records.forEach(function (record) {
            //template pour la liste des veilles
            var liste =
                '<div class=" row listage mt-2" data-id="###veilleId###">' +
                '<div class=" col">' +
                '<div class=" image" >' +
                '<img class="label" id="imgListe" src="###imgListe###"  ><br>' +
                '</div>' +
                '</div>' +
                '<div class=" col">' +
                '<div class="date">###date###</div>' +
                '</div>' +
                '<div class=" col">' +
                '<div class="sujet">###sujet###</div>' +
                '</div>' +
                '<div class=" col">' +
                '<div class="detail">' +
                '<button onclick="setStorage(\'###veilleId###\')" class="btn btn-dark   "> Plus de détail ici</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<br>';
                
            var img1 = record.get("Image")
            img1 = img1[0].url
                
            var allListe = "";
            allListe = liste.replace("###sujet###", record.get("Sujet"));
            allListe = allListe.replace("###date###", record.get("Date"));
            allListe = allListe.replace("###imgListe###", img1);
            allListe = allListe.replace(/###veilleId###/gi, record.id);
           
            $("#liste").append(allListe);

        });
        fetchNextPage();

    }, function done(err) {
        if (err) {
            console.error(err);
            return;
        }
    });
}
initAirtable()



//
function setStorage(index) {
    console.log("index", index);
    localStorage.setItem("id", index);
    window.location = "detail.html";

}