import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  member: any = [];

  constructor(
    private http: DataapiService,
    public dataapi: HttpClient,
    private nav: NavController
  ) {}

  ngOnInit() {
    this.loadDataMen(); // Call loadDataMen when the page initializes
  }

  loadDataMen(event?: any) {
    this.http.listMember().subscribe({
      next: (res: any) => {
        console.log(res);
        this.member = res;
        if (event) event.target.complete(); // Complete the refresher if triggered by ionRefresh
      },
      error: (error: any) => {
        console.log('Error:', error);  // Log the error correctly
        if (event) event.target.complete(); // Ensure the refresher completes even if there's an error
      }
    });
  }
    

   edit(datamem:any){
    this.http.datadetail = datamem;
    console.log(this.http.datadetail);  
    this.nav.navigateForward('/edit');
   }

   delMember(id:any){
    this.http.deleteData(id).subscribe({
      next:(res:any)=>{
        console.log(res);
      }
    });
    this.loadDataMen();
   }

}
