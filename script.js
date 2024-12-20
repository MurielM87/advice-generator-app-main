fetch(`https://api.adviceslip.com/advice`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const container = document.getElementById("container");
    const adviceCard = document.createElement("div");
    adviceCard.classList.add("card");
    container.appendChild(adviceCard);

    // Add advice title
    let adviceTitle = document.createElement("h1");
    adviceTitle.classList.add("title");
    adviceCard.appendChild(adviceTitle);
    adviceTitle.innerText = `Advice #${data.slip.id}`;

    // Add advice text
    let adviceText = document.createElement("span");
    adviceText.classList.add("text");
    adviceCard.appendChild(adviceText);
    adviceText.innerText = `"${data.slip.advice}"`;

    // Add mobile divider image
    let imgDividerMobile = document.createElement("img");
    imgDividerMobile.classList.add("img_mobile");
    imgDividerMobile.src = `./images/pattern-divider-mobile.svg`;
    adviceCard.appendChild(imgDividerMobile);

    // Add desktop divider image
    let imgDividerDesktop = document.createElement("img");
    imgDividerDesktop.classList.add("img_desktop");
    imgDividerDesktop.src = `./images/pattern-divider-desktop.svg`;
    adviceCard.appendChild(imgDividerDesktop);

    // Add dice icon with functionality to fetch a new piece of advice
    let imgDice = document.createElement("img");
    imgDice.classList.add("img_dice");
    imgDice.src = `./images/icon-dice.svg`;
    adviceCard.appendChild(imgDice);

    // Event listener to fetch new advice on dice click
    imgDice.addEventListener("click", () => {
      fetch(`https://api.adviceslip.com/advice`)
        .then((res) => res.json())
        .then((newData) => {
          adviceTitle.innerText = `Advice #${newData.slip.id}`;
          adviceText.innerText = `"${newData.slip.advice}"`;
        })
        .catch((err) => console.log(err));
    });
  })
  .catch((err) => console.log(err));