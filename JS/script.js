const toggleButton = document.getElementById('toggleButton');
const naviList = document.getElementById('navi-list');

toggleButton.addEventListener('click', () =>{
    naviList.classList.toggle('active');
})

$(document).ready(function(){
    $(".mars").mouseenter(function(){
        $(".mars").animate({
            width: '425px',
            
        }, 500);
    })
    $(".mars").mouseleave(function(){
        $(".mars").animate({
            width: "378px",
        }, 100);
    })
})

$(document).ready(function(){
    $(".food").mouseenter(function(){
        $(".food").animate({
            width: '425px',
            
        }, 500);
    })
    $(".food").mouseleave(function(){
        $(".food").animate({
            width: "300px",
        }, 100);
    })
})

$(document).ready(function(){
    $(".doe").hover(function(){
        $(".doe").animate({
            width: '425px',
            
        }, 500);
    })
    $(".doe").mouseleave(function(){
        $(".doe").animate({
            width: "378px",
        }, 100);
    })
   
})