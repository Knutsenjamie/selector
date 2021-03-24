$(document).ready(function() {
  $("form#select").submit(function(event) {
    event.preventDefault();
    const beverage = $("#beverage").val();

    $("#output").text(beverage);

    
    
    
  });
});
