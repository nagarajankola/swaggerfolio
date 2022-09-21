import { AboutService } from './about.service';
export declare class AboutController {
    private aboutService;
    constructor(aboutService: AboutService);
    getAbout(): string;
}
