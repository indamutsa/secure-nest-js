import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { DatabaseService } from './database/database.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = new Logger('bootstrap');
  const port = configService.get('PORT', 3000);
  const database = app.get(DatabaseService);

  // // Access and log specific configuration values
  // const databaseDsn = configService.get<string>('DATABASE_URL');
  // const jwtSecret = configService.get<string>('JWTSECRET');
  // const githubClientId = configService.get<string>('GITHUB_CLIENT_ID');
  // const githubClientSecret = configService.get<string>('GITHUB_CLIENT_SECRET');

  // // Log the configuration values to ensure they are being accessed correctly
  // logger.log(`Database DSN: ${databaseDsn}`);
  // logger.log(`JWT Secret: ${jwtSecret}`);
  // logger.log(`GitHub Client ID: ${githubClientId}`);
  // logger.log(`GitHub Client Secret: ${githubClientSecret}`);

  await app.listen(port, () =>
    logger.log(
      `Server is running on port ${port} and database is ${database.isConnected ? 'CONNECTED 🚀' : 'nOT cOnnEcteD😡'}`,
    ),
  );
}
bootstrap().catch((err) => {
  Logger.error('An error occured while starting the application', err);
  process.exit(1);
});
