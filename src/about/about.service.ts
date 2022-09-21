import { Injectable } from '@nestjs/common';
import { about } from '../utils/data';

@Injectable()
export class AboutService {
    getAbout() {
        return about;
    }
}
