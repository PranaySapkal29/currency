const apiKey = '9d66a03acfe8aa09018b4f1f22fb1fac'; 
const apiUrl = 'https://data.fixer.io/api/latest';

document.getElementById('converter-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

     await=fetch(`http://data.fixer.io/api/latest?access_key=9d66a03acfe8aa09018b4f1f22fb1fac`)
        .then(response => response.json())
        .then(data => {
            if (!data.success) {
                document.getElementById('result').innerText = 'Error fetching rates.';
                return;
            }

            const rates = data.rates;
            const rateFrom = rates[fromCurrency];
            const rateTo = rates[toCurrency];

            if (!rateFrom || !rateTo) {
                document.getElementById('result').innerText = 'Currency not found.';
                return;
            }

            const result = (amount / rateFrom) * rateTo;
            document.getElementById('result').innerText = 
              `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => {
            console.error(error);
            document.getElementById('result').innerText = 'Failed to fetch exchange rates.';
        });
});
