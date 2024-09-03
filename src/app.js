function getRandomString(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateDomain() {
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];

  let randomDomain = "";

  for (let i = 0; i < pronouns.length; i++) {
    for (let g = 0; g < adjs.length; g++) {
      for (let u = 0; u < nouns.length; u++) {
        let pronoun = getRandomString(pronouns);
        let adj = getRandomString(adjs);
        let noun = getRandomString(nouns);

        randomDomain = pronoun.concat(adj, noun, ".com");
        console.log(randomDomain);
      }
    }
  }
}
generateDomain();
