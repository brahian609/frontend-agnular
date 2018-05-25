import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs/Observable';
import {RegistryModel} from '../models/registry-model';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-dialog',
  template: `
   <mat-table [dataSource]="dataSource">
      <ng-container matColumnDef="authNum">
        <mat-header-cell *matHeaderCellDef>
          <mat-checkbox color="primary"></mat-checkbox>
        </mat-header-cell>
        <mat-cell *matCellDef="let row"><mat-checkbox color="primary"></mat-checkbox></mat-cell>
      </ng-container>

      <ng-container matColumnDef="registry">
        <mat-header-cell *matHeaderCellDef>Registry</mat-header-cell>
        <mat-cell *matCellDef="let row"> {{row.registry}}</mat-cell>
      </ng-container>

      <ng-container matColumnDef="billing">
        <mat-header-cell *matHeaderCellDef>Billing</mat-header-cell>
        <mat-cell *matCellDef="let row"> {{row.billing}}</mat-cell>
      </ng-container>

      <ng-container matColumnDef="operator">
        <mat-header-cell *matHeaderCellDef>Operator</mat-header-cell>
        <mat-cell *matCellDef="let row"> {{row.operator}}</mat-cell>
      </ng-container>      

      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
    </mat-table>
    <mat-dialog-actions class="float-right">
      <button mat-raised-button color="primary" (click)="closeDialog()">OK</button>
      <button mat-raised-button color="primary" (click)="closeDialog()">CANCEL</button>
    </mat-dialog-actions>
  `,
})
export class Dialog {
  displayedColumns = ['authNum', 'registry', 'billing', 'operator'];
  dataSource = new ModelDataSource(this.dataService);

  constructor(
    private dataService: DataService,
    private dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

}

export class ModelDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<RegistryModel[]> {
    return this.dataService.getRegistriesList();
  }

  disconnect() {
  }
}

