//declaring the number for first die

var randomNum1 = Math.floor(Math.random()* 6) + 1; // making sure our number is from 0 - 6

var randomImgSrc1 = "assets/images/dice " + randomNum1 + ".png"; // obtaining the name of our 

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc1);


//declaring the number for second die 
var randomNum2 = Math.floor(Math.random()* 6) + 1; // making sure our number is from 0 - 6

var randomImgSrc2 = "assets/images/dice " + randomNum2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);




// if - else statements

if (randomNum1 > randomNum2) { // if first die number is greater than second die number
    document.querySelector("h2").innerHTML = "Player 1 Won!";
}

    else if (randomNum1 < randomNum2) { // if second die number is greater than first die number
        document.querySelector("h2").innerHTML = "Player 2 Won!";

    } 

        else{ // only other option left which is if both number of die were equal
            document.querySelector("h2").innerHTML = "We have a draw!"
        } 



      


