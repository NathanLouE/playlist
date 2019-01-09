/* global $ */

// BELOW Update the songs to your favorites songs. There should be at least 4.
var songs = ["Havana",
    "Last Surprise(Persona 5)",
    "Rockefeller Street(Nightcore Version)",
    "Flamingo",
    "Rivers in the Desert(Persona 5)"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above

var images_urls=["http://d1lofqbqbj927c.cloudfront.net/exa/2018/01/23091006/290241501786508-300x300.jpg",
    "https://i.ytimg.com/vi/aZZvTzdTurA/maxresdefault.jpg",
    ""];
var artists=["Camila Cabello", 
    "Lyn Inaizumi", 
    "Getter Jaani", 
    "Kero Kero Bonito", 
    "Lyn Inaizumi"];
var lengths=[];
var links=[];




function displaySongInfo(){
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    images_urls.forEach(function(img) {
        var url = `<img src= ${img}>`;
        $("#images").append(url);
    });
    
    artists.forEach(function(people) {
        $("#artist").append(people);
    });
    
    lengths.forEach(function(secs){
        $("#length").append(secs)
    });
    
    links.forEach(function(links) {
        var url = `<a href ${links} >`;
        $("#link").append(url);
    })
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    var songName = $("#song").val();
    songs.push(songName);
    // BELOW write the code to add new items to each of the other arrays


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
