import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  noti_num : number =15;
  user_img : string = "../assets/user.jpg";
  invoices : Invoice[] = [
    {
      id: 1,
      status: 'available',
      pathrooms: 2,
      bedrooms: 3,
      size: 250,
      unit_num: 255,
      floor: 1,
      unit_name: 'Villa 9', 
    },
    {
      id: 2,
      status: 'unavailable',
      pathrooms: 2,
      bedrooms: 3,
      size: 250,
      unit_num: 255,
      floor: 1,
      unit_name: 'Villa 9', 
    },
    {
      id: 3,
      status: 'unavailable',
      pathrooms: 2,
      bedrooms: 3,
      size: 250,
      unit_num: 255,
      floor: 1,
      unit_name: 'Villa 9', 
    },
    {
      id: 4,
      status: 'available',
      pathrooms: 2,
      bedrooms: 3,
      size: 250,
      unit_num: 255,
      floor: 1,
      unit_name: 'Villa 9', 
    },
    {
      id: 5,
      status: 'available',
      pathrooms: 2,
      bedrooms: 3,
      size: 250,
      unit_num: 255,
      floor: 1,
      unit_name: 'Villa 9', 
    },
    {
      id: 6,
      status: 'available',
      pathrooms: 2,
      bedrooms: 3,
      size: 250,
      unit_num: 255,
      floor: 1,
      unit_name: 'Villa 9', 
    },
    {
      id: 7,
      status: 'unavailable',
      pathrooms: 2,
      bedrooms: 3,
      size: 250,
      unit_num: 255,
      floor: 1,
      unit_name: 'Villa 9', 
    },
    {
      id: 8,
      status: 'available',
      pathrooms: 2,
      bedrooms: 3,
      size: 250,
      unit_num: 255,
      floor: 1,
      unit_name: 'Villa 9', 
    },
    {
      id: 9,
      status: 'available',
      pathrooms: 2,
      bedrooms: 3,
      size: 250,
      unit_num: 255,
      floor: 1,
      unit_name: 'Villa 9', 
    },
    {
      id: 10,
      status: 'available',
      pathrooms: 2,
      bedrooms: 3,
      size: 250,
      unit_num: 255,
      floor: 1,
      unit_name: 'Villa 9', 
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
