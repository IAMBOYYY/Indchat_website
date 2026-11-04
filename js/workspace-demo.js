/* Approve / Revert demoin the workspace preview */
document.querySelectorAll(".acts button").forEach(function(btn){
  btn.addEventListener("click",function(){
    var acts=btn.parentElement;
    acts.previousElementSibling.textContent=btn.dataset.act+" just now";
    acts.remove();
  });
});
