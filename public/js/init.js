
$(document).ready(() => {
  $('.button-collapse').sideNav();
});

$('.datepicker').pickadate({
  selectMonths: true, // Creates a dropdown to control month
  selectYears: 15, // Creates a dropdown of 15 years to control year,
  today: 'Today',
  clear: 'Clear',
  close: 'Ok',
  closeOnSelect: false // Close upon selecting a date,
});

$('.timepicker').pickatime({
  default: 'now', // Set default time: 'now', '1:30AM', '16:30'
  fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
  twelvehour: false, // Use AM/PM or 24-hour format
  donetext: 'OK', // text for done-button
  cleartext: 'Clear', // text for clear-button
  canceltext: 'Cancel', // Text for cancel-button
  autoclose: false, // automatic close timepicker
  ampmclickable: true, // make AM PM clickable
  aftershow: function () { } //Function for after opening timepicker
});

$(document).ready(function () {
  $('select').material_select();
});

$(document).ready(function () {
  $('.tooltipped').tooltip({ delay: 50 });
});

// checkFrom option
$('#other').hide();
$('#checkFrom').change(function () {
  var selected = $(this).val();
  if (selected == '3') {
    $('#other').fadeIn();
  }
  else {
    $('#other').fadeOut();
  }
});
// checkFrom (Edit Form1)
var selected = $('#checkFrom').val();
if (selected == '3') {
  $('#other').fadeIn();
}
else {
  $('#other').fadeOut();
}



// Family Hx Other (checkbox)
$('#family-other').hide();
$('#filled-in-box7').change(function () {
  if ($('#filled-in-box7').is(':checked')) {
    $('#family-other').fadeIn();
  } else {
    $('#family-other').fadeOut();
  }
});
if ($('#filled-in-box7').is(':checked')) {
  $('#family-other').show();
} else {
  $('#family-other').hide();
}

// Personal Hx (checkbox)
$('#personal-smoke').hide();
$('#personal-alcohol').hide();
$('#personal-drug').hide();
$('#personalhx-1').change(function () {
  if ($('#personalhx-1').is(':checked')) {
    $('#personal-smoke').fadeIn();
  } else {
    $('#personal-smoke').fadeOut();
  }
});
$('#personalhx-2').change(function () {
  if ($('#personalhx-2').is(':checked')) {
    $('#personal-alcohol').fadeIn();
  } else {
    $('#personal-alcohol').fadeOut();
  }
});
$('#personalhx-3').change(function () {
  if ($('#personalhx-3').is(':checked')) {
    $('#personal-drug').fadeIn();
  } else {
    $('#personal-drug').fadeOut();
  }
});

// Personal Hex Checkboxes (Edit)
if ($('#personalhx-1').is(':checked')) {
  $('#personal-smoke').show();
} else {
  $('#personal-smoke').hide();
}

if ($('#personalhx-2').is(':checked')) {
  $('#personal-alcohol').show();
} else {
  $('#personal-alcohol').hide();
}

if ($('#personalhx-3').is(':checked')) {
  $('#personal-drug').show();
} else {
  $('#personal-drug').hide();
}

// Review System
$('#heent-other').hide();
$('#HEENT').change(function () {
  var selected = $(this).val();
  if (selected == 'ระบุ') {
    $('#heent-other').fadeIn();
  }
  else {
    $('#heent-other').fadeOut();
  }
});
if ($('#HEENT').val() == 'ระบุ') {
  $('#heent-other').show();
}
else {
  $('#heent-other').hide();
}

$('#respiratory-other').hide();
$('#Respiratory').change(function () {
  var selected = $(this).val();
  if (selected == 'ระบุ') {
    $('#respiratory-other').fadeIn();
  }
  else {
    $('#respiratory-other').fadeOut();
  }
});
if ($('#Respiratory').val() == 'ระบุ') {
  $('#respiratory-other').show();
}
else {
  $('#respiratory-other').hide();
}

$('#cardio-other').hide();
$('#Cardiovascular').change(function () {
  var selected = $(this).val();
  if (selected == 'ระบุ') {
    $('#cardio-other').fadeIn();
  }
  else {
    $('#cardio-other').fadeOut();
  }
});
if ($('#Cardiovascular').val() == 'ระบุ') {
  $('#cardio-other').show();
}
else {
  $('#cardio-other').hide();
}

$('#gastro-other').hide();
$('#Gastrointestital').change(function () {
  var selected = $(this).val();
  if (selected == 'ระบุ') {
    $('#gastro-other').fadeIn();
  }
  else {
    $('#gastro-other').fadeOut();
  }
});
if ($('#Gastrointestital').val() == 'ระบุ') {
  $('#gastro-other').show();
}
else {
  $('#gastro-other').hide();
}

$('#genito-other').hide();
$('#Genito').change(function () {
  var selected = $(this).val();
  if (selected == 'ระบุ') {
    $('#genito-other').fadeIn();
  }
  else {
    $('#genito-other').fadeOut();
  }
});
if ($('#Genito').val() == 'ระบุ') {
  $('#genito-other').show();
}
else {
  $('#genito-other').hide();
}

$('#gynecological-other').hide();
$('#Gynecological').change(function () {
  var selected = $(this).val();
  if (selected == 'ระบุ') {
    $('#gynecological-other').fadeIn();
  }
  else {
    $('#gynecological-other').fadeOut();
  }
});
if ($('#Gynecological').val() == 'ระบุ') {
  $('#gynecological-other').show();
}
else {
  $('#gynecological-other').hide();
}

$('#neurology-other').hide();
$('#Neurology').change(function () {
  var selected = $(this).val();
  if (selected == 'ระบุ') {
    $('#neurology-other').fadeIn();
  }
  else {
    $('#neurology-other').fadeOut();
  }
});
if ($('#Neurology').val() == 'ระบุ') {
  $('#neurology-other').show();
}
else {
  $('#neurology-other').hide();
}

$('#other-other').hide();
$('#Other').change(function () {
  var selected = $(this).val();
  if (selected == 'ระบุ') {
    $('#other-other').fadeIn();
  }
  else {
    $('#other-other').fadeOut();
  }
});
if ($('#Other').val() == 'ระบุ') {
  $('#other-other').show();
}
else {
  $('#other-other').hide();
}



$("#success_msg")
  .delay(2000)
  .slideUp();

$("#error_msg")
  .delay(2000)
  .slideUp();

$("#error")
  .delay(2000)
  .slideUp();

$("#errors")
  .delay(2000)
  .slideUp();

$(document).ready(function () {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

function printForm() {
    window.print();
}