import envConfig from "@/config";

type RequestOptions = Omit<RequestInit, "body" | "method"> & {
  baseUrl?: string | undefined;
};

const constructFullUrl = (url: string, baseUrl: string): string => {
  return url.startsWith("/") ? `${baseUrl}${url}` : `${baseUrl}/${url}`;
};

async function request<TResponse, TBody = unknown>(
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  url: string,
  body?: TBody,
  options?: RequestOptions
): Promise<TResponse> {
  const fetchOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    credentials: "include",
    ...options,
    body: body ? JSON.stringify(body) : undefined,
  };

  const baseUrl =
    options?.baseUrl === undefined
      ? envConfig.NEXT_PUBLIC_API_URL
      : options.baseUrl;

  const fullUrl = constructFullUrl(url, baseUrl);

  const request = await fetch(fullUrl, fetchOptions);

  if (!request.ok) {
    throw new Error("Request failed");
  }

  return request.json();
}

const http = {
  get<TResponse>(url: string, options?: RequestOptions) {
    return request<TResponse>("GET", url, undefined, options);
  },
  post<TResponse, TBody = unknown>(url: string, body?: TBody, options?: RequestOptions) {
    return request<TResponse, TBody>("POST", url, body, options);
  },
  put<TResponse, TBody = unknown>(url: string, body?: TBody, options?: RequestOptions) {
    return request<TResponse, TBody>("PUT", url, body, options);
  },
  patch<TResponse, TBody = unknown>(url: string, body?: TBody, options?: RequestOptions) {
    return request<TResponse, TBody>("PATCH", url, body, options);
  },
  delete<TResponse>(url: string, options?: RequestOptions) {
    return request<TResponse>("DELETE", url, undefined, options);
  },
};


export default http;