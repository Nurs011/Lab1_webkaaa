import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {JoggingDiary} from '../jogging-diary';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  joggingDiary = new JoggingDiary(new Date(), 0, 0);
  @Output() addNew = new EventEmitter<JoggingDiary>();

  constructor() { }

  ngOnInit(): void {
  }

  saveNew(): void {
    console.log(this.joggingDiary);
    this.addNew.emit(this.joggingDiary);
    this.joggingDiary = new JoggingDiary(new Date(), 0, 0);
  }
}
