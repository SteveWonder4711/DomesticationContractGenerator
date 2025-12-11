let personalpronoun = "she";
let possesivepronoun = "her";
let isplural = false;

function startup() {
  pronounSelect();
  checkplural();
  generateContract();
}

function checkplural() {
  isplural = document.getElementById("affiniisplural").checked;
  if (isplural) {
    document.getElementById("pronounselector").style.display = "none";
    personalpronoun = "they";
    possesivepronoun = "their";
  } else {
    document.getElementById("pronounselector").style.display = "block";
    pronounSelect();
  }
  generateContract();
}

function pronounSelect() {
  var pronounlist = document.getElementById("affinipronouns");
  var pronouns = pronounlist.selectedOptions[0].value;
  if (pronouns != "custom") {
    document.getElementById("custompronouns").style.display = "none";
    personalpronoun = pronouns.split(" ")[0];
    possesivepronoun = pronouns.split(" ")[1];
    generateContract();
  } else {
    document.getElementById("custompronouns").style.display = "block";
    customPronouns();
  }
}

function customPronouns() {
  personalpronoun = document.getElementById("personalpronoun").value;
  possesivepronoun = document.getElementById("possesivepronoun").value;
  generateContract();
}

function generateContract() {
  var ownername = document.getElementById("affininame").value;
  var petname = document.getElementById("petname").value;
  var petfirstname = petname.split(" ")[0];

  var ownerfillins = document.querySelectorAll(".affinifillin");

  for (i = 0; i < ownerfillins.length; i += 1) {
    ownerfillins[i].innerHTML = ownername;
  }

  var petfillins = document.querySelectorAll(".petfillin");

  for (i = 0; i < petfillins.length; i += 1) {
    petfillins[i].innerHTML = petname;
  }

  var petfirstfillins = document.querySelectorAll(".petfirstfillin");

  for (i = 0; i < petfirstfillins.length; i += 1) {
    petfirstfillins[i].innerHTML = petfirstname;
  }

  var affinipersonals = document.querySelectorAll(".affinipersonal");

  for (i = 0; i < affinipersonals.length; i += 1) {
    affinipersonals[i].innerHTML = personalpronoun;
  }

  var affinipossesive = document.querySelectorAll(".affinipossesive");

  for (i = 0; i < affinipossesive.length; i += 1) {
    affinipossesive[i].innerHTML = possesivepronoun;
  }

  var pluralfillins = document.querySelectorAll(".plural");

  for (i = 0; i < pluralfillins.length; i += 1) {
    var currentfillin = pluralfillins[i];
    var fillinvalue;
    if (isplural) {
      fillinvalue = currentfillin.dataset.yes;
    } else {
      fillinvalue = currentfillin.dataset.no;
    }
    currentfillin.innerHTML = fillinvalue;
  }

  var additionalterms = [];

  var form = document.getElementById("additionals");
  var i;
  for (i = 0; i < 10; i += 1) {
    var addition = form.elements[i].value;
    if (addition != "") {
      additionalterms.push(addition);
    }
  }

  if (additionalterms.length != 0) {
    var additionalblock = document.getElementById("additionalterms");
    additionalblock.style.display = "block";
    var additionalshtml = "";
    var i;
    for (i = 0; i < additionalterms.length; i += 1) {
      var term = additionalterms[i];
      additionalshtml += `<li>
                    <div class="item-grid">
                    <p class="item-text">
                        ${term}
                    </p>
                    <div class="item-checkbox">
                        <div class="checkbox">
                        <p>☐</p>
                        </div>
                    </div>
                    </div>
                </li>
                <br />`;
    }
    document.getElementById("termlist").innerHTML = additionalshtml;
  } else {
    document.getElementById("additionalterms").style.display = "none";
  }


}

function downloadContract() {
  window.print();
}


