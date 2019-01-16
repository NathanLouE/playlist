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
    "", "https://i.ytimg.com/vi/3o0r584PYck/maxresdefault.jpg", "https://i.ytimg.com/vi/sdDiHZiBtpE/maxresdefault.jpg"];
var artists=["Camila Cabello", 
    "Lyn Inaizumi", 
    "Getter Jaani", 
    "Kero Kero Bonito", 
    "Lyn Inaizumi"];
var lengths=["219", "235", "197", "149", "310"];
var links=["https://www.youtube.com/watch?v=HCjNJDNzw8Y", 
    "https://www.youtube.com/watch?v=Ax9V_JtZO6A",
    "https://www.youtube.com/watch?v=hjGZLnja1o8",
    "https://www.youtube.com/watch?v=rY-FJvRqK0E",
    "https://www.youtube.com/watch?v=jaIo82uT0qs"];




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
        $("#artists").append("<p>" + people + "</p>");
    });
    
    lengths.forEach(function(secs){
        $("#lengths").append("<p>" + secs + "</p>")
    });
    
    links.forEach(function(links) {
        var url = `<a href="${links}"> Check it out!</a>`;
        $("#links").append(url);
    })
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo(){
    var songName = $("#song").val();
    songs.push(songName);
    // BELOW write the code to add new items to each of the other arrays
    var img = $("#artist").val();
    images_urls.push(img);
    
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
