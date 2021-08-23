import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import * as en from '../../../assets/i18n/en.json';
import * as ar from '../../../assets/i18n/ar.json';
import { of } from 'rxjs';

export class CustomTranslateLoader extends TranslateHttpLoader {
    private customHttp;
    constructor(http: HttpClient, prefix?: string, suffix?: string) {
        super(http, prefix, suffix);
        this.customHttp = http;
    }

    getTranslation(lang?: string) {
        /**
         * The function get the current language from CMS or from Local file ,
         * @param {any} lang - language may be English or Arabic
         * @returns {Observable} of the current language
         */
        switch (lang) {
            case 'en':
                return of(en);
            case 'ar':
                return of(ar);;
        }
    }
}
