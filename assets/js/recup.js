$(document).ready(function(){
    

    setTimeout(function(){
        var monStockage = localStorage.getItem("id")
        afficherVeille(monStockage)
    }, 1000);
    
})


function afficherVeille(veilleId){
        
    base('Veille').find(veilleId, function(err, record) {
        var date = record.get("Date");
        date = date.split('-');
        date = date.reverse();
        date = date.join('-');
        var img = record.get("Image")
        img = img[0].url

        $("#img").find("img").attr("src",img);
        $("#date").html(record.get("Date"));
        $("#sujet").html(record.get("Sujet"));
        $("#synthese").html(record.get("Synthèse"));
        $("#commentaire").html(record.get("Commentaire"));
        $("#lien").html(record.get("Liens"));


               

               if (err) { console.error(err); return; }
               console.log('Retrieved', record.id);
           })
        };
