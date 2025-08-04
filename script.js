  document.getElementById('product').addEventListener('click', function() {
                            window.location.href = 'product.html';
                        });
  document.getElementById('home').addEventListener('click', function() {
                            window.location.href = 'ui.html';
                        });            
                         document.getElementById("help").addEventListener("click", function() {
            window.location.href = "help.html";
        });   
                       
                         document.getElementById("profile").addEventListener("click", function() {
            window.location.href = "profile.html";
        });   
                         document.getElementById("contact").addEventListener("click", function() {
            window.location.href = "contact.html";
        });   



function showContent(contentType) {
            const contents = document.querySelectorAll('.content-display');
            contents.forEach(content => {
                content.classList.remove('active');
            });

            const buttons = document.querySelectorAll('.detail-btn');
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            const selectedContent = document.getElementById(contentType + '-content');
            if (selectedContent) {
                selectedContent.classList.add('active');
            }

            event.target.classList.add('active');
        }

        function updateStats() {
            const statsValues = document.querySelectorAll('.stats-value');
            const temperature = document.querySelector('.stats-card .stats-value');
            
            setInterval(() => {
                const currentTemp = parseFloat(temperature.textContent);
                const newTemp = currentTemp + (Math.random() - 0.5) * 0.2;
                temperature.textContent = newTemp.toFixed(1) + '°C';
            }, 5000);
        }

        document.addEventListener('DOMContentLoaded', function() {
            updateStats();
            
            document.querySelectorAll('.nav-item').forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                });
            });
        });