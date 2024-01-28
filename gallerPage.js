





document.addEventListener("DOMContentLoaded", function () {

    let cardsContainer = document.getElementById("employee-container");
    let swiper;

    if (!cardsContainer) {
      console.error("Error: Element with ID 'cards-container' not found.");
      return;
    }






// Fetch the JSON file
console.log("Fetching data...");
fetch('employeeData.json')
  .then(response => {
    console.log("Response:", response);

   

    // Parse the JSON data
    return response.json();
  })
  .then(data => {
    console.log("Data:", data);

    // Create a card element
    if (Array.isArray(data.employees)) {
      // Iterate through the data and create cards
      data.employees.forEach(employee => {
        console.log(employee)
        let card = createCard(employee);
        console.log(card)
        cardsContainer.appendChild(card);
        console.log(cardsContainer)
        console.log('hi')   
      });
      // Initialize Swiper
      swiper = new Swiper('.mySwiper', {
        slidesPerView: 'auto', // Set to 'auto' to dynamically adjust to the container size
    spaceBetween: 5, 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
//
    } else {
      console.error("Error: 'employees' property in data is not an array.");
    }
  })
  .catch(error => console.error("Error fetching data:", error));

// Function to create a card
function createCard(cardData) {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");    

    const card = document.createElement("div");
    card.classList.add("card");


    const image = document.createElement("img");
    image.src = cardData.image;
    image.alt = cardData.name + " Image";
    card.appendChild(image);

    const title = document.createElement("h4");
    title.textContent = cardData.name;
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent = "Department:" +cardData.department;
    card.appendChild(description);

    const experience = document.createElement("p");
    experience.textContent ="experience:"+ cardData.experience;
    card.appendChild(experience);

    const position = document.createElement("p");
    position.textContent ="Position:"+ cardData.position;
    card.appendChild(position);
    ////
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.justifyContent = "center";
    card.style.alignItems = "center";
    card.style.width = "100%";
    card.style.backgroundColor=" #A9DFBF";
    
card.style.height = "50%"; // or specify a specific height


    slide.appendChild(card);
    return slide;
    // return card;
 
 

}


// Event listeners for Swiper navigation buttons
document.querySelector('.swiper-button-prev').addEventListener('click', function () {
    swiper.slidePrev();
});

document.querySelector('.swiper-button-next').addEventListener('click', function () {
    swiper.slideNext();
});
});
// })
