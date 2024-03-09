import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private readonly logger = new Logger(DatabaseService.name);
  private readonly prismaClient = new PrismaClient();
  private _connected = false;
  private _error = false;

  async onModuleInit() {
    await this.connectToDatabase();
  }

  private async connectToDatabase() {
    try {
      await this.prismaClient.$connect();
      this._connected = true;
      this.logger.log('Database connected ==>> 🚀');
    } catch (err) {
      this._error = true;
      this.logger.error("Couldn't connect to PostgreSQL", err);
    }
  }

  get isConnected(): boolean {
    return this._connected;
  }

  get hasError(): boolean {
    return this._error;
  }
}
