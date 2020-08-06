import {Component, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';
import {AppConstants} from '../app.constants';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage
{
    public photosRaw = new Array<PhotoModel>();
    public data = new Array<PhotoModel>();
    public page = 0;

    public limit = 20;

    @ViewChild(IonInfiniteScroll)
    private infiniteScroll: IonInfiniteScroll;

    public constructor() {}

    public ionViewWillEnter(): void {
        for (let i = 1; i <= AppConstants.PHOTOS.LIST_NUMBER; i++) {
            this.data.push({
                id: i,
                photo: AppConstants.PHOTOS.PATTERN_URL.replace(AppConstants.PHOTOS.KEY_ID, i.toString()),
                text: AppConstants.PHOTOS.PATTERN_TXT.replace(AppConstants.PHOTOS.KEY_ID, i.toString())
            });
        }

        this.getPhotos();
    }

    public loadMore(event) {
        console.log(event);
        setTimeout(() => {
            this.getPhotos();
            event.target.complete();

            if ( (this.page * this.limit + this.limit) >= AppConstants.PHOTOS.LIST_NUMBER) {
                event.target.disabled = true;
            }
            console.log('loading more... next page:', this.page);
        }, 500);
    }

    protected getPhotos() {
        console.log('page is', this.page);
        Array.prototype.push.apply(this.photosRaw, this.data.slice(this.page * this.limit, (this.page * this.limit) + this.limit - 1));
        this.page++;
    }

}
