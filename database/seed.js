const db = require("./index.js");
const Listing = require("./Listing.js");

const insertSeedData = function () {
  const seederData = [];

  for (var i = 1; i < 101; i++) {
    var singleProp = {
      documentId: i,
      listingId: 1000 + i,
      assets: [
        {
          url: "https://images.unsplash.com/photo-1568941159284-3b299541ee63",
          description: "Lovely four bedroom, farmhouse home",
        },
        {
          url: "https://images.unsplash.com/photo-1517162418377-ff38a5961ca6",
          description: "Outdoor patio",
        },
        {
          url: "https://images.unsplash.com/photo-1529423374493-8b2f78fd2437",
          description: "Fully stocked kitchen",
        },
        {
          url: "https://images.unsplash.com/photo-1545042745-e67d687dac2c",
          description: "Relax in nature",
        },
        {
          url: "https://images.unsplash.com/photo-1580862842845-5aa6f6438329",
          description: "Four bedrooms",
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
