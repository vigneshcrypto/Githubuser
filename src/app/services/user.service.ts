import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpHeaders, HttpClient, HttpParams, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";
import { throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

let headers = new HttpHeaders(); 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
		headers = headers.set("Content-Type", "application/json");
  }
  
  private formatErrors(error: any) {
		return throwError(error);
	}


	getUserList(params){
		let path = '/users';
			let baseUrl = environment.api_url;

			return this.http.get(`${baseUrl}${path}${params}`, {headers: headers }).pipe(
				map((res: Response) => {
					return res;
				}),
				catchError(this.formatErrors.bind(this))
			);
	}
	getUserRepoList(params,user){
	let path = '/users/'+user+'/repos';
		let baseUrl = environment.api_url;

		return this.http.get(`${baseUrl}${path}${params}`, {headers: headers }).pipe(
			map((res: Response) => {
				return res;
			}),
			catchError(this.formatErrors.bind(this))
		);
	}
	getSearchUserList(params){
		let path = '/search/users';
		let baseUrl = environment.api_url;

		return this.http.get(`${baseUrl}${path}${params}`, {headers: headers }).pipe(
			map((res: Response) => {
				return res;
			}),
			catchError(this.formatErrors.bind(this))
		);
	}

	getUserData(params,name){
		let path = '/users/'+name;
		let baseUrl = environment.api_url;

		return this.http.get(`${baseUrl}${path}${params}`, {headers: headers }).pipe(
			map((res: Response) => {
				return res;
			}),
			catchError(this.formatErrors.bind(this))
		);
	}
}
