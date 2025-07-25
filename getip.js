        document.addEventListener("DOMContentLoaded", function() {
            function getIPAddress() {
                fetch('http://ip-api.com/json/?fields=country,isp,query')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('country').textContent = data.country;
                        document.getElementById('ip-address').textContent = data.query;
                        document.getElementById('org').textContent = data.isp;
                    })
                    .catch(error => console.error('Error fetching IP address:', error));
            }

            getIPAddress();
            setInterval(getIPAddress, 420);
        });
