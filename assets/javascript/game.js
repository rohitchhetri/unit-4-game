//connecting javascript 
//alert("Javascript Connected");

// Variable Define 
var totalScore = 0;
var wincount = 0;
var lossescount = 0;

// Generating Random Value and assigning on variable randomValue between 19 - 120 
var randomValue = Math.floor((Math.random() * 120) + 19);
//console.log(randomValue);
$("#rndValue").text(randomValue);

//each crystal image need to store the random value between 1-12  
var crystal1 = Math.floor(Math.random() * 12) + 1;
//Selecting the ID of Div and Inserting the images and inserting the value
$("#crystal-image1").html("<img src=" + "./assets/images/crystal1.png" + " value=" + crystal1 + ">");

var crystal2 = Math.floor(Math.random() * 12) + 1;
//Selecting the ID of the images and inserting the value
$("#crystal-image2").html("<img src=" + "./assets/images/crystal2.png" + " value=" + crystal2 + ">");


var crystal3 = Math.floor(Math.random() * 12) + 1;
//Selecting the ID of the images and inserting the value
$("#crystal-image3").html("<img src=" + "./assets/images/crystal3.png" + " value=" + crystal3 + ">");


var crystal4 = Math.floor(Math.random() * 12) + 1;
//Selecting the ID of the images and inserting the value
$("#crystal-image4").html("<img src=" + "./assets/images/crystal4.png" + " value=" + crystal4 + ">");


//on click function for image elements of html 

$("img").on("click", function () {

    var crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);
    //console.log(this);
    //debugger;
    //console.log("New Score: " + crystalValue);
    totalScore += crystalValue;
    //console.log(totalScore);

    $("#userscore").text(totalScore);

    // Win - Lose Logic Applies Here. 

    if (totalScore === randomValue) {

        wincount++;
        $("#wins").text(wincount);
        reset();

        //alert("Yeah You Win!");
    }

    else if (totalScore >= randomValue) {

        //alert("You lose Game ");
        lossescount++;
        $("#losses").text(lossescount);
        reset();
    }
    //alert("Click Value :" + this() ); 

});

// Once Player Lose or Win It will reset the totalScore value = 0 
//  reset function 
function reset() {

    totalScore = 0;
    //console.log(totalScore);
    $("#userscore").text(totalScore);

    // Generating Random Value and assigning on variable randomValue between 19 - 120 
    var randomValue = Math.floor((Math.random() * 120) + 19);
    //console.log(randomValue);
    $("#rndValue").text(randomValue);

    //each crystal image need to store the random value 

    var crystal1 = Math.floor(Math.random() * 12) + 1;
    console.log("CrystalImage 1:" + crystal1);
    //Selecting the ID of the images and inserting the value
    $("#crystal-image1").html("<img src=" + "./assets/images/crystal1.png" + " value=" + crystal1 + ">");

    var crystal2 = Math.floor(Math.random() * 12) + 1;
    console.log("CrystalImage 2:" + crystal2);
    //Selecting the ID of the images and inserting the value
    $("#crystal-image2").html("<img src=" + "./assets/images/crystal2.png" + " value=" + crystal2 + ">");


    var crystal3 = Math.floor(Math.random() * 12) + 1;
    console.log("CrystalImage 3:" + crystal3);
    //Selecting the ID of the images and inserting the value
    $("#crystal-image3").html("<img src=" + "./assets/images/crystal3.png" + " value=" + crystal3 + ">");


    var crystal4 = Math.floor(Math.random() * 12) + 1;
    console.log("CrystalImage 4:" + crystal4);
    //Selecting the ID of the images and inserting the value
    $("#crystal-image4").html("<img src=" + "./assets/images/crystal4.png" + " value=" + crystal4 + ">");


    $("img").on("click", function () {

        var crystalValue = ($(this).attr("value"));

        //converting string value to numerical 
        crystalValue = parseInt(crystalValue);

        $("#userscore").text(totalScore);

        totalScore += crystalValue;
        console.log(totalScore);

        // Win - Lose Logic Applies Here. 

        if (totalScore === randomValue) {

            wincount++;
            $("#wins").text(wincount);
            reset();
        }

        else if (totalScore >= randomValue) {

            //alert("You lose Game ");
            lossescount++;
            $("#losses").text(lossescount);
            reset();
        }
    });
}
