// Function to calculate tax and update the display
function calculateTax() {
  // Get input values and convert to numbers, default to 0 if invalid
  const amount = parseFloat(document.getElementById('amount').value) || 0;
  const taxRate = parseFloat(document.getElementById('taxRate').value) || 0;

  // Calculate tax amount
  const taxAmount = (amount * taxRate) / 100;

  // Calculate total amount with tax added
  const totalWithTax = amount + taxAmount;

  // Calculate amount with tax subtracted
  const amountMinusTax = amount - taxAmount;

  // Update the display with formatted currency values
  document.getElementById('totalWithTax').textContent = `$${totalWithTax.toFixed(2)}`;
  document.getElementById('taxAmount').textContent = `$${taxAmount.toFixed(2)}`;
  document.getElementById('minusTaxAmount').textContent = `$${amountMinusTax.toFixed(2)}`;
}

// Function to clear all inputs and results
function clearAll() {
  // Clear input fields
  document.getElementById('amount').value = '';
  document.getElementById('taxRate').value = '';

  // Reset result displays
  document.getElementById('totalWithTax').textContent = '$0.00';
  document.getElementById('taxAmount').textContent = '$0.00';
  document.getElementById('minusTaxAmount').textContent = '$0.00';

  // Set focus back to amount input
  document.getElementById('amount').focus();
}

// Event listener for Enter key in amount input
document.getElementById('amount').addEventListener('keypress', function (e) {
  // If Enter is pressed, move focus to tax rate input
  if (e.key === 'Enter') {
    document.getElementById('taxRate').focus();
  }
});

// Event listener for Enter key in tax rate input
document.getElementById('taxRate').addEventListener('keypress', function (e) {
  // If Enter is pressed, calculate the tax
  if (e.key === 'Enter') {
    calculateTax();
  }
});