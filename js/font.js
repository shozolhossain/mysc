const rowsPerPage = 15;
let currentPage = 1;
const table = document.getElementById("fontTable").getElementsByTagName("tbody")[0];
const tr = table.getElementsByTagName("tr");

function showPage(page) {
    currentPage = page;
    let start = (page - 1) * rowsPerPage;
    let end = start + rowsPerPage;

    for (let i = 0; i < tr.length; i++) {
        tr[i].style.display = (i >= start && i < end) ? "" : "none";
    }

    updatePagination();
}

function updatePagination() {
    const paginationContainer = document.getElementById("paginationContainer");
    const totalRows = tr.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    paginationContainer.innerHTML = "";

    // Previous button
    let prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    if (currentPage === 1) {
        prevButton.className = "disabled";
    } else {
        prevButton.onclick = function () {
            showPage(currentPage - 1);
        };
    }
    paginationContainer.appendChild(prevButton);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        let button = document.createElement("button");
        button.textContent = i;
        button.className = (i === currentPage) ? "disabled" : "";
        button.onclick = function () {
            showPage(i);
        };
        paginationContainer.appendChild(button);
    }

    // Next button
    let nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    if (currentPage === totalPages) {
        nextButton.className = "disabled";
    } else {
        nextButton.onclick = function () {
            showPage(currentPage + 1);
        };
    }
    paginationContainer.appendChild(nextButton);
}

// Search functionality remains the same




function searchTable() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    let found = false;

    for (let i = 0; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            const txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(input) > -1) {
                tr[i].style.display = "";
                found = true;
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    document.getElementById("errorMessage").style.display = found ? "none" : "block";

    if (!input) {
        showPage(currentPage);
    }
}

// Initialize pagination
showPage(1);