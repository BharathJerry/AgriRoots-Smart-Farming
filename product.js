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
function previewImage(input) {
            const preview = document.getElementById('imagePreview');
            const fileDisplay = document.querySelector('.file-input-display');
            
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                    fileDisplay.style.display = 'none';
                };
                
                reader.readAsDataURL(input.files[0]);
            }
        }

        document.getElementById('plantForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const plantData = {
                plantName: formData.get('plantName'),
                fieldSize: formData.get('fieldSize'),
                plantCount: formData.get('plantCount'),
                hasImage: formData.get('plantImage').name !== ''
            };
            
            // Simulate form submission
            alert(`Plant details submitted successfully!\n\nPlant Name: ${plantData.plantName}\nField Size: ${plantData.fieldSize}\nNumber of Plants: ${plantData.plantCount}\nImage uploaded: ${plantData.hasImage ? 'Yes' : 'No'}`);
            
            // You can add actual form submission logic here
            console.log('Plant data:', plantData);
        });

        // Add some interactive effects
        document.querySelectorAll('.form-input').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateY(-2px)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateY(0)';
            });
        });