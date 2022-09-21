import { Controller, Get } from '@nestjs/common';
import { WorkExperienceService } from './work-experience.service'

@Controller('work-experience')
export class WorkExperienceController {
    constructor(private workExperienceService: WorkExperienceService){}

    @Get()
    getExperience(){
        return this.workExperienceService.getExperience();
    }
}
