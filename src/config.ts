import nconf from 'nconf';
import dotenv from 'dotenv';

dotenv.config();

nconf.argv().env();

export const token: string = nconf.get('TOKEN');
