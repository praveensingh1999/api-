console.log("fetching Data........");

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    renderUI(data);
  })
  .catch((error) => {
    console.log("Error occurred", error);
  });

function renderUI(data) {
  const products = data.products;
  const container = document.getElementById("card-container");

  for (let i = 0; i < 30; i++) {
    const product = products[i];
    const firstTitle = product.title;
    const firstTath = product.thumbnail;
    console.log(firstTitle, firstTath);

    // Create a card div
    const card = document.createElement("div");
    card.classList.add("card");

    // Create and append the title
    const title = document.createElement("h3");
    title.innerText = firstTitle;
    card.appendChild(title);

    // Create and append the image
    const img = document.createElement("img");
    img.src = firstTath;
    card.appendChild(img);

    // Append the card to the container
    container.appendChild(card);
  }
}
