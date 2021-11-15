exports.handler = async (event) => {
    try {
        const res = await axios.get('http://petstore-demo-endpoint.execute-api.com/petstore/pets')
        console.log('log:', res.data);
        return {
            statusCode: 200,
            body: res.data
        }
    } catch (e) {
        console.log('error', e)
        return {
            statusCode: 400,
            body: JSON.stringify(e)
        }
    }
};
