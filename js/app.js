document.getElementById('btn').addEventListener('click', function(){
    const loadProfile = () => {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => displayProfle(data))
    }
    
    const displayProfle = user => {
        // name
        const nameContainer = document.getElementById('name');
        nameContainer.innerText = `Name: ${user.results[0].name.first}`;
    
        // age
        const ageContainer = document.getElementById('age');
        ageContainer.innerText = `Age: ${user.results[0].dob.age}`;
    
        // gender
        const genderContainer = document.getElementById('gender');
        genderContainer.innerText = `Gender: ${user.results[0].gender}`;
    
        // email
        const emailContainer = document.getElementById('email');
        emailContainer.innerText = `Email: ${user.results[0].email}`;
        
        // cell
        const cellContainer = document.getElementById('cell');
        cellContainer.innerText = `Cell: ${user.results[0].cell}`;
    
        // country
        const countryContainer = document.getElementById('country');
        countryContainer.innerText = `Country: ${user.results[0].location.country}`;
    
        // image
        const imageContainer = document.getElementById('image');
        imageContainer.innerHTML = `
            <img src="${user.results[0].picture.large}" class="image">
        `;
    }
    
    loadProfile();
})