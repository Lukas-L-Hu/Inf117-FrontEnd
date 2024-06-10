

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

    localStorage.setItem('data', JSON.stringify(addressDict));

}

const form = document.getElementById('payment_details');
form.addEventListener('submit', handlePayment);
