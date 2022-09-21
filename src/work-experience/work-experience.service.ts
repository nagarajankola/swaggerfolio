import { Injectable } from '@nestjs/common';
import { experience } from "../utils/data";

@Injectable()
export class WorkExperienceService {
    getExperience(){
        return experience;
    }
}
