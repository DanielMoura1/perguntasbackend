import  server from './index.js';
export default server;
import dotenv from 'dotenv';

dotenv.config();

server.listen(process.env.PORT, () => console.log(`
  Server running on port ${process.env.PORT}.
`));