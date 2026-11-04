/* Waitlist forms. TODO: send the email to the real backend (e.g. a Supabase "waitlist" table). */
document.querySelectorAll("[data-join]").forEach(function(form){
  form.addEventListener("submit",function(e){
    e.preventDefault();
    var note=form.parentElement.querySelector(".note");
    note.textContent="Request received. We’ll be in touch.";
    form.querySelector("input").value="";
  });
});
