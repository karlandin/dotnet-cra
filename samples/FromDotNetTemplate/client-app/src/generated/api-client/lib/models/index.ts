/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";


/**
 * @interface
 * An interface representing WeatherForecast.
 */
export interface WeatherForecast {
  /**
   * @member {string} [dateFormatted]
   */
  dateFormatted?: string;
  /**
   * @member {number} [temperatureC]
   */
  temperatureC?: number;
  /**
   * @member {string} [summary]
   */
  summary?: string;
  /**
   * @member {number} [temperatureF] **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly temperatureF?: number;
}

/**
 * @interface
 * An interface representing MyAPIOptions.
 * @extends ServiceClientOptions
 */
export interface MyAPIOptions extends ServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * Contains response data for the weatherForecasts operation.
 */
export type WeatherForecastsResponse = Array<WeatherForecast> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: WeatherForecast[];
    };
};
