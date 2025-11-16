function generateContract() {
  var ownername = document.getElementById("affininame").value;
  var petname = document.getElementById("petname").value;
  var petfirstname = petname.split(" ")[0];

  var ownerfillins = document.querySelectorAll(".affinifillin");
  var i;

  for (i = 0; i < ownerfillins.length; i += 1) {
    ownerfillins[i].innerHTML = ownername;
  }

  var petfillins = document.querySelectorAll(".petfillin");
  var i;

  for (i = 0; i < petfillins.length; i += 1) {
    petfillins[i].innerHTML = petname;
  }

  var petfirstfillins = document.querySelectorAll(".petfirstfillin");
  var i;

  for (i = 0; i < petfirstfillins.length; i += 1) {
    petfirstfillins[i].innerHTML = petfirstname;
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
