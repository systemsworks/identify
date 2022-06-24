<script>
var displayname;


function identify_form_form_change() {
      displayname = getValueFromInput("displayname");


      $('#displayname').text(displayname);
}

  $("[data-name=identify-form] input").on("input", function () {
    identify_form_form_change();
  });

  var clickedRadioButtonValue = $("input", this).val();

$("[data-name=identify-form] label.w-radio").on("click", function () {
  clickedRadioButtonValue = $("input", this).val();
  identify_form_form_change();
});

</script>

