function checkNID() {
  let nid = document.getElementById("nid").value.trim();

  if (!/^[0-9]{13}$/.test(nid)) {
    return false;
  }
  return true;
}

function checkTicketNo() {
  let num = parseInt(document.getElementById("ticknum").value);

  if (isNaN(num) || num < 1 || num > 5) {
    return false;
  }
  return true;
}

function validateForm() {
  let nid = document.getElementById("nid").value.trim();
  let fname = document.getElementById("fname").value.trim();
  let lname = document.getElementById("lname").value.trim();
  let event = document.getElementById("event").value;
  let ticknum = document.getElementById("ticknum").value.trim();

  let gender = document.querySelector('input[name="genderRad"]:checked');
  let collect = document.querySelector('input[name="collectRad"]:checked');

  // เช็คช่องว่างทั้งหมด
  if (!nid || !fname || !lname || !event || !ticknum || !gender || !collect) {
    alert("Please fill all fields!");
    return false;
  }

  if (!checkNID()) {
    alert("Invalid National ID (must be 13 digits)!");
    document.getElementById("nid").focus();
    return false;
  }

  if (!checkTicketNo()) {
    alert("Tickets must be between 1 and 5!");
    document.getElementById("ticknum").focus();
    return false;
  }

  priceCalculate();
  return false;
}