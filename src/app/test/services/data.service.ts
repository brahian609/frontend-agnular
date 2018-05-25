import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Model} from '../models/model';
import {AuthModel} from '../models/auth-model';
import {BillingModel} from '../models/billing-model';
import {RegistryModel} from '../models/registry-model';


@Injectable()
export class DataService {
  API_URL: string;

  constructor(private httpClient: HttpClient) {
    this.API_URL = `${environment.host}`;
  }

  getDataList(): Observable<Model[]> {
    return this.httpClient.get<Model[]>(`${this.API_URL}/samuel/requestList.json`);
  }

  getAuthList(): Observable<AuthModel[]> {
    return this.httpClient.get<AuthModel[]>(`${this.API_URL}/samuel/authList.json`);
  }

  getBillingList(): Observable<BillingModel[]> {
    return this.httpClient.get<BillingModel[]>(`${this.API_URL}/samuel/billing.json`);
  }

  getRegistriesList(): Observable<RegistryModel[]> {
    return this.httpClient.get<RegistryModel[]>(`${this.API_URL}/samuel/registry.json`);
  }

}
