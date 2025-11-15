function generateContract() {
  alert("grrr");
  var ownername = document.getElementById("affininame").value;
  var petname = document.getElementById("petname").value;
  var petfirstname = petname.split(" ")[0];

  var output = `<div class="contract contract-screen-reader contract-screen-reader-focusable">
    <div class="header">
      <p>
        <img
          src="https://glitchyrobo.space/media/affini%20emblem%20gold.png"
          alt="The emblem of the Affini Compact, in gold"
          width="50"
          height="50/"
        />
      </p>
      <h2>Human Domestication Contract</h2>
    </div>
    <hr class="separation" />
    <ol type="1">
      <li>
        <div class="item-grid">
          <p class="item-text">
            Above all else, you, <span class="fill-in">${petfirstname}</span>, must obey your
            Guardian, <span class="fill-in">${ownername}</span> in all
            things. This is for your safety, wellbeing, and care.
          </p>
          <div class="item-checkbox">
            <div class="checkbox">
              <p>☐</p>
            </div>
          </div>
        </div>
      </li>
      <br />

      <li>
        <div class="item-grid">
          <p class="item-text">
            Your Guardian, <span class="fill-in">${ownername}</span>, owns
            you. You are her property. You do not have political rights in the
            Affini Compact.
          </p>
          <div class="item-checkbox">
            <div class="checkbox">
              <p>☐</p>
            </div>
          </div>
        </div>
      </li>
      <br />

      <li>
        <div class="item-grid">
          <p class="item-text">
            You do have a guarantee of your wellbeing, as defined in § 57 of the
            Human Domestication Treaty.
          </p>
          <div class="item-checkbox">
            <div class="checkbox">
              <p>☐</p>
            </div>
          </div>
        </div>
      </li>
      <br />

      <li>
        <div class="item-grid">
          <p class="item-text">
            This guarantee of wellbeing does not preclude your Guardian from
            disciplining you, as outlined in § 61 of the Human Domestication
            Treaty.
          </p>
          <div class="item-checkbox">
            <div class="checkbox">
              <p>☐</p>
            </div>
          </div>
        </div>
      </li>
      <br />

      <li>
        <div class="item-grid">
          <p class="item-text">
            As the property of your Guardian, she may add, remove, or modify
            conditions of your wardship at any time for any reason within the
            limits established by the Human Domestication Treaty.
          </p>
          <div class="item-checkbox">
            <div class="checkbox">
              <p>☐</p>
            </div>
          </div>
        </div>
      </li>
      <br />

      <li>
        <div class="item-grid">
          <p class="item-text">
            Your full name is
            <span class="fill-in">${petname}</span> from this moment
            forward.
          </p>
          <div class="item-checkbox">
            <div class="checkbox">
              <p>☐</p>
            </div>
          </div>
        </div>
      </li>
      <br />
    </ol>`;

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
    output += `<hr class="separation" />
            <h3>
                Additional terms that your Guardian,
                <span class="fill-in">${ownername}</span>, has stipulated.
            </h3>
            <hr class="separation" />
            <ol type="1" start="7">`
    var i;
    for (i = 0; i < additionalterms.length; i += 1) {
      var term = additionalterms[i];
      output += `<li>
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
    output += "</ol>";
  }

  output += `<hr class="separation" />
      <h3>
        Sign here to acknowledge your understanding and acceptance of these terms
      </h3>
      <hr class="separation" />
      <div class="signature-and-biometric">
        <hr class="separation" />
        <div class="signature" />
        <div class="biometric-box">
          <div class="biometric-space"></div>
          <div class="biometric-label">
            BIOMETRIC
          </div>
        </div>
      </div>
    </div>`;

  document.getElementById("main").innerHTML = output;
}

function downloadContract() {
  var prtContent = document.getElementById("main");
  var docheight = prtContent.height;
  var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=' + docheight + ',toolbar=0,scrollbars=0,status=0');
  WinPrint.document.write('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cookie"><link rel="stylesheet" href="style.css">');
  WinPrint.document.write(prtContent.innerHTML);
  WinPrint.document.close();
  WinPrint.focus();
  WinPrint.print();
  WinPrint.close();
}
