

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const msg = event.arguments.msg ? event.arguments.msg : 'null'
    return {
        statusCode: 200,
        returnMessage: JSON.stringify('msg : ' + msg)
    };
};
