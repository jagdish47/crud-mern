import express from "express";
const app = express();

const PORT = 8080;

app.get("/", (request, response) => {
  response.send("Home Page");
});

app.listen(PORT, () => {
  console.log(`Listening successfully at PORT : ${PORT}`);
});
