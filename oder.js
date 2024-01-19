// Get the form, search input, and added items container
const addItemForm = document.getElementById('addItemForm');
const removeItemBtn = document.getElementById('removeItemBtn');
const searchItemInput = document.getElementById('searchItem');
const addedItemsDiv = document.querySelector('.added-items');

// Function to handle form submission (Adding Item)
addItemForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get values from the form inputs
  const itemName = addItemForm.elements.itemName.value;
  const itemPrice = parseFloat(addItemForm.elements.itemPrice.value).toFixed(2);

  // Create HTML for the added item
  const itemHTML = `<div class="item">
    <p><strong>${itemName}</strong> - $${itemPrice}</p>
  </div>`;
  
  // Display added item in the added-items div
  addedItemsDiv.insertAdjacentHTML('beforeend', itemHTML);
  
  // Clear the form inputs after submission
  addItemForm.reset();
});

// Function to handle removing items
removeItemBtn.addEventListener('click', function() {
  const searchTerm = searchItemInput.value.toLowerCase();
  const items = addedItemsDiv.getElementsByClassName('item');
  
  for (let item of items) {
    const itemName = item.textContent.toLowerCase();
    if (itemName.includes(searchTerm)) {
      item.remove(); // Remove the item
    }
  }
});

