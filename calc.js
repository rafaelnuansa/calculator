	// Menampilkan Nomor 
  function showOnClick(val) {
    document.getElementById("hasil").value += val
  }

 // Mengevaluasi Value
  function solveOnClick() {
    let x = document.getElementById("hasil").value
    let y = eval(x)
    document.getElementById("hasil").value = y
  }

  // Function Untuk Clear Nilai Atau Value
  function clearOnClick() {
    document.getElementById("hasil").value = ""
  }