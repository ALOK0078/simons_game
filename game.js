var buttoncolours = [ "red","yellow","green","blue"];
var userClickpattern =[];
var started = false;
var level = 0;

var gamePattern=[];

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+ level);
        nextsequence();
        started= true;
        }

});
function checkanswer(currentlevel){
    if (gamePattern[currentlevel]==userClickpattern[currentlevel]) {
        console.log("sucess");
    
    
    if (userClickpattern.length==gamePattern.length) {
        setTimeout(function () {
            nextsequence();
          }, 1000);
        
    }}
    else{
        console.log("wrong");
        playsound("wrong")
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
            
        },200);
        $("#level-title").text("Game over press any key to start again");
        startover();

    }

}
function startover(){
   
        level = 0;
        gamePattern=[];
        started=false;
        
    
}
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickpattern.push(userChosenColour);
    playsound(userChosenColour);
    animatepress(userChosenColour);
    checkanswer(userClickpattern.length-1);

});
function nextsequence(){
    userClickpattern=[];
    level++;
    $("#level-title").text("Level "+ level);
    var n = Math.random();
    n=n*3;
    var randomNumber= Math.floor(n)+1;
    var randomchosenColour=buttoncolours[randomNumber];
    gamePattern.push(randomchosenColour);
    $("#"+randomchosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomchosenColour);
}
function playsound(name) {
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
    
}
function animatepress(currentcolour){
    $("#"+currentcolour).addClass("pressed");


setTimeout(function () {
    $("#" + currentcolour).removeClass("pressed");
  }, 100);}
