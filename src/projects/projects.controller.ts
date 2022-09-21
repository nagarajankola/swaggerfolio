import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from "@nestjs/swagger";
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private projectsService: ProjectsService) { }

    @Get()
    @ApiOperation({ summary: "checkout my projects" })
    getProjects() {
        return this.projectsService.getProjects();
    }
}
