$(function () {
    // display list

    function updateList(data) {
        let htmlList = data.map(function (games) {
            return '<li>' + new Date(games.created).toLocaleString() + ' ' + games.gamePlayers.map(function (p) {
                return p.player.email
            }).join(', ') + '</li>';
        }).join('');
        document.getElementById("game-list").innerHTML = htmlList;
    }

    // load and display JSON sent by server for /api/games

    function loadData() {
        $.get("/api/games")
            .done(function (data) {
                updateList(data);
            })
            .fail(function (jqXHR, textStatus) {
                alert("Failed: " + textStatus);
            });
    }

    let searchParams = new URLSearchParams(window.location.search);
    if(!localStorage.getItem("token")) {
        let token = searchParams.get('token')
        if(!token){
            window.location.replace("http://localhost:8080/web/login.html")
        } else {
            localStorage.setItem("token", token);
        }
    }
    $.ajaxSetup({
        headers:{
            'Authorization': localStorage.getItem("token")
        }
    });
    loadData();
});