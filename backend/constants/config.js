export const PORT = process.env.PORT || 8000;

//For locale db
// export const MYSQL_CONFIG = {
//   host: process.env.DB_HOST || 'localhost',
//   user: 'root',
//   database: process.env.DB_NAME || 'filteringtable',
//   password: process.env.DB_PASSWORD || 'root',
//   waitForConnections: true,
//   connectionLimit: 200,
//   queueLimit: 0,
// };

export const MYSQL_CONFIG = {
  host: process.env.DB_HOST || 'sql11.freesqldatabase.com',
  user: 'sql11505823',
  database: process.env.DB_NAME || 'sql11505823',
  password: process.env.DB_PASSWORD || 'fZTidrHllk',
  waitForConnections: true,
  connectionLimit: 200,
  queueLimit: 0,
};