function panggil() {
  var array1 = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

  array1.forEach(function (element) {
    if (isFinite(element)) {
      console.log("Angka", element, "NOT Infinity");
    } else {
      console.log("Angka", element, "Infinity");
    }
  });
}
panggil();
