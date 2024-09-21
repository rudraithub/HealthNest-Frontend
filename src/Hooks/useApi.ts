import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { UiACtion } from '../store/uiSlice';

const BASE_URL = 'http://localhost:5000/api/v1';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface ApiOptions {
  method: HttpMethod;
  endpoint: string;
  data?: null | [] | object;
  headers?: AxiosRequestHeaders | { [key: string]: string };
}

interface ApiResponse<T = unknown> {
  status?: number;
  data?: T;
  message?: string;
  otpToken?: string;
  token?: string;
}

const useApi = <T = unknown>({ method, endpoint, headers }: ApiOptions, initialValue: ApiResponse<T>) => {
  const [resData, setResData] = useState<ApiResponse<T>>(initialValue);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null); // Explicit type
  const {showError} = UiACtion
  const dispatch = useDispatch()

  const clearData = () => {
    setResData(initialValue)
}

  const sendRequest = useCallback(async (reqData?: null | [] | object) => {
    setLoading(true);
    // setError(null);

    try {
      const url = `${BASE_URL}${endpoint}`; // Fix template string
      const options = {
        method,
        url,
        headers: {
          ...headers,
        },
        data: reqData,
      };

      const response: AxiosResponse<ApiResponse<T>> = await axios(options);
      setResData(response.data);
      console.log(response)
      setLoading(false);
    } catch (err: unknown) { // Type as unknown initially
      setLoading(false);
      if (axios.isAxiosError(err)) {
        // Axios-specific error handling
        dispatch(showError(err.response?.data?.message || err.message || 'Something went wrong'));
      } else if (err instanceof Error) {
        // Handle non-Axios errors
        dispatch(showError(err.message));
      } else {
        // Fallback for unknown error types
        dispatch(showError('An unknown error occurred'));
      }
    }
  }, [dispatch, endpoint, headers, method, showError]);

  return { sendRequest, loading, resData, clearData};
};

export default useApi;
