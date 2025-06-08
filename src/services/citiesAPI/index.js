// Import the Fastify module
const fastify = require('fastify')();
const fs = require('fs');
const path = require('path');

// Rota para retornar o conteúdo do arquivo data.json
fastify.get('/cities', async (request, reply) => {
  try {
    const filePath = path.join(__dirname, 'cities.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
    // const cityNames = cities.map((city) => city.name);
  } catch (err) {
    reply.code(500).send({ error: 'Error reading JSON file.' });
  }
});

// Inicia o servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('Server is running on http://localhost:3000/cities');
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

start();
