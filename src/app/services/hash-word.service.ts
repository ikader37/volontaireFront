import { Injectable } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';


@Injectable({
  providedIn: 'root'
})
export class HashWordService {

  md5 = new Md5();
  constructor() { }

  hashWord(word:string){
      return this.md5.appendStr(word).end().toString();
  }
}
