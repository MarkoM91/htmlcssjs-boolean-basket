var players;

function getPlayerbyId(id, players){

    var player;
    for (var i = 0; i < players.length; i++) {

        if (players[i].playerCode == id) {

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

                 players = data.response;
                 updateUI(players)
            } else {

                alert("Errore");
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

        var option = document.createElement("option");

        option.value = players[i].playerCode;

        option.innerHTML =  players[i].playerCode;

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

    idDOM.text(player.playerCode);
    idPoints.text(player.points);
    idBounce.text(player.rebounds);
    idMistake.text(player.fouls);
    idTwoPerc.text(player.twoPoints);
    idThreePerc.text(player.threePoints);
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

    idDOM.text(player.playerCode);
    idPoints.text(player.points);
    idBounce.text(player.rebounds);
    idMistake.text(player.fouls);
    idTwoPerc.text(player.twoPoints);
    idThreePerc.text(player.threePoints);
}


function sidebarShow() {

    var sidebar = $(".sidebar");
    sidebar.addClass("active");

 setTimeout(function() {
   sidebar.removeClass("active");
 }, 12000)
}


function init() {

    getRandomPlayers();
    var clearButton = $('#clear-btn');
    clearButton.click(clearClick);

    var input = $('#usr-input');
    input.on("change" , function() {
        var me = $(this);
        playerSelection(players, me);

    });
    var container = $(".container");
    container.click(sidebarShow);
}


$(document).ready(init);
