import { Injectable } from '@nestjs/common';
import { projects } from '../utils/data';

@Injectable()
export class ProjectsService {
    getProjects() {
        return projects;
    }
}
