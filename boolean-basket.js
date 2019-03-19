


function getPlayerbyId(id, players){

var player;
   for (var i = 0; i < players.length; i++) {
     if (players[i].id == id) {
      player = players[i];
     }
   }
return player;

}


function  getRandomPlayers() {



    $.ajax({
      url : "https://www.boolean.careers/api/array/basket?n=17",
      method : "GET",
      success: function(data, state) {

       if (data.success) {

         var players = data.response;
         console.log(players);
       }




    },
    error: function(request, state, error) {
      console.log("request", request)
      console.log("state", state)
      console.log("error", error)
    }

  });

return players;
}



function updateUI(players) {

var datalist = $('#players');


  for (var i = 0; i < players.length; i++) {



    option =document.createElement("option");
    option.value = players[i].id;


    datalist.append(option);

  }


}

function clearClick() {
  var input = $('#usr-input');
  input.val("");

  idDOM =$('#id');
  idPoints = $('#points > span.content');
  idBounce = $('#bounce > span.content');
  idMistake = $('#mistake > span.content');
  idTwoPerc = $('#twoPerc > span.content');
  idThreePerc = $('#threePerc > span.content');

  idDOM.text(player.id);
  idPoints.text(player.points);
  idBounce.text(player.bounce);
  idMistake.text(player.mistake);
  idTwoPerc.text(player.twoPerc);
  idThreePerc.text(player.threePerc);
}

function playerSelection(players, me) {

 var pickedId = me.val();

 var player = getPlayerbyId(pickedId, players);

 idDOM =$('#id > span.content');
 idPoints = $('#points > span.content');
 idBounce = $('#bounce > span.content');
 idMistake = $('#mistake > span.content');
 idTwoPerc = $('#twoPerc > span.content');
 idThreePerc = $('#threePerc > span.content');

 idDOM.text(player.id);
 idPoints.text(player.points);
 idBounce.text(player.bounce);
 idMistake.text(player.mistake);
 idTwoPerc.text(player.twoPerc);
 idThreePerc.text(player.threePerc);
}





function init() {


var players = getRandomPlayers();
updateUI(players);
var clearButton = $('#clear-btn');
clearButton.click(clearClick);

var input = $('#usr-input');
input.on("change" , function() {

var me = $(this);
playerSelection(players, me);

});
}


$(document).ready(init);
