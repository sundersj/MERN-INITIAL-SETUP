import appConfig from './app.js'
import databaseConfig from './database.js'


export default (express) =>
{

    return {
        app: appConfig(express),
        databse: databaseConfig(express),
    };
};