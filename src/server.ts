import fastify from 'fastify';
import { env } from './env';
import { transactionsRoutes } from '../routes/transactions';


const app = fastify();

app.register(transactionsRoutes, {
  prefix: 'transactions',
}); // registra os plugins e executa-os em ordem

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!');
  })
