
import {Request, RequestOptionsArgs, Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

export class ExtendedHttp {

  public default: RequestOptionsArgs = {};

  public constructor(private http: Http) {

  }

  public request<T>(url: string | Request, options?: RequestOptionsArgs): Observable<T> {
    return this.http.request(url, this.build(options)).map(handleResponse);
  }

  public get<T>(url: string, options?: RequestOptionsArgs): Observable<T>{
    return this.http.get(url, this.build(options)).map(handleResponse);
  }

  public post<T>(url: string, body: any, options?: RequestOptionsArgs): Observable<T> {
    return this.http.post(url, body, this.build(options)).map(handleResponse);
  }

  public put<T>(url: string, body: any, options?: RequestOptionsArgs): Observable<T> {
    return this.http.put(url, body, this.build(options)).map(handleResponse);
  }

  public delete<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
    return this.http.delete(url, this.build(options)).map(handleResponse);
  }

  public patch<T>(url: string, body: any, options?: RequestOptionsArgs): Observable<T> {
    return this.http.patch(url, body, this.build(options)).map(handleResponse);
  }

  public head<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
    return this.http.head(url, this.build(options)).map(handleResponse);
  }

  public options<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
    return this.http.options(url, this.build(options)).map(handleResponse);
  }

  private build(options?: RequestOptionsArgs): RequestOptionsArgs {
    return _.assign({}, this.default, options);
  }
}

function handleResponse(res: Response) {
  return res.json()
}
