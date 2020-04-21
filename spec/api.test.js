const app = require("../server/app");
const supertest = require("supertest");
const request = supertest(app);

it("gets the photos endpoint", async (done) => {
  const response = await request.get("/photos");
  expect(response.status).toBe(200);
  done();
});

it("gets the photos endpoint at a specific id", async (done) => {
  const response = await request.get("/photos/1");
  expect(response.status).toBe(200);
  done();
});
