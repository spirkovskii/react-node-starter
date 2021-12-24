import errorHandler from 'errorhandler';
import { app } from './app';
import mongoose from 'mongoose';

/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
}

const start = async () => {
  const DB_URL = 'mongodb://localhost:27017/';
  await mongoose.connect(DB_URL);
  app.listen(app.get('port'), () => {
    console.log('  App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
  });
};

void start();
