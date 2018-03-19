import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class StorageService {

  constructor(private cookiesService: CookieService) { }

  // check for localstorage in browser
  localStorageSupport() {
    try {
       window.localStorage.setItem('test', 'random');
    } catch (e) {
        return false;
    }
    delete window.localStorage['test'];
    return true;
  }

  // store key value in browser supported storage
  setObject(key: string, value) {
    if (this.localStorageSupport()) {
      window.localStorage[key] = JSON.stringify(value);
    } else {
          console.log('for safari');
        this.cookiesService.put(key, value);
    }
  }

  // To get stored value
  getObject(key: string) {
    if (this.localStorageSupport()) {
      return JSON.parse(window.localStorage[key] || null);
    } else {
      console.log('for safari');
      return (this.cookiesService.get(key) || null);
    }
  }

  // Remove Individual key value
  removeStorage(key) {
    if (this.localStorageSupport()) {
      delete localStorage[key];
    } else {
      this.cookiesService.remove(key);
    }
  }

  // remove all stored value in browser
  removeAll() {
    if (this.localStorageSupport()) {
      localStorage.clear();
    } else {
      this.cookiesService.removeAll();
    }
  }
}
