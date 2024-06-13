/*
// Removed because does not function until run on server
const fs = require('fs');

function handlePayment(event) {
    event.preventDefault();

    // Gets address from the website entry
    const addyInput = document.getElementById('street_address').value;
    const cityInput = document.getElementById('city').value;
    const stateInput = document.getElementById('state').value;
    const zipInput = document.getElementById('zip_code').value;

    // Turns that information into a dictionary
    var addressDict = {
        "line1": addyInput,
        "city": cityInput,
        "state": stateInput,
        "postal_code": zipInput,
        "country": "US"
    };

    // Prints address to console (test)
    console.log(addressDict);

    // Writes transaction information to a dictionary
    var checkout = {
        "address": addressDict,
         "cart": [{"amount": 515,"tax_code": "txcd_99999999","reference": "Pelakii Snack Box"}],
         //515 is price of snack box, modify with price script later
         "shipping":300
    }

    // Converts dictionary to string that is JSON compatible
    const jsonString = JSON.stringify(checkout, null, 2); 

    // File path (must be changed to match usage)
    const filePath = './backend_code/checkout.json';

    // Writes checkout dict to set file path
    fs.writeFile('chackout.json', jsonString, (err) => {
    if (err) {
        console.error('Error writing file', err);
    } else {
        console.log('Successfully wrote file');
  }
});

}
// Gets payment details object from page
const form = document.getElementById('payment_details');
// Listener for submit button
form.addEventListener('submit', handlePayment);*/
