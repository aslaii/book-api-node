import express from 'express';
import swaggerUi from 'swagger-ui-express';
import bookRoutes from './routes/bookRoutes.js';
import swaggerDocs from './swagger.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/', bookRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

