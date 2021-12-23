import { Component, OnInit } from '@angular/core';
import { Graph } from '../graph'

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  graphs:Graph[]=[
    {id:1, name:'Active Leases', small_num:-5.23, big_num:27},
    {id:1, name:'Future Leases', small_num:132, big_num:31},
    {id:1, name:'Bloced Leases', small_num:-5.23, big_num:17},
    {id:1, name:'Expired Leases', small_num:75.69, big_num:14}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
