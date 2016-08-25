$("#submit").on("click", myFunction);
function myFunction() {
var name = $("#name").val();
var description = $("#description").val();
var category = $("#category").val();
var lati = $("#lati").val();
var longti = $("#longti").val();
var $bio = $('#bio');
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'name1=' + name + '&description1=' + description + '&category1=' + category + '&lati=' + lati + '&longti' + longti;
if (name == '' || description == '' || category == '' || lati == '' || longti== '') {
alert("Please Fill All Fields");
} else {

// AJAX code to submit form.

var info =
{"name": name,
 "description": description,
"category": category,
 "latLong": {
 "coordinates": [parseFloat(longti), parseFloat(lati)]
}
};


var jinfo = JSON.stringify(info);
console.log(jinfo);

$.ajax({
type: "POST",
url: "https://jiak-simi.herokuapp.com/api/locations",
data: jinfo, dataString,
headers: {
  'Content-type' : 'application/json',
  'x-access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6eyJsb2NhbCI6eyJlbWFpbCI6ImppYWtzaW1pQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA1JGdxS0RPbnc3azRYMFVKVnVqQUNEVnVZaHJocVouc2NsTkhWUlc4amFMTXZpMC9YWTY4Q0hPIn19LCJ3YXNQb3B1bGF0ZWQiOmZhbHNlLCJzY29wZSI6eyJfaWQiOiI1N2JlOWI2Y2U3YTAwMzAzMDA4ZmFjMjEiLCJfX3YiOjAsImxvY2FsIjp7InBhc3N3b3JkIjoiJDJhJDA1JGdxS0RPbnc3azRYMFVKVnVqQUNEVnVZaHJocVouc2NsTkhWUlc4amFMTXZpMC9YWTY4Q0hPIiwiZW1haWwiOiJqaWFrc2ltaUBnbWFpbC5jb20ifX0sImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7Il9fdiI6ImluaXQiLCJsb2NhbC5lbWFpbCI6ImluaXQiLCJsb2NhbC5wYXNzd29yZCI6ImluaXQiLCJfaWQiOiJpbml0In0sInN0YXRlcyI6eyJpZ25vcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfX3YiOnRydWUsImxvY2FsLmVtYWlsIjp0cnVlLCJsb2NhbC5wYXNzd29yZCI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7ImxvY2FsIjp7ImVtYWlsIjoiamlha3NpbWlAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMDUkZ3FLRE9udzdrNFgwVUpWdWpBQ0RWdVlocmhxWi5zY2xOSFZSVzhqYUxNdmkwL1hZNjhDSE8ifSwiZmFjZWJvb2siOnt9LCJfX3YiOjAsIl9pZCI6IjU3YmU5YjZjZTdhMDAzMDMwMDhmYWMyMSJ9LCJfcHJlcyI6eyIkX19vcmlnaW5hbF9zYXZlIjpbbnVsbCxudWxsXSwiJF9fb3JpZ2luYWxfdmFsaWRhdGUiOltudWxsXSwiJF9fb3JpZ2luYWxfcmVtb3ZlIjpbbnVsbF19LCJfcG9zdHMiOnsiJF9fb3JpZ2luYWxfc2F2ZSI6W10sIiRfX29yaWdpbmFsX3ZhbGlkYXRlIjpbXSwiJF9fb3JpZ2luYWxfcmVtb3ZlIjpbXX0sImlhdCI6MTQ3MjEwOTU4MX0.g-kO9yy_dBsB1X6Yt44g0ubYE6KuGkpan-M0rjWHC-A'
}

// cache: false,
// success: function(html) {
// console.log(html);


// }
}) .done(successFunction)
  .fail(failFunction)
}
function successFunction(data) {


alert("Successful!");
  // $bio.html();


}
//
function failFunction(request, textStatus, errorThrown) {
  $bio.html("an error occured during your request: " + request.status + '' + textStatus + '' + errorThrown); //see variable declaration
}
}
