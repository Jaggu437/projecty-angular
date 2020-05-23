import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {ProjectRole} from '../../../models/ProjectRole';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectRoles: ProjectRole[];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      console.log(data);
      this.projectRoles = data.projectRoles;
    });
  }
}