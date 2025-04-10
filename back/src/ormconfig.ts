import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'postgres',
  host: ' 172.31.29.0',
  port: 5432,
  username: 'pguser',
  password: 'pgpassword',
  database: 'postgres',
  synchronize: true,
  entities: ['dist/**/*.entity.js'],
};
