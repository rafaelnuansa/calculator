	// Menampilkan Nomor 
  function showOnClick(val) {
    document.getElementById("hasil").value += val
  }

 // Mengevaluasi Value
  function solve() {
    let x = document.getElementById("hasil").value
    let y = eval(x)
    document.getElementById("hasil").value = y
  }

  // Function Untuk Clear Nilai Atau Value
  function clear() {
    document.getElementById("hasil").value = ""
  }