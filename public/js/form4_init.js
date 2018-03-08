const name = document.getElementById('name');
const age = document.getElementById('age');
const HN = document.getElementById('HN');
const Ward = document.getElementById('Ward');
const OPD = document.getElementById('OPD');
const ER = document.getElementById('ER');
const wardInput = document.getElementsByName('wardInput');
const equipmentOther = document.getElementsByName('equipmentOther');
const transportOther = document.getElementsByName('transportOther');
const bringOther = document.getElementsByName('bringOther');
const genetics = document.getElementsByName('genetics');
const geneticsOther = document.getElementsByName('geneticsOther');
const anyMedication = document.getElementsByName('anyMedication');
const anyMedicationOther = document.getElementsByName('anyMedicationOther');
const medicalProblems = document.getElementsByName('medicalProblems');
const medicalProblemsOther = document.getElementsByName('medicalProblemsOther');
const surgicalHistory = document.getElementsByName('surgicalHistory');
const surgicalHistoryOther = document.getElementsByName('surgicalHistoryOther');
const medicationHistory = document.getElementsByName('medicationHistory');
const medicationHistoryOther = document.getElementsByName('medicationHistoryOther');

if(name != undefined){
  name.addEventListener('keyup', autoName);
}
if(age != undefined){
  age.addEventListener('keyup', autoAge);
}
if(HN != undefined){
  HN.addEventListener('keyup', autoHN);
}
if(wardInput[0] != undefined){
  wardInput[0].addEventListener('keyup', autoWard);
}

// Auto type lower Name, Age, HN, Ward 
function autoName(e) {
  const text = e.target.value;
  document.getElementsByName('name')[1].value = text;
}
function autoAge(e) {
  const text = e.target.value;
  document.getElementsByName('age')[1].value = text;
}
function autoHN(e) {
  const text = e.target.value;
  document.getElementsByName('HN')[1].value = text;
}
function autoWard(e) {
  const text = e.target.value;
  wardInput[1].value = text;
}

// Show/Hide wardInput if checked/unchecked
if (Ward.checked == true) {
  $('#wardInput').show();
} else {
  $('#wardInput').hide();
}
    // Show wardInput when Ward checked
    $('#Ward').change(function () {
      if (Ward.checked == true) {
        $('#wardInput').fadeIn();
      }
    });


// Hide wardInput when OPD or ER selected & rest wardInput value
$('#OPD').change(function () {
  if (OPD.checked == true) {
    $('#wardInput').fadeOut();
    wardInput[0].value = "";
    wardInput[1].value = "";
  }
});
$('#ER').change(function () {
  if (ER.checked == true) {
    $('#wardInput').fadeOut();
    wardInput[0].value = "";
    wardInput[1].value = "";
  }
});

// Show equipmentOther when equip4 selected
if ($('#equip4').is(':checked')) {
  $('#equipmentOther').show();
} else {
  $('#equipmentOther').hide();
}
    // Hide & Reset equipmentOther when equip4 is not selected 
    $('#equip4').change(function () {
      if ($('#equip4').is(':checked')) {
        $('#equipmentOther').fadeIn();
      } else {
        $('#equipmentOther').fadeOut();
        equipmentOther[0].value = "";
      }
    });

$('#transportOther').hide();
// Show transportOtherInput when transportOther selected
$('#transport').change(function () {
  var selected = $(this).val();
  if (selected == 'อื่นๆ') {
    $('#transportOther').fadeIn();
  }
  else {
    $('#transportOther').fadeOut();
    transportOther[0].value = "";
  }
});

// Show/Hide bringOther if checked/unchecked
if ($('#bring').is(':checked')) {
  $('#bringOther').show();
} else {
  $('#bringOther').hide();
}
    // Show bringOther when bring is selected
    $('#bring').change(function () {
      if ($('#bring').is(':checked')) {
        $('#bringOther').fadeIn();
      }
    });
        //  Hide and Reset value bringOther when dontBring is selected
        $('#dontBring').change(function () {
          if ($('#dontBring').is(':checked')) {
            $('#bringOther').fadeOut();
            bringOther[0].value = "";
          }
        });

// Show/Hide geneticsOther if checked/unchecked
if ($('#genetics').is(':checked')) {
  $('#geneticsOther').show();
} else {
  $('#geneticsOther').hide();
}
    // Show geneticsOther when genetics is selected
    $('#genetics').change(function () {
      if ($('#genetics').is(':checked')) {
        $('#geneticsOther').fadeIn();
      }
    });
        //  Hide and Reset value geneticsOther when geneticsNo is selected
        $('#geneticsNo').change(function () {
          if ($('#geneticsNo').is(':checked')) {
            $('#geneticsOther').fadeOut();
            geneticsOther[0].value = "";
          }
        });

// Show/Hide anyMedicationOther if checked/unchecked
if ($('#anyMedication').is(':checked')) {
  $('#anyMedicationOther').show();
} else {
  $('#anyMedicationOther').hide();
}
    // Show anyMedicationOther when anyMedication is selected
    $('#anyMedication').change(function () {
      if ($('#anyMedication').is(':checked')) {
        $('#anyMedicationOther').fadeIn();
      }
    });
        //  Hide and Reset value anyMedicationOther when anyMedicationNo is selected
        $('#anyMedicationNo').change(function () {
          if ($('#anyMedicationNo').is(':checked')) {
            $('#anyMedicationOther').fadeOut();
            anyMedicationOther[0].value = "";
          }
        });

// Show/Hide medicationHistoryOther if checked/unchecked
if ($('#medicationHistory').is(':checked')) {
  $('#medicationHistoryOther').show();
} else {
  $('#medicationHistoryOther').hide();
}
    // Show medicationHistoryOther when medicationHistory is selected
    $('#medicationHistory').change(function () {
      if ($('#medicationHistory').is(':checked')) {
        $('#medicationHistoryOther').fadeIn();
      }
    });
        //  Hide and Reset value medicationHistoryOther when medicationHistoryNo is selected
        $('#medicationHistoryNo').change(function () {
          if ($('#medicationHistoryNo').is(':checked')) {
            $('#medicationHistoryOther').fadeOut();
            medicationHistoryOther[0].value = "";
          }
        });

        if ($('#medicationHistory').is(':checked')) {
          $('#medicationHistoryOther').show();
        } else {
          $('#medicationHistoryOther').hide();
        }

// Show/Hide medicalProblemsOther if checked/unchecked
if ($('#medicalProblems').is(':checked')) {
  $('#medicalProblemsOther').show();
} else {
  $('#medicalProblemsOther').hide();
}
    // Show medicalProblemsOther when medicalProblems is selected
    $('#medicalProblems').change(function () {
      if ($('#medicalProblems').is(':checked')) {
        $('#medicalProblemsOther').fadeIn();
      }
    });
        //  Hide and Reset value medicalProblemsOther when medicalProblemsNo is selected
        $('#medicalProblemsNo').change(function () {
          if ($('#medicalProblemsNo').is(':checked')) {
            $('#medicalProblemsOther').fadeOut();
            medicationHistoryOther[0].value = "";
          }
        });

        if ($('#medicalProblems').is(':checked')) {
          $('#medicalProblemsOther').show();
        } else {
          $('#medicalProblemsOther').hide();
        }

// Show/Hide surgicalHistoryOther if checked/unchecked
if ($('#surgicalHistory').is(':checked')) {
  $('#surgicalHistoryOther').show();
} else {
  $('#surgicalHistoryOther').hide();
}
    // Show surgicalHistoryOther when surgicalHistoryOther is selected
    $('#surgicalHistory').change(function () {
      if ($('#surgicalHistory').is(':checked')) {
        $('#surgicalHistoryOther').fadeIn();
      }
    });
        //  Hide and Reset value surgicalHistoryOther when surgicalHistoryNo is selected
        $('#surgicalHistoryNo').change(function () {
          if ($('#surgicalHistoryNo').is(':checked')) {
            $('#surgicalHistoryOther').fadeOut();
            medicationHistoryOther[0].value = "";
          }
        });

        if ($('#surgicalHistory').is(':checked')) {
          $('#surgicalHistoryOther').show();
        } else {
          $('#surgicalHistoryOther').hide();
        }

// Hide & reset Question3 inputs when cannotTell3 is selected
$('#cannotTell3').change(function () {
  if ($('#cannotTell3').is(':checked')) {
    $('#Question3').fadeOut();
    genetics[0].checked = false;
    genetics[1].checked = false;
    geneticsOther[0].value = "";
    anyMedication[0].checked = false;
    anyMedication[1].checked = false;
    anyMedicationOther[0].value = "";
    medicalProblems[0].checked = false;
    medicalProblems[1].checked = false;
    medicalProblemsOther[0].value = "";
    surgicalHistory[0].checked = false;
    surgicalHistory[1].checked = false;
    surgicalHistoryOther[0].value = "";
    medicationHistory[0].checked = false;
    medicationHistory[1].checked = false;
    medicationHistoryOther[0].value = "";

    $('#geneticsOther').hide();
    $('#anyMedicationOther').hide();
    $('#medicationHistoryOther').hide();

  } else {
    $('#Question3').fadeIn();
  }
});
// Show/Hide surgicalHistoryOther if checked/unchecked
if ($('#cannotTell3').is(':checked')) {
  $('#Question3').hide();
} else {
  $('#Question3').show();
}

