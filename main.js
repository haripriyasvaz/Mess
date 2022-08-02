

const URL = "https://messnitrklserver.herokuapp.com/api/hostel/";



function getMessData(hostel, meal) {
  fetch(URL, {
    method: 'POST',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },

    body: JSON.stringify({
      "hostel": hostel,
      "meal": meal
    })
  })
    .then(response => response.json())
    .then(data => {
      var veg = parseInt(data.data.veg);
      var nonveg = parseInt(data.data.nonveg);
      var total = veg + nonveg;
      document.querySelector('#not_eating').innerHTML = data.data.absent;
      document.querySelector('#veg_eating').innerHTML = veg + '/' + total;
      document.querySelector('#non_veg_eating').innerHTML = nonveg + '/' + total;
    })
    // {"isTrue":1,"msg":"","data":{"absent":0,"veg":0,"nonveg":0}}
    .catch(error => {
      window.alert("Error in fetching error!!");
    });

}

function submitData() {
  var hostel_name = document.querySelector('#hostel_name').value;
  var meal_code = document.querySelector('#meal_code').value;
  getMessData(hostel_name, meal_code);

}

