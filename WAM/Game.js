var imgChibi = ['../Images/Chibis/KanekiChibi.png', '../Images/Chibis/ToukaChibi.png', '../Images/Chibis/HideChibi.png', '../Images/Chibis/UtahChibi.png'];  
var randomImage=Math.floor(Math.random()*imgChibi.length);  
document.addEventListener('DOMContentLoaded',function(){  
document.getElementById('imgChibi').innerHTML=  "<img src ='"+ imgChibi[randomImage] +"' />";
},false); 