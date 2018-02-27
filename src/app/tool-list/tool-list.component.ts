import { Component, OnInit } from '@angular/core';
import { ToolService } from '../tool.service';
import { ITool } from '../tool';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {
  toolWidth: number = 100;
  toolMargin: number = 2;
  pageTitle: string = 'Tool List';
  showImage: boolean = true;
  tools: ITool[] = [];

  constructor(private _toolService: ToolService) {
    this.filteredTools = this.tools;
    this.listFilter = '';
  }

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredTools = this._listFilter ?
      this.performFilter(this.listFilter) : this.tools;
  }

  filteredTools: ITool[];

  performFilter(filterBy: string): ITool[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.tools.filter((tool: ITool) =>
      tool.toolName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Tool List ' + message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }


  ngOnInit(): void {
    this._toolService.getTools()
      .subscribe(tools => {
        this.tools = tools;
        this.filteredTools = this.tools;
      },
    );
  }

}
