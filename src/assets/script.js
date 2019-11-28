$(function () {
  $("input[type='checkbox']").on("change", function() {
     if ($(this).prop("checked") == true) {
         alert('checkbox is checked');
     } //end if
     else {
         alert('checkbox is unchecked');
     }
  });  // end on change
}); // end $
