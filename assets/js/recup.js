$(document).ready(function(){
    

    setTimeout(function(){
        var monStockage = localStorage.getItem("id")
        afficherVeille(monStockage)
    }, 1000);
    
})


function afficherVeille(veilleId){
        
    base('Veille').find(veilleId, function(err, record) {
       
        //$("#img").html(record.get(""));
        $("#date").html(record.get("Date"));
        $("#sujet").html(record.get("Sujet"));
        $("#synthese").html(record.get("Synthèse"));
        $("#commentaire").html(record.get("Commentaire"));
        $("#lien").html(record.get("Liens"));


               

               if (err) { console.error(err); return; }
               console.log('Retrieved', record.id);
           })
        };
