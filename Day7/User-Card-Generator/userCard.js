const generateBtn = document.getElementById("generateBtn");
const userCard = document.getElementById("userCard");

generateBtn.addEventListener("click", getUser);

async function getUser() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];

        userCard.innerHTML = `
            <img src="${user.picture.large}" alt="Profile Picture">
            <h2>
                ${user.name.first} ${user.name.last}
            </h2>
            <p>
                <strong>Email:</strong>
                ${user.email}
            </p>
            <p>
                <strong>Country:</strong>
                ${user.location.country}
            </p>
        `;
    } catch (error) {
        userCard.innerHTML = `
            <p>Failed to fetch user data.</p>
        `;

        console.log(error);
    }
}