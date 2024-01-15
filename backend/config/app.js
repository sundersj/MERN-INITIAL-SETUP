
export default (express) =>
{


    express.set('name', process.env.APP_NAME || 'EXPRESS');

    // return {
    //     name: '',
    //     env: '',
    //     debug: '',
    //     url: '',
    //     timezone: '',
    //     key: '',
    // }
}