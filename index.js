const URL = "http://13.234.156.148:6000/api/hostel/";
function showpb() {
  var x = document.getElementById("loaderouter");
  x.style.display = "block";
}
function hidepb() {
  var x = document.getElementById("loaderouter");

  x.style.display = "none";
}

function getMessData(hostel, meal) {
  showpb();
  fetch(URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },

    body: JSON.stringify({
      hostel: hostel,
      meal: meal,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      hidepb();
      var veg = parseInt(data.data.veg);
      var nonveg = parseInt(data.data.nonveg);
      var total = veg + nonveg;
      document.querySelector("#not_eating").innerHTML = data.data.absent;
      document.querySelector("#veg_eating").innerHTML = veg + "/" + total;
      document.querySelector("#non_veg_eating").innerHTML =
        nonveg + "/" + total;
    })
    // {"isTrue":1,"msg":"","data":{"absent":0,"veg":0,"nonveg":0}}
    .catch((error) => {
      hidepb();
      window.alert("Error in fetching error!!");
    });
}

function submitData() {
  var hostel_name = document.querySelector("#hostel_name").value;
  var meal_code = document.querySelector("#meal_code").value;
  getMessData(hostel_name, meal_code);
}
