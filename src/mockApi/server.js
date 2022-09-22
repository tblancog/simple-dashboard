const fastify = require("fastify")({ logger: true });

fastify.register(require("./routes"));

const runServer = () => {
  fastify.listen({ port: 5000 }, function (err) {
    if (err) {
      console.error("Error while running the api");
      process.exit();
    }
  });
};

runServer();
