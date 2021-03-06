import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataTableParams } from 'angular-4-data-table/src';
import 'rxjs/add/operator/toPromise';


const BASE_URL = 'http://rtq.chicheongweng.com:3000';

function paramsToQueryString(params: DataTableParams) {
    const result = [];

    if (params.offset != null) {
        result.push(['_start', params.offset]);
    }
    if (params.limit != null) {
        result.push(['_limit', params.limit]);
    }
    if (params.sortBy != null) {
        result.push(['_sort', params.sortBy]);
    }
    if (params.sortAsc != null) {
        result.push(['_order', params.sortAsc ? 'ASC' : 'DESC']);
    }

    return result.map(param => param.join('=')).join('&');
}


@Injectable()
export class RemoteService {

    constructor (private http: Http) {}

    query(params: DataTableParams) {
        return this.http.get(BASE_URL + '/securities?' + paramsToQueryString(params)).toPromise()
            .then((resp: Response) => ({
                items: resp.json(),
                count: Number(resp.headers.get('X-Total-Count'))
            }));
    }
}
