import { Injectable } from '@angular/core';

import { Data } from '../app/dropdown/data.model';
import { DATA } from '../app/dropdown/mock-data';


@Injectable()
export class DataService {

  constructor() { }

  getData() {
    return DATA;
  }

}
