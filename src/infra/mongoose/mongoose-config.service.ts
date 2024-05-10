import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private config: ConfigService) {}

  createMongooseOptions():
    | MongooseModuleOptions
    | Promise<MongooseModuleOptions> {
    const username = this.config.get('DATABASE_USER');
    const password = this.config.get('DATABASE_PASSWORD');
    const databaseName = this.config.get('DATABASE_NAME');

    const uri = `mongodb+srv://${username}:${password}@cluster0.jkalyc7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/${databaseName}`;
    return {
      uri,
    };
  }
}