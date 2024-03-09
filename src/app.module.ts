import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { PlaygroundController } from './playground/playground.controller';
import { UsersController } from './users/users.controller';
import { TodolistController } from './todolist/todolist.controller';
import { AuthModule } from './auth/auth.module';
import { TodolistModule } from './todolist/todolist.module';
import { UsersModule } from './users/users.module';
import { PlaygroundModule } from './playground/playground.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { DatabaseService } from './database/database.service';
import { Prisma } from '@prisma/client';
import { PrismaModule } from './database/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes config module available globally
      load: [configuration],
      // Adjust the envFilePath to match your environment file naming convention
      envFilePath:
        process.env.NODE_ENV === 'development'
          ? '.env.development.local'
          : `.env.${process.env.NODE_ENV}`,
    }),

    AuthModule,
    TodolistModule,
    UsersModule,
    PlaygroundModule,
    PrismaModule,
  ],
  controllers: [
    AppController,
    AuthController,
    TodolistController,
    UsersController,
    PlaygroundController,
  ],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
