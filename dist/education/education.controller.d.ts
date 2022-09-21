import { EducationService } from './education.service';
export declare class EducationController {
    private educationService;
    constructor(educationService: EducationService);
    getEducation(): {
        institute: string;
    }[];
}
