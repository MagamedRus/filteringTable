author: Muhammad K. (muhammadkasymov@yandex.ru)

# scripts
- run front-end - npm start
- run backend - npm run dev-backend
- change db - npm run refresh-db

# db
file in ./backend/bd/mappoints.sql

P.S - If u want run project on locale, u need rewrite:

 - package.json: proxy: http://localhost:8000;
 - ./backend/constants/config: uncomment ready MYSQL_CONFIG, and delete/comment existing MYSQL_CONFIG
 - ./src/constants/api: URL_SERVER = http://localhost:8000;