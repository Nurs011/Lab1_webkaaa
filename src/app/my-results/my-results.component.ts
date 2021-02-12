import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-my-results',
  templateUrl: './my-results.component.html',
  styleUrls: ['./my-results.component.css']
})
export class MyResultsComponent implements OnInit {
  @Input() tableData;
  @Output() doTableEmpty = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickNewBtn(): void {
    this.doTableEmpty.emit();
  }

}
