
    
        function calculateAge() {
            const dobInput = document.getElementById("dob").value;
            const result = document.getElementById("result");

            if (!dobInput) {
                result.innerHTML = "Please select a date.";
                return;
            }

            const dob = new Date(dobInput);
            const today = new Date();

            if (dob > today) {
                result.innerHTML = "Date of Birth cannot be in the future.";
                return;
            }

            let ageYear = today.getFullYear() - dob.getFullYear();
            let ageMonth = today.getMonth() - dob.getMonth();
            let ageDay = today.getDate() - dob.getDate();

            if (ageDay < 0) {
                ageMonth--;
                ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            }

            if (ageMonth < 0) {
                ageYear--;
                ageMonth += 12;
            }

            result.innerHTML = `Your age is: <strong>${ageYear}</strong> years- <strong>${ageMonth}</strong> months- <strong>${ageDay}</strong> days.`;
        }

