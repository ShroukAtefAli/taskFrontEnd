import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { adminArray, userArray } from './shared/constants/defines'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  direction: string;
  activeTab:string;
  tabs:any[];

  constructor (private translate: TranslateService,private router:Router) {
    let lang = localStorage.getItem('lang')||'en';
    translate.setDefaultLang(lang);
    translate.use(lang);
  }

  ngOnInit() {
    this.language();
    this.checkRoute();
  }

  checkRoute(){

    this.tabs = localStorage.getItem('userRole') == 'admin' ? adminArray : userArray;
    this.activeTab = this.tabs[0].name;

  }

  tabChange(e){
    this.activeTab = e.name;
  }

  language(){
    this.translate.use(this.translate.currentLang==='ar'?'en':'ar');
    this.direction = this.translate.currentLang==='ar'?'rtl':'ltr';

  }

}
