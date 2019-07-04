/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { MyAPIContext } from "./myAPIContext";

class MyAPI extends MyAPIContext {
  /**
   * Initializes a new instance of the MyAPI class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.MyAPIOptions) {
    super(options);
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.WeatherForecastsResponse>
   */
  weatherForecasts(options?: msRest.RequestOptionsBase): Promise<Models.WeatherForecastsResponse>;
  /**
   * @param callback The callback
   */
  weatherForecasts(callback: msRest.ServiceCallback<Models.WeatherForecast[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  weatherForecasts(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WeatherForecast[]>): void;
  weatherForecasts(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WeatherForecast[]>, callback?: msRest.ServiceCallback<Models.WeatherForecast[]>): Promise<Models.WeatherForecastsResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      weatherForecastsOperationSpec,
      callback) as Promise<Models.WeatherForecastsResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const weatherForecastsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "api/SampleData/WeatherForecasts",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "WeatherForecast"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};

export {
  MyAPI,
  MyAPIContext,
  Models as MyAPIModels,
  Mappers as MyAPIMappers
};