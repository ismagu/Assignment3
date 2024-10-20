
const educationSelect = document.getElementById("education");
const netWorthSelect = document.getElementById("netWorth");
const casteSelect = document.getElementById("caste");
const skillCheckboxes = document.querySelectorAll('input[type="checkbox"]');
const ageRadios = document.getElementsByName("age");
const reputationCheckboxes = document.querySelectorAll('#reputation1, #reputation2, #gossips');
const resultDiv = document.getElementById("result");
const calculateButton = document.querySelector("button");

function calculatePrice() {
    let price = 100; 
    const educationCoefficient = parseFloat(educationSelect.value);
    price *= educationCoefficient;

    const netWorthCoefficient = parseFloat(netWorthSelect.value);
    price *= netWorthCoefficient;

    const casteValue = parseFloat(casteSelect.value);
    price += casteValue;

    let skillsTotal = 0;
    skillCheckboxes.forEach(skill => {
        if (skill.checked) {
            skillsTotal += parseFloat(skill.value);
        }
    });
    price += skillsTotal;

    let ageCoefficient = 1; 
    ageRadios.forEach(radio => {
        if (radio.checked) {
            ageCoefficient = parseFloat(radio.value);
        }
    });
    price *= ageCoefficient;

    let reputationAdjustment = 0;
    reputationCheckboxes.forEach(rep => {
        if (rep.checked) {
            if (rep.id === 'gossips') {
                reputationAdjustment += parseFloat(rep.value); 
            } else {
                reputationAdjustment *= parseFloat(rep.value); 
            }
        }
    });
    price += reputationAdjustment;

  
    resultDiv.innerHTML = "Final Price: $" + price.toFixed(2); 
    resultDiv.style.display = "block"; 
}

calculateButton.addEventListener("click", calculatePrice);
