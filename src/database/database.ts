import mongoose from 'mongoose';
import config from '../config/config';

mongoose.connect(config.database.URI, config.options)
	.then(db => console.log('MONGODB IS CONNECTED'))
	.catch(e => console.error('ERROR, NOT CONNECTED AT MONGODB', e));