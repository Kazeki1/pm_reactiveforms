import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ITool } from '../tool';
import { ToolService } from '../tool.service';

@Component({
  templateUrl: './tool-detail.component.html',
  styleUrls: ['./tool-detail.component.css']
})
export class ToolDetailComponent implements OnInit {
  pageTitle: string = 'Tool Detail';
  errorMessage: string;
  tool: ITool;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _ToolService: ToolService) {
  }

  getTool(id: number) {
    this._ToolService.getTool(id).subscribe(
      tool => this.tool = tool,
      error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getTool(id);
    }
  }

  onBack(): void {
    this._router.navigate(['/tool']);
  }
}
