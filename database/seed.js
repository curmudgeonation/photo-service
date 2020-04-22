const db = require("./index.js");
const Listing = require("./Listing.js");

const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 1,
    min: 0,
  },
  wordsPerSentence: {
    max: 6,
    min: 3,
  },
});

const insertSeedData = function () {
  const seederData = [];

  for (var i = 1; i < 101; i++) {
    var singleProp = {
      documentId: i,
      listingId: 1000 + i,
      assets: [
        {
          url: "https://source.unsplash.com/1600x900/?home",
          description: lorem.generateWords(2),
        },
        {
          url: "https://source.unsplash.com/1600x900/?home",
          description: lorem.generateWords(2),
        },
        {
          url: "https://source.unsplash.com/1600x900/?home",
          description: lorem.generateWords(2),
        },
        {
          url: "https://source.unsplash.com/1600x900/?home",
          description: lorem.generateWords(2),
        },
        {
          url: "https://source.unsplash.com/1600x900/?home",
          description: lorem.generateWords(2),
        },
      ],
    };

    seederData.push(singleProp);
  }

  Listing.create(seederData)
    .then(() => {
      console.log("Success creating and seeding db.");
    })
    .catch((err) => {
      console.log(err);
    });
};

insertSeedData();
