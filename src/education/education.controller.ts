import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from "@nestjs/swagger";
import { EducationService } from './education.service';

@Controller('education')
export class EducationController {
    constructor(private educationService: EducationService) { }

    @Get()
    @ApiOperation({ summary: "my schooling?" })
    getEducation() {
        return this.educationService.getEducation();
    }
}
