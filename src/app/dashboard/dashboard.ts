import { Component } from '@angular/core';
import { RemoteService } from './dashboard-service';


@Component({
    selector: 'dashboard',
    providers: [RemoteService],
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.css']
})
export class Dashboard {

    items = [];
    itemCount = 0;
    timer;
    params;

    constructor(private remoteService: RemoteService) {
        this.timer = setInterval(() => {
            this.reloadItems(this.params);
        },5 * 1000);
    }

    reloadItems(params) {
        this.params = params;
        this.remoteService.query(params).then(result => {
            this.items = result.items;
            this.itemCount = result.count;
        });
    }

    ngOnDestroy() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
}
