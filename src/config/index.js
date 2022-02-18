const urls = new Map();

urls.set("localhost", "http://localhost:5000");
urls.set(
  "job-react-udemy.herokuapp.com",
  "https://fastify-node-server.herokuapp.com"
);

export const baseUrl = urls.get(window.location.hostname);
