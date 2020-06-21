import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PositionService } from 'src/app/shared/position.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  constructor(public pservice: PositionService, private router: Router, private toastr : ToastrService ) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.pservice.formdata = {
      id: null,
      Name: '',
    }
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.pservice.addItems(data).subscribe(data=>{console.log(data);
      this.router.navigate(['']);
      })
    else
      this.pservice.updatePosition(data).subscribe(data=>{console.log(data);
      this.router.navigate(['']);
      })
    this.resetForm(form);
    this.toastr.success('Submitted successfully', 'EMP. Register');
  }

}
