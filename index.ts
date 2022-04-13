import {
  APIGatewayProxyEvent,
  APIGatewayProxyResultV2,
  Handler,
} from "aws-lambda";
import * as _ from "lodash";

export const handler: Handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResultV2> => {
  const max = 10;
  const val = _.random(max);

  const response = {
    statusCode: 200,
    body: JSON.stringify(`the random value (maxx: ${max}) is: ${val}`),
  };
  return response;
};
