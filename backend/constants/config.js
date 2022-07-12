export const PORT = process.env.PORT || 8000;

export const MYSQL_CONFIG = {
  host: process.env.DB_HOST || 'sql11.freesqldatabase.com',
  user: 'sql11505823',
  database: process.env.DB_NAME || 'sql11505823',
  password: process.env.DB_PASSWORD || 'fZTidrHllk',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 200,
  queueLimit: 0,
};