import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'postgres',
  host: 'host.docker.internal',
  port: 5432,
  username: 'pguser',
  password: 'pgpassword',
  database: 'postgres',
  synchronize: true,
  entities: ['dist/**/*.entity.js'],
};
