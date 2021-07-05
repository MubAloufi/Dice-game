// for dice number 1
var asd  = Math.floor(Math.random() * 6 + 1); // ماث دوت راندوم من 1 الى 6
var q1 = "images/dice"+ asd +".png"; //نحط اسم الصوره اللي نبغاها
var img1 = document.querySelectorAll("img")[0];// اخذنا كل الصور بعدين حددنا اول صوره بالكود
img1.setAttribute("src" ,q1 ); // طريقة اعادة كتابة الصوره ب الجافا سكريبت

// for dice number 2
var asd1  = Math.floor(Math.random() * 6 + 1 );
var q2 = "images/dice"+ asd1 +".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src" ,q2 );



// who won

if(asd == asd1){
   document.querySelector("h1").innerHTML = "Draw!";  // طريقة اعادة الكتاب ب الاتش ون 

}else if (asd > asd1){
  document.querySelector("h1").innerHTML = "Player 1 wins!";

}else{
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
