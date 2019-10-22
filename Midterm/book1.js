// let container = document.getElementById('container');
// let items = container.getElementsByClassName("gallery-item");
// let popout = document.getElementById("popout");
// for(let i = 0; i < items.length; i++){
    
//     items[i].addEventListener('click',function()
//     {

//         console.log("item clicked");

//         if(popout.style.display === 'block')
//         {
//             popout.style.display = 'none';
//         }
//         else{
//             popout.style.display = 'block';
//         }
//     });
// }



let bioPage = document.getElementById("bio-resume-page");

bioPage.addEventListener("click", function() {

    bioPage.style.display = "block";

});