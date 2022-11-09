let onSuccess= function(data){
    console.log("lllll")
    $("img").attr("src",data.massage)
};
let onError= function(){
    console.log("non va!!")
};
let onsubmit= function(event){
   console.log("submit")
   event.preventDefault();
   $.getJSON("https://dog.ceo/api/"+$("#razza").val()+"/image/random")
   .done(onSuccess)
   .fail(onError);
};
$("form").submit(onsubmit);