//récupération donnée airtable
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyL4KoNTaCErNwZv'
});
var base = Airtable.base('appk4MJHsoLhECKyi');



function initAirtable() {

    base('Veille').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 300000,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
            // console.log('Retrieved', record.get('Date'));

            //template pour la liste des veilles
            var liste =
                '<div class=" row">' +
                '<div class=" col-1">' +
                '<div class="label" data-id="###veilleId###" >Sujet : </div>' +
                '</div>' +
                '<div class=" col-9">' +
                '<div class="sujet">###sujet###</div>' +
                '</div>' +
                '<div class=" col-2">' +
                '<div class="detail">' +
                '<button onclick="setStorage(\'###veilleId###\')" class="btn btn-danger"> Plus de détail ici</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<br>';

            var allListe = "";
            allListe = liste.replace("###sujet###", record.get("Sujet"));
            // allListe = allListe.replace(/###veilleId###/gi, record.getId());
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

var date = "2020-01-17";
date = date.split('-');
date = date.reverse();
date = date.join('-');

//
function setStorage(index) {
    console.log("index", index);
    localStorage.setItem("id", index);
    window.location = "detail.html";

}