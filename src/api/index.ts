import { IOrderCreateRequest, IResponse } from './types';

const BASE_URL = 'http://19429ba06ff2.vps.myjino.ru';

export type IParams = Record<string, string | number | boolean | undefined | {}>;

export const serverApi = {
  run: async <T extends IResponse<unknown>>(
    url: string,
    method: 'DELETE' | 'PATCH' | 'POST' | 'PUT' | 'GET' | 'HEAD' = 'GET',
    data: Record<string, unknown> | IOrderCreateRequest = {},
    protectedRequest: boolean = false,
    params: IParams = {},
    headers: Record<string, string> = {}
  ): Promise<T> => {
    const token: string = localStorage.getItem('authToken');
    const _url: URL = new URL('/api/' + url, BASE_URL);

    Object.keys(params).forEach((key) => {
      _url.searchParams.append(key, JSON.stringify(params[key]));
    });

    const _headers =
      protectedRequest && token
        ? {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            ...headers,
          }
        : {
            'Content-Type': 'application/json',
            ...headers,
          };

    data = { ...data, commandId: 'polyakovad' };
    const request: RequestInit = {
      method,
      headers: _headers,
      body: method !== 'GET' && method !== 'HEAD' ? JSON.stringify(data) : undefined,
      redirect: 'follow',
    };
    const response = await fetch(_url.toString(), request).then((result) => result);
    const responseData = await response.json();
    return {
      ok: response.ok,
      status: response.status,
      data: responseData,
    } as T;
  },
};
