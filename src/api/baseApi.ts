import axiosInstance from './axios';
import { AxiosRequestConfig } from 'axios';
import { TResponse } from '@/types/query';

export interface IApi {
  get<T>(url: string, input?: object, options?: AxiosRequestConfig<T>): Promise<TResponse<T>>,
  post<T>(url: string, input: object, options?: AxiosRequestConfig<T>): Promise<TResponse<T>>,
  put<T>(url: string, input: object, options?: AxiosRequestConfig<T>): Promise<TResponse<T>>,
  patch<T>(url: string, input: object, options?: AxiosRequestConfig<T>): Promise<TResponse<T>>,
  delete<T>(url: string, input?: object, options?: AxiosRequestConfig<T>): Promise<TResponse<T>>,
}

export class BaseApi implements IApi {
  public async get<T>(url: string, input?: object, options?: AxiosRequestConfig<T>): Promise<TResponse<T>> {
    let opts = { ...options || {} };
    if (input) {
      opts = {
        ...opts,
        params: input,
      };
    }
    const { data } = await axiosInstance.get(url, opts);
    return {
      data: data.data,
      message: data.message,
      statusCode: data.statusCode
    };
  }

  public async post<T>(
    url: string,
    input?: object,
    options?: object
  ): Promise<TResponse<T>> {
    const { data } = await axiosInstance.post(url, input, options);
    return {
      data: data.data,
      message: data.message,
      statusCode: data.statusCode
    };
  }

  public async patch<T>(
    url: string,
    input?: object,
    options?: object
  ): Promise<TResponse<T>> {
    const { data } = await axiosInstance.patch(url, input, options);
    return {
      data: data.data,
      message: data.message,
      statusCode: data.statusCode
    };
  }

  public async put<T>(
    url: string,
    input?: object,
    options?: object
  ): Promise<TResponse<T>> {
    const { data } = await axiosInstance.put(url, input, options);
    return {
      data: data.data,
      message: data.message,
      statusCode: data.statusCode
    };
  }

  public async delete<T>(url: string, input?: object): Promise<TResponse<T>> {
    const { data } = await axiosInstance.delete(url, input);
    return {
      data: data.data,
      message: data.message,
      statusCode: data.statusCode
    };
  }
}