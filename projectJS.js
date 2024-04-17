function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function generateMealPlan() {
    const email = document.getElementById('email').value;
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const modal = document.getElementById('mealPlanModal');
    const output = document.getElementById('mealPlanOutput');
    output.innerHTML = '';  

    const name = document.getElementById('name').value;
    const goal = document.getElementById('goal').value;
    const mondayBreakfast = document.getElementById('mondayBreakfast').value;
    
    output.innerHTML += `<p>Name: ${name}</p>`;
    output.innerHTML += `<p>Goal for the week: ${goal}</p>`;
    output.innerHTML += `<p>Monday - Breakfast: ${mondayBreakfast}</p>`;


    modal.style.display = 'block';
}

function clearMealPlan() {
    document.getElementById('mealPlanForm').reset();
}

function closeModal() {
    document.getElementById('mealPlanModal').style.display = 'none';
}

