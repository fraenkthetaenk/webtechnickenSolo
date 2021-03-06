let tableHeaders = document.getElementsByClassName("tableHeader");

let lastUsedSort = "";
let inOrder = true;

/*
    The Logic for sorting the table
 */
sortTable = (event) => {
    let header = document.getElementById("bookTableHeader");
    let clickedCell = 0;
    for (let i = 0; i < header.rows[0].cells.length; i++) {
        header.rows[0].cells[i].classList = "";
    }


    for (let i = 0; i < header.rows[0].cells.length; i++) {
        if (event.target.id == header.rows[0].cells[i].id) {
            clickedCell = i;
            break;
        }
    }

    if (lastUsedSort == event.target.id) {
        inOrder = !inOrder;
    }
    else {
        inOrder = true;
    }

    if (inOrder) {
        header.rows[0].cells[clickedCell].classList = "sorted-Down";
    }
    else {
        header.rows[0].cells[clickedCell].classList = "sorted-Up";
    }

    let tableBody = document.getElementById("bookTableBody")
    let rows = tableBody.rows;
    let dictCombi = [];
    for (let i = 0; i < rows.length; i++) {
        dictCombi[i] = {"row": i, "value": rows[i].cells[clickedCell].innerText};
    }
    dictCombi = dictCombi.sort(function (a, b) {
        if (a.value > b.value) {
            return 1;
        }
        if (a.value < b.value) {
            return -1;
        }
        return 0;
    });

    if (!inOrder) {
        dictCombi = dictCombi.reverse();
    }
    for (let i = 0; i < dictCombi.length; i++) {
        let sourceRow = dictCombi[i]["row"];
        rows[i].parentNode.insertBefore(rows[sourceRow], rows[i]);
        for (x in dictCombi) {
            if (dictCombi[x]["row"] < sourceRow) {
                dictCombi[x]["row"] += 1;
            }
        }
    }
    lastUsedSort = event.target.id;
}

/*
    Adds an Eventlistener to each table header cell, so that the table can be sorted
 */
for (var i = 0; i < tableHeaders.length; i++) {
    tableHeaders[i].addEventListener("click", (event) => {
            sortTable(event);
        }
    )
}

/*
*Toggles the Navbar for the Mobile Layout
 */
toggleShowNav = () => {
    let navList = document.getElementById("navList");
    if (navList.classList.contains("show")) {
        navList.classList.remove("show");
    } else {
        navList.classList.add("show");
    }
}
