import { WorkExperienceService } from './work-experience.service';
export declare class WorkExperienceController {
    private workExperienceService;
    constructor(workExperienceService: WorkExperienceService);
    getExperience(): {
        comp: string;
        role: string;
    }[];
}
