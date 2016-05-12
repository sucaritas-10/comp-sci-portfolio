
//this is to add the suff to the website 
var soccerball = document.getElementById("item1");
var pup = document.getElementById("item2");
var games = document.getElementById("item3");
var movies  = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");

// this is a pic of a soccer ball in the page 
soccerball.addEventListener("click", function(){
    info1.innerHTML = "<li>the world cup soccer ball</li> <li>its the 2014 soccer ball world cup.</li><li>the last teams that play this was two really good teams</li>";
});

// this is a a tiger a pic of a pup        
pup.addEventListener("click", function(){
    info1.innerHTML = "<li>his cute </li> <li> it eats a lot of food for a pup</li> <li>he has no mom or dad people take care of him</li> ";
    
});

//this a pic aof a game 
games.addEventListener("click", function(){
     info1.innerHTML = "<li>have fun </li> <li> you can play all day</li> <li>talk to your friends online</li> ";
     
});

//this a pic of of movies 
movies.addEventListener("click", function(){
     info1.innerHTML = "<li>to see whats good and new</li> <li>be with family and have a good time</li> <li>be with friends</li> ";
});