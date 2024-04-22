import axios, { AxiosRequestConfig } from 'axios';
import { MethodEnum } from '../../../enums/methods.enums';
import { getAuthorizationToken } from './auth';
export type MethodType = 'get' | 'post' | 'put' | 'patch' | 'delete';

export default class ConnectionApi {
  static async call<T,B = unknown>(url: string, method: MethodType, body?: B): Promise<T> {
    const token = await getAuthorizationToken();
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    };
    switch (method) {
      case MethodEnum.GET:
      case MethodEnum.DELETE:
        return (await axios[method]<T>(url, config)).data;
      case MethodEnum.POST:
      case MethodEnum.PATCH:
      case MethodEnum.PUT:
      default:
        return (await axios[method]<T>(url, body, config)).data;
    }
  }

  static async connect<T, B= unknown>(url: string, method: MethodType, body?: B): Promise<T> {
    return this.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error('Sem permissão');
          default:
            throw new Error('Sem conexão com o backend.');
        }
      }
      throw new Error('Sem conexão com o backend.');
    });
  }
}

export const connectionApiGet = async <T>(url: string): Promise<T> => {
  return ConnectionApi.connect(url, MethodEnum.GET);
};

export const connectionApiDelete = async <T>(url: string): Promise<T> => {
  return ConnectionApi.connect(url, MethodEnum.DELETE);
};

export const connectionApiPost = async <T, B= unknown>(url: string, body: B): Promise<T> => {
  return ConnectionApi.connect(url, MethodEnum.POST, body);
};

export const connectionApiPatch = async <T, B= unknown>(url: string, body: B): Promise<T> => {
  return ConnectionApi.connect(url, MethodEnum.PATCH, body);
};

export const connectionApiPut = async <T, B= unknown>(url: string, body: B): Promise<T> => {
  return ConnectionApi.connect(url, MethodEnum.PUT, body);
};
