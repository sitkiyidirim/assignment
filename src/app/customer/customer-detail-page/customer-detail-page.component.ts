import { HttpResponseBase } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerDetailInformationModel } from 'src/app/models/customer-detail-information.model';
import { CustomerDetailInformationService } from 'src/app/services/customer-detail-information.service';

@Component({
  selector: 'app-customer-detail-page',
  templateUrl: './customer-detail-page.component.html',
  styleUrls: ['./customer-detail-page.component.css']
})
export class CustomerDetailPageComponent implements OnInit {
   infor:any;
  constructor(private customerDetailInformatinService: CustomerDetailInformationService) {}

  ngOnInit(): void {
    this.customerDetailInformatinService.getCustomerDetailInformation().subscribe(data => {
      this.infor=data;
    })
  }

}
