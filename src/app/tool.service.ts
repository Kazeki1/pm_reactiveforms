import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ITool } from './tool';

@Injectable()
export class ToolService {
    private _toolUrl = './assets/tools/tools.json';

    constructor(private _http: HttpClient) { }

    getTools(): Observable<ITool[]> {
        return this._http.get<ITool[]>(this._toolUrl)
            // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getTool(id: number): Observable<ITool> {
        return this.getTools()
            .map((tools: ITool[]) => tools.find(p => p.toolId === id));
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}



// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { ITool } from './tool';

// @Injectable()
// export class ToolService {
//     private _toolUrl = './assets/tools/tools.json';

//     constructor(private _http: HttpClient) { }

//     getTool(): Observable<ITool[]> {
//         return this._http.get<ITool[]>(this._toolUrl);
//     }
// }
