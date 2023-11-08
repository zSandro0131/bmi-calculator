const calcBtn = document.getElementById('calcBtn')
const modal = document.querySelector('.modal')
const closeModal = document.getElementById('closeModalBtn')
const modalP = document.getElementById('modalP')

//Functions//

function openModal() {
    if (modal.classList.contains('modal')) {
        modal.classList.add('active')
    }
}

function calculateBMI() {

    const nameInput = document.getElementById('nameInput').value
    const heightInput = document.getElementById('heightInput').value
    const weightInput = document.getElementById('weightInput').value

    if (nameInput !== '' && heightInput !== '' && weightInput !== '') {
        
        const bmiValue = (weightInput / (heightInput * heightInput)).toFixed(1)

        let classification = ''

        if (bmiValue < 18.5) {
            classification = 'Under weight';
        } else if (bmiValue < 25) {
            classification = 'Normal weight. Your Rock!'; 
        } else if (bmiValue < 30) {
            classification = 'Slightly overweight'
        } else if (bmiValue < 35) {
            classification = 'Obesity I . You gotta take care of your self '
        } else if (bmiValue < 40) {
            classification = 'Obsesity II . You gotta take care of your self NOW!'
        } else if (bmiValue > 40) {
            classification = 'Obesity III . You gotta take care of your self NOW'
        }


        openModal();

        modalP.innerHTML = `Hey ${nameInput} ! Your Body Mass Index is : ${classification}(${bmiValue}) .`

    } else {
        alert('Fill in the blank fields')
    }
}

//Events//

closeModal.addEventListener('click' , ()=> {
    modal.classList.remove('active')
})

calcBtn.addEventListener('click' , calculateBMI)