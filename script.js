// script.js

// Function to calculate compound interest
function calculate() {
    // Get user input values
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100;
    const years = parseInt(document.getElementById("years").value);
    const frequency = parseInt(document.getElementById("frequency").value);
    const contribution = parseFloat(document.getElementById("contribution").value || 0);

    // Validate inputs
    if (isNaN(principal) || isNaN(rate) || isNaN(years) || isNaN(frequency)) {
        alert("Please fill out all required fields.");
        return;
    }

    // Compound interest calculation
    let total = principal;
    let breakdown = [];

    for (let i = 1; i <= years * frequency; i++) {
        total += contribution;
        total += total * (rate / frequency);

        if (i % frequency === 0) {
            breakdown.push({ year: i / frequency, total: total.toFixed(2) });
        }
    }

    const interest = total - (principal + contribution * years * frequency);

    // Display results
    document.getElementById("results").innerHTML = `
        <h3>Results</h3>
        <p>Total Amount: <strong>$${total.toFixed(2)}</strong></p>
        <p>Total Interest Earned: <strong>$${interest.toFixed(2)}</strong></p>
        <h4>Yearly Breakdown:</h4>
        <ul>
            ${breakdown.map(item => `<li>Year ${item.year}: $${item.total}</li>`).join("")}
        </ul>
    `;
}
