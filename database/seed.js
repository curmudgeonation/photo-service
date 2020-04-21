const db = require("./index.js");
const Listing = require("./Listing.js");

const listings = [
  {
    documentId: 1,
    listingId: 1001,
    assets: [
      {
        url:
          "https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
        description: "Lovely four bedroom, mid-century home",
      },
      {
        url:
          "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "Well-lit kitchen",
      },
      {
        url:
          "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "Pool in the backyard",
      },
      {
        url:
          "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1339&q=80",
        description: "King-sized bed",
      },
      {
        url:
          "https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description: "Guest bedroom with bathroom",
      },
    ],
  },
];

const insertSampleListings = function () {
  Listing.create(listings).then(() => db.disconnect());
};

// To-do: Add a loop for 100 listings

insertSampleListings();
