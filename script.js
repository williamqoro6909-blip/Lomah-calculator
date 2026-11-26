// A list (array) to hold all the items your dad adds, just like a Python list
let items = [];
const RATE = 600; // $600 per cubic metre

function addItem() {
    // 1. Grab values from the HTML input boxes
    let name = document.getElementById("itemName").value || "Cargo Item";
    let l = parseFloat(document.getElementById("length").value) || 0;
    let w = parseFloat(document.getElementById("width").value) || 0;
    let h = parseFloat(document.getElementById("height").value) || 0;
    let qty = parseInt(document.getElementById("qty").value) || 1;

    // Stop if the user forgot to enter dimensions
    if (l === 0 || w === 0 || h === 0) {
        alert("Please enter Length, Width, and Height in cm!");
        return;
    }

    // 2. Calculate Cubic Metres (CBM) and Cost
    let cbm = ((l * w * h) / 1000000) * qty;
    let cost = cbm * RATE;

    // 3. Save this item into our list
    items.push({ name: name, qty: qty, cbm: cbm, cost: cost });

    // 4. Update the screen and clear the item boxes for the next box
    updateScreen();
    document.getElementById("itemName").value = "";
    document.getElementById("length").value = "";
    document.getElementById("width").value = "";
    document.getElementById("height").value = "";
    document.getElementById("qty").value = "1";
}

function updateScreen() {
    let listElement = document.getElementById("itemList");
    listElement.innerHTML = ""; // Clear the old list display
    let grandTotal = 0;

    // Loop through every item in our list (just like 'for item in items:' in Python)
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        grandTotal += item.cost;

        // Add a bullet point to the webpage
        listElement.innerHTML += `<li><b>${item.qty}x ${item.name}</b> — ${item.cbm.toFixed(3)} m³ ($${item.cost.toFixed(2)})</li>`;
    }

    // Update the big total at the bottom
    document.getElementById("totalDisplay").innerText = "Total: $" + grandTotal.toFixed(2) + " NZD";
}