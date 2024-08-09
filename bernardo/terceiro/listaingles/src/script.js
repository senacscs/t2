document.addEventListener("DOMContentLoaded", function () {
  const cardSection = document.getElementById("card-section");

  const cardsData = [
    {
      title: "Scramble",
      description:
        "to move quickly and with difficulty, often using your hands to help you",
      titleColor: "text-blue-500",
    },
    {
      title: "Whizz",
      description: "to move quickly making a high sound",
      titleColor: "text-green-500",
    },
    {
      title: "Queue",
      description:
        "to wait in a line of people, vehicles, etc. that are waiting for something",
      titleColor: "text-yellow-500",
    },
    {
      title: "Colonel",
      description: "a high-ranking officer in the army or air force",
      titleColor: "text-red-500",
    },
    {
      title: "Enormity",
      description:
        "the extreme scale or seriousness of something that has happened, especially something bad",
      titleColor: "text-blue-500",
    },
    {
      title: "behemoth",
      description:
        "something that is extremely large and often extremely powerful",
      titleColor: "text-purple-500",
    },
    {
      title: "Nonplussed",
      description:
        "surprised and confused so much that they are unsure how to react",
      titleColor: "text-orange-500",
    },
    {
      title: "Unabashed",
      description: "not embarrassed, disconcerted, or ashamed",
      titleColor: "text-gray-500",
    },
    {
      title: "Gibberish",
      description: "words that are meaningless or unintelligible",
      titleColor: "text-red-500",
    },
  ];

  function createCard(cardData) {
    const cardElement = document.createElement("div");
    cardElement.className =
      "relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96";

    const cardContent = document.createElement("div");
    cardContent.className = "p-6";

    const titleElement = document.createElement("h5");
    titleElement.className = `block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal ${cardData.titleColor}`;
    titleElement.textContent = cardData.title;

    const descriptionElement = document.createElement("p");
    descriptionElement.className =
      "block font-sans text-base antialiased font-light leading-relaxed text-inherit";
    descriptionElement.textContent = cardData.description;

    cardContent.appendChild(titleElement);
    cardContent.appendChild(descriptionElement);

    cardElement.appendChild(cardContent);

    return cardElement;
  }

  cardsData.forEach((cardData) => {
    const card = createCard(cardData);
    cardSection.appendChild(card);
  });
});
