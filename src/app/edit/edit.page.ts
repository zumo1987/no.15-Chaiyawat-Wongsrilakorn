import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  member:any =[]; //ประกาศมาเพื่อไปรับค่าจาก serbice 
  
   id_stu: any;
   name: any;
   nname: any;
   age: any;
   phone: any;
   address: any;
   status: any;
  constructor(private http:DataapiService, private nav:Router) { }

  ngOnInit() {
    // สั่งให้ทำงานพร้อมเปิดหน้าเพจ
    this.member = this.http.datadetail;
    console.log(this.member);
  }

  editMeber(){
    let dataEdit = {
      id:this.member.id,
      id_stu:this.member.id_stu,
      name:this.member.name,
      nname:this.member.nname,
      age:this.member.age,
      phone:this.member.phone,
      address:this.member.address,
      status:this.member.status
    }

    this.http.editData(dataEdit).subscribe({
      next:(res:any)=>{
        console.log("แก้ไขข้อมูลสำเร็จ");
        this.nav.navigateByUrl('/home');
      },
      error:(error:any)=>{
        console.log("แก้ไขข้อมูลไม่สำเร็จ",error);
      }
    });
}



}