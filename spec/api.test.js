const app = require("../server/app");
const supertest = require("supertest");
const request = supertest(app);

it("gets the photos endpoint", async (done) => {
  const response = await request.get("/listings");
  expect(response.status).toBe(200);
  done();
});

it("gets the photos endpoint at a specific id", async (done) => {
  const response = await request.get("/listings/1001/photos");
  expect(response.status).toBe(200);
  done();
});
