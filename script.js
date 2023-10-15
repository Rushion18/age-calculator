document.getElementById("calculate").addEventListener("click", function() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthdate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;

    const years = Math.floor(ageInDays / 365);
    const months = Math.floor((ageInDays % 365) / 30);
    const days = Math.floor(ageInDays % 30);

    document.querySelector(".years").textContent = `${years} Years`;
    document.querySelector(".months").textContent = `${months} Months`;
    document.querySelector(".days").textContent = `${days} Days`;
});
