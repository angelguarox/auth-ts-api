import express, {Application} from 'express';
import morgan from 'morgan';
import config from './config/config';
import authRoutes from './routes/auth.routes';

const app: Application = express();

app.set('port', config.server.PORT);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(authRoutes);

export default app;