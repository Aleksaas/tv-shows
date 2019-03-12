import { Injectable, Injector } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


const API_URL = environment.serverUrl;

@Injectable()
export class ApiService {

    options: {
        headers: HttpHeaders
    };

    requestNum = 0;

    showLoader = false;

    timeouts = [];

    private http: HttpClient;

    constructor(protected injector: Injector) {

        this.http = injector.get(HttpClient);

        this.options = {
            headers: new HttpHeaders
        }

        setInterval(() => {
            if (this.requestNum > 0) {
                const t = setTimeout(() => {
                    if (this.requestNum > 0) {
                        this.showLoader = true;
                    }
                }, 400);
                this.timeouts.push(t);
            } else {
                if (this.requestNum === 0) {
                    for (let i = 0; i < this.timeouts.length; i++) {
                        clearTimeout(this.timeouts[i]);
                    }
                    this.timeouts = [];
                    this.showLoader = false;
                }
            }
        }, 100);
    }

    async get(path: string, params?: any): Promise<any> {

        this.requestNum++;
        this.options['params'] = params;

        return this.http
            .get<any>(`${API_URL}/${path}`, this.options)
            .pipe(map((res) => { this.requestNum--; return res; }), catchError(err => this.handleError(err))
        ).toPromise();
    }

    async post(path: string, data: any, params?: any): Promise<any> {

        this.requestNum++;
        this.options['params'] = params;

        return this.http
            .post<any>(`${API_URL}/${path}`, data, this.options)
            .pipe(map((res) => { this.requestNum--; return res; }), catchError(err => this.handleError(err))
        ).toPromise();
    }

    async put(path: string, data: any, params?: any): Promise<any> {

        this.requestNum++;
        this.options['params'] = params;

        return this.http
            .put<any>(`${API_URL}/${path}`, data, this.options)
            .pipe(map((res) => { this.requestNum--; return res; }), catchError(err => this.handleError(err))
        ).toPromise();
    }

    async delete<T>(path: string, params?: any): Promise<any> {

        this.requestNum++;
        this.options['params'] = params;

        return this.http
            .delete<any>(`${API_URL}/${path}`, this.options)
            .pipe(map((res) => { this.requestNum--; return res; }), catchError(err => this.handleError(err))
        ).toPromise();
    }

    private handleError(error: any) {

        console.log('ApiService::handleError: ', error);

        this.requestNum--;

        switch (error.status) {
            case 401:
                // Show modal
                break;
            case 403:
                // Show modal
                break;
            case 500:
                // Show modal
                break;
        }

        return throwError(error);
    }
}
