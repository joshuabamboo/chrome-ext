// document.body.innerHTML = document.body.innerHTML.replace(new RegExp(/Hello/ig, "g"), "yo");

var replaced = $("body").html().replace(/barack obama/ig,'A Pimp Named Slickback');
$("body").html(replaced);