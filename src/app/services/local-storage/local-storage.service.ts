import { Injectable } from '@angular/core';
import { AlphabetModel } from '../../models/alphabet/alphabet.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  static setData(data: AlphabetModel[]): void {
    localStorage.setItem('data', JSON.stringify(data));
  }

  static getData(): AlphabetModel[] {
    return JSON.parse(localStorage.getItem('data'));
  }
}
