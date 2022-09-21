import { Injectable } from '@nestjs/common';
import { education } from '../utils/data';

@Injectable()
export class EducationService {
    getEducation() {
        return education;
    }
}
