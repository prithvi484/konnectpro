import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

	constructor(private httpClient: HttpClient) { }

	public get(url: string, query?: Object): Observable<any> {
		return this.httpClient.get<any>(url, { params: <HttpParams>query });
	}
	public put(url: string, body: Object): Observable<any> {
		return this.httpClient.put<any>(url, body);
	}
	public post(url: string, body?: Object): Observable<any> {
		return this.httpClient.post<any>(url, body);
	}
	public delete(url: string, body?: Object): Observable<any> {
		return this.httpClient.delete<any>(url, body);
	}
	public patch(url: string, body: Object): Observable<any> {
		return this.httpClient.patch<any>(url, body);
	}
}
