const fs = require("fs");
const data = require("./home.json");
const csvData = require("./report.json");

function convertToCSV(arr) {
  const array = [Object.keys(arr[0])].concat(arr);

  return array
    .map((it) => {
      return Object.values(it).toString();
    })
    .join("\n");
}

const routes = (fastify, _, done) => {
  // Get home data
  fastify.get("/api/home", (_, res) => res.send(data));

  // Get csv data
  fastify.get("/api/report", (_, res, done) => {
    const csvString = convertToCSV(csvData);
    res
      .type("text/csv")
      .header("Content-disposition", "attachment; filename=report.csv")
      .header("Content-Type", "application/octet-stream")
      .send(csvString);
    done();
  });

  done();
};

module.exports = routes;
