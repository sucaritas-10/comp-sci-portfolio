var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");

item1.addEventListener("click", function(){
    info1.innerHTML = "<li>the world cup soccer ball</li> <li>its the 2014 soccer ball world cup.</li><li>the last teams that play this was two really good teams</li>";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "<li>his cute </li> <li> it eats a lot of food for a pup</li> <li>he has no mom or dad people take care of him</li> ";
    
});

item3.addEventListener("click", function(){
     info1.innerHTML = "<li>have fun </li> <li> you can play all day</li> <li>talk to your friends online</li> ";
     
});
item4.addEventListener("click", function(){
     info1.innerHTML = "<li>to see whats good and new</li> <li>be with family and have a good time</li> <li>be with friends</li> ";
});