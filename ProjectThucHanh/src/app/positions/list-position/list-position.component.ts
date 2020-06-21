import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PositionService } from 'src/app/shared/position.service';
import { Position } from 'src/app/shared/position.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-position',
  templateUrl: './list-position.component.html',
  styleUrls: ['./list-position.component.css']
})
export class ListPositionComponent implements OnInit {
  searchText;
  constructor(private pservice: PositionService, private toastr: ToastrService ) { }
  positionList: Observable<Position[]>;
  ngOnInit(): void {
    this.positionList = this.pservice.getItems();
  }
  onEdit(pos: Position) {
    this.pservice.formdata = Object.assign({}, pos);
  }
  onDelete(pos: Position) {
    if (confirm("Are you sure to delete this record?")) {
      this.pservice.deletePosition(pos.id).subscribe(data=>{
        console.log(data);
      })
      this.toastr.warning('Deleted successfully','EMP. Register');
    }
  }
}
