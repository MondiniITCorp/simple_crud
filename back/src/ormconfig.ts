import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'postgres',
  host: 'pgsql',
  port: 5432,
  username: 'pguser',
  password: 'pgpassword',
  database: 'postgres',
  synchronize: true,
  entities: ['dist/**/*.entity.js'],
};
