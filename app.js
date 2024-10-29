// function to calculate age
function calculateAge() {
    // get the user's bith date
    const birthdate = document.getElementById('birthdate').value;

    // check if a birthdate is selected
    if(!birthdate) {
        alert('please select your birthdate')
        return;
    }

    // get current date
    const today = new Date();

    // parse the birthdate string to a Date object
    const birthDate = new Date(birthdate);

    // check if the selected birthdate is equal to or greater than the current date
    if(birthDate >= today) {
        alert('please select a valid birthdate')
        return;
    }

    // calculate age in years, months, and days
    let ageYear = today.getFullYear() - birthDate.getFullYear();
    let ageMonth = today.getMonth() - birthDate.getMonth();
    let ageDay = today.getDate() - birthDate.getDate();

    // checck for leap year
    if(
        birthDate.getMonth() > today.getMonth() || 
        (birthDate.getMonth() === today.getMonth() && birthDate.getDate() > today.getDate())
    ) 
    {
        ageYear--;
        ageMonth = 12 - (birthDate.getMonth() - today.getMonth());
        ageDay = today.getDate() + (new Date (today.getFullYear(), today.getMonth(),0).getDate() - birthDate.getDate());
    }

    // display the result
    let resultMessage;

    if(ageYear > 0) {
        // if there are years, months, and days
        resultMessage = `Your age is ${ageYear} years, ${ageMonth} months, and ${ageDay} days.`;
    }
    else if(ageMonth > 0) {
        // if there are only months, and days
        resultMessage = `Your age is ${ageMonth} months, and ${ageDay} days.`;
    }
    else {
        // if there are only days
        resultMessage = `Your age is ${ageDay} days.`;
    }

    document.getElementById('result').textContent = resultMessage;
}