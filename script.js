
function adding(stuff) {
  var n;
  var i;
  var z = course.value;
 if(z > 50.3289725) {
   i = -0.225067 * z + 21.3858;
    }
    else {
      i =  -0.487095 * z + 34.5734;
    }
    n = ((z - stuff.value) * i) + 1000;
  return (n | 0);
}

function textStuff() {
  var x = "Disc Golf Course Review";
  var y = "PDGA Live";
  if (Number.isInteger(+course.value)) {
    return y;
  }
  else {
    return x;
  }
}




