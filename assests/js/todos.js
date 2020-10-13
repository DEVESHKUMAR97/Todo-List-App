// check off specific todos by clicking
// $("li").on("click", function(){
//     $(this).toggleClass("completed");
// });

$("ul").on("click", "li", function(){  // because jQuery add listeners only to existing elements when the first time this code is running
    $(this).toggleClass("completed");
});

// click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(100, function(){
        $(this).remove();
    });

    event.stopPropagation(); /// to stop event bubbling
});

$("input[type='text']").on("keypress", function(event){
    if(event.which === 13){
        // grabbing new todo text from input
        var new_todo_text = $(this).val();

        // making empty input
        $(this).val("");

        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + new_todo_text + "</li>");
    }
});


$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
})

$(function(){
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});