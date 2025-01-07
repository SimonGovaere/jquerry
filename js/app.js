// javascript natif

//const elements = document.querySelectorAll('#javascript-list li')
//
//elements.forEach(element => {
//    element.textContent = "javascript";
//});

//document.querySelector("#javascript-list li:nth-child(2)").addEventListener("click", function(){ alert("javascript natif!"); });

let display = true;

document.querySelector('#btn-js').addEventListener('click',function(){
    if(display){
        document.querySelector('#carre').style.display = 'none'
    }else {
        document.querySelector('#carre').style.display = 'block'
    }
    display =!display;
});

// jquery

//$("#jquery-list li").text("jquery");

//$('#jquery-list li:nth-child(2)').css("cursor", "pointer").on("click", function(){ alert("jquery!"); });

$('#btn-jquery').on('click', function(){
    $('#carre').toggle("slow");
});

