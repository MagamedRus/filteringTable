export const PORT = process.env.PORT || 8000;

export const MYSQL_CONFIG = {
  host: process.env.DB_HOST || 'localhost',
  user: 'root',
  database: process.env.DB_NAME || 'filteringtable',
  password: process.env.DB_PASSWORD || 'root',
  waitForConnections: true,
  connectionLimit: 200,
  queueLimit: 0,
};