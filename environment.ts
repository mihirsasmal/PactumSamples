// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

class env{

    baseUrl = process.env.baseUrl;
    key=process.env.key===''?'$S{key}':process.env.key;
}

export default new env();