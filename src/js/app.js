//an array
let categories = [
  "books",
  "music",
  "movies",
  "sports",
  "fashion",
  "food",
  "travel",
  "electronics",
  "toys",
  "tools",
  "pets",
  "beauty",
  "home decor",
  "office supplies",
  "art",
  "fitness",
  "jewelry",
  "gardening",
  "outdoor gear",
  "board games",
  "crafts",
  "party supplies",
  "healthcare",
  "personal care",
  "automotive",
  "baby products",
  "cameras",
  "phones",
  "computers",
  "software",
];

//an object. The cloud robot provided it. does not describe me i tell you that much lol!
let data = {
  name: "John",
  age: 30,
  city: "New York",
  occupation: "Software Engineer",
  salary: 100000,
  favoriteColor: "blue",
  hobbies: ["reading", "hiking", "playing guitar"],
  pets: {
    dog: "Fido",
    cat: "Whiskers",
  },
};

//loop over categories
//my attempt 
// for (let i=0; i=categories.length; i++)//this bracket hurts the most i think other than the infinite loop
// console.log(i, categories[i]);//nailed this one
// console.table(i, categories[i]);//obsessed with tables ever since i discovered them :)
//check to see if it worked
//nope. error 30 undefined. wait... infinite loop!!!  ask the cloudbot.
//solution
for (let i = 0; i <= categories.length; i++) {
  console.log(i, categories[i])//printed something! lol
  // console.table({ index: i, category: categories[i] });//pretty off on this line. stab in the dark though and tables are annoying sometimes
}









































function tagUpdate(description, pageTitle) {
  const authorMetaTag = document.querySelector('meta[name="author"]');
  authorMetaTag.setAttribute("content", "RE. Wilson");

  if (description) {
    const descriptionMetaTag = document.querySelector(
      'meta[name="description"]'
    );
    descriptionMetaTag.setAttribute("content", description);
  }
  // This code updates the document title and description with the provided pageTitle and description arguments, respectively, and then logs the updated values of the author, description, and page title to the console.
  // If both pageTitle and description arguments are provided, the function sets the document title to pageTitle and the document description to description.
  // The function then creates three variables to store the updated values of the author, description, and page title. The updatedAuthorContent variable is set to "RE. Wilson", while the updatedDescriptionContent variable is set to the content attribute of the description meta tag, if it exists. If the description meta tag does not exist, updatedDescriptionContent is set to an empty string.
  // Finally, the updatedPageTitle variable is set to the updated value of the document title. The function then logs the values of updatedAuthorContent, updatedDescriptionContent, and updatedPageTitle to the console.
  // To call the function, pass the pageTitle and description arguments in that order to the tagUpdate function.
  if ((pageTitle, description)) {
    document.title = pageTitle;
    document.description = description;
  }

  const updatedAuthorContent = "RE. Wilson";
  const updatedDescriptionContent = descriptionMetaTag
    ? descriptionMetaTag.getAttribute("content")
    : "";
  const updatedPageTitle = document.title;

  console.log(`Author: ${updatedAuthorContent}`);
  console.log(`Description: ${updatedDescriptionContent}`);
  console.log(`Page Title: ${updatedPageTitle}`);
}

tagUpdate("JS Practice", "WebPage");


function testJs(event) {
  if (event.key === 't') {
    const bodyElement = document.querySelector('body');
    const messageElement = document.createElement('span');
    messageElement.textContent =
      'I am connected and working Ryan. You may proceed';
    bodyElement.appendChild(messageElement);
  }
}

document.addEventListener('keydown', testJs);