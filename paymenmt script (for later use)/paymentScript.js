/*
const fs = require('fs');

function handlePayment(event) {
    event.preventDefault();

    const addyInput = document.getElementById('street_address').value;
    const cityInput = document.getElementById('city').value;
    const stateInput = document.getElementById('state').value;
    const zipInput = document.getElementById('zip_code').value;

    var addressDict = {
        "line1": addyInput,
        "city": cityInput,
        "state": stateInput,
        "postal_code": zipInput,
        "country": "US"
    };

    console.log(addressDict);

    var checkout = {
        "address": addressDict,
         "cart": [{"amount": 515,"tax_code": "txcd_99999999","reference": "Pelakii Snack Box"}],
         //515 is price of snack box, modify with price script later
         "shipping":300
    }

    const jsonString = JSON.stringify(checkout, null, 2); // converts dictionary to json compatible string

    const filePath = './backend_code/checkout.json';

    fs.writeFile('chackout.json', jsonString, (err) => {
    if (err) {
        console.error('Error writing file', err);
    } else {
        console.log('Successfully wrote file');
  }
});

}

const form = document.getElementById('payment_details');
form.addEventListener('submit', handlePayment);*/
