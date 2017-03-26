import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductsService {
	constructor(private http: Http) { }
	getProducts(){
		return this.http.get('http://localhost:1711/get_all_products')
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
	}
	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}