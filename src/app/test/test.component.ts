import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {DataService} from './services/data.service';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import {Model} from './models/model';

@Component({
  selector: 'app-test',
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.css']
})
export class TestComponent implements OnInit {
  date = new FormControl(new Date());
  displayedColumns = ['authNum', 'createdBy', 'requestNum', 'customer', 'trip', 'tail', 'operator', 'billTo', 'creditStatus'];
  dataSource = new ModelDataSource(this.dataService);

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

}

export class ModelDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Model[]> {
    return this.dataService.getDataList();
  }

  disconnect() {
  }
}
