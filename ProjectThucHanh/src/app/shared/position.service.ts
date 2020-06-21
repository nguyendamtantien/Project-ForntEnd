import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Position } from './position.model';
@Injectable({
  providedIn: 'root'
})
export class PositionService {
  formdata: Position;

  constructor(private http: HttpClient) { }

	getItems():Observable <Position[]>{
		return this.http.get<Position[]>('http://localhost:8000/api/position/');
  }
  addItems(position: Position){
    return this.http.post('http://localhost:8000/api/insert', position);
  }
  deletePosition(id: string){
    return this.http.delete('http://localhost:8000/api/position' +id)
  }
  updatePosition(position: Position){
    return this.http.put('http://localhost:8000/api/position'+ position.id, position);
  }
  
}
