// City search function
function myCityFunction() {
  var input, filter, table, tr, td, i, name, number;
  input = document.getElementById("myCityInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    name = tr[i].getElementsByTagName("td")[0];
    number = tr[i].getElementsByTagName("td")[1];
    if (name||number) {
      if (name.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else if (number.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}

// County search function
function myCountyFunction() {
  var input, filter, table, tr, td, i, county, number;
  input = document.getElementById("myCountyInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    county = tr[i].getElementsByTagName("td")[2];
    number = tr[i].getElementsByTagName("td")[3];
    if (county||number) {
      if (county.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else if (number.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}

// District search function
function myDistrictFunction() {
  var input, filter, table, tr, td, i, district, number, abbreviation;
  input = document.getElementById("myDistrictInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    district = tr[i].getElementsByTagName("td")[4];
    abbreviation = tr[i].getElementsByTagName("td")[5];
    number = tr[i].getElementsByTagName("td")[6];
    if (district||number||abbreviation) {
      if (district.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else if (number.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else if (abbreviation.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }
  }
}
