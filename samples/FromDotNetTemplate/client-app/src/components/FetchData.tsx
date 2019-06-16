import React, { useState, useEffect } from 'react';
import { WeatherForecast } from '../generated/api-client/lib/models';
import { MyAPI } from '../generated/api-client/lib/myAPI';

type ForecastsTableProps = { forecasts: WeatherForecast[] };
export const ForecastsTable: React.FC<ForecastsTableProps> = ({ forecasts }) => {
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        {forecasts.map(forecast =>
          <tr key={forecast.dateFormatted}>
            <td>{forecast.dateFormatted}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}


type FetchDataState = {
  forecasts: WeatherForecast[],
  loading: boolean,
  error: boolean
}

export const FetchData: React.FC = () => {

  const [state, setState] = useState<FetchDataState>({ forecasts: [], loading: true, error: false });

  useEffect(() => {

    new MyAPI({ baseUri: '/' }).weatherForecasts()
      .then(data => {
        setState({ forecasts: data, loading: false, error: false });
      })
      .catch(error => {
        setState({ forecasts: [], loading: false, error: true });
      });

  }, []);

  return (
    <div>
      <h1>Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>

      {state.error ?
        <p><strong>Error!</strong></p>
        : state.loading
          ? <p><em>Loading...</em></p>
          : <ForecastsTable forecasts={state.forecasts} />}

    </div>
  );
}