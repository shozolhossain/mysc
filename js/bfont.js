// সার্চ ফাংশন
function searchTable() {
    var input = document.getElementById("searchInput");
    var filter = input.value.toLowerCase();
    var table = document.getElementById("fontTable");
    var tr = table.getElementsByTagName("tr");
    var errorMessage = document.getElementById("errorMessage");

    var found = false; // Found flag

    // টেবিলের রো ফিল্টার করা
    for (var i = 1; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[1]; // ফন্টের নামের কলাম
        if (td) {
            var txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = ""; // মিললে রো শো করবে
                found = true; // Found set to true
            } else {
                tr[i].style.display = "none"; // না মিললে রো লুকাবে
            }
        }
    }

    // যদি সার্চ বক্স খালি থাকে, সব ডাটা দেখান
    if (filter === "") {
        for (var i = 1; i < tr.length; i++) {
            tr[i].style.display = ""; // সব রো শো করবে
        }
        errorMessage.style.display = "none"; // Hide error message
    } else {
        // Error message display logic
        errorMessage.style.display = found ? "none" : "block"; // Show or hide error message
    }

    // সিলিয়াল নম্বর আপডেট করা
    updateSerialNumbers();
}

// সিলিয়াল নম্বর আপডেট ফাংশন
function updateSerialNumbers() {
    var table = document.getElementById("fontTable");
    var tr = table.getElementsByTagName("tr");
    var count = 1;

    for (var i = 1; i < tr.length; i++) {
        if (tr[i].style.display !== "none") {
            tr[i].cells[0].textContent = count++; // সিলিয়াল আপডেট
        }
    }
}