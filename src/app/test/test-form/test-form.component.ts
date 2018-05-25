import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Dialog} from './dialog';
import {MatDialog} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs/Observable';
import {AuthModel} from '../models/auth-model';
import {BillingModel} from '../models/billing-model';

@Component({
  selector: 'app-test-form',
  templateUrl: 'test-form.component.html',
  styleUrls: ['test-form.component.css'],
  providers: []
})
export class TestFormComponent implements OnInit {
  date = new FormControl(new Date());
  displayedColumns = ['authNum', 'seq', 'icao', 'airportCity', 'date', 'handler', 'status'];
  dataSource = new ModelDataSource(this.dataService);
  bills: BillingModel[];
  billSelected = null;


  constructor(public dialog: MatDialog, private dataService: DataService) {
  }

  ngOnInit() {
    this.loadBillings();
  }

  loadBillings() {
    this.dataService.getBillingList()
      .subscribe(response => {
        this.bills = response;
        this.billSelected = this.bills[0].id;
      });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(Dialog, {
      width: '550px',
      height: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}


export class ModelDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<AuthModel[]> {
    return this.dataService.getAuthList();
  }

  disconnect() {
  }
}

