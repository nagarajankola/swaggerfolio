import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from "@nestjs/swagger";
import { AboutService } from './about.service';

@Controller('about')
export class AboutController {
    constructor(private aboutService: AboutService) { }

    @Get()
    @ApiOperation({ summary: "a short description about me :)" })
    getAbout() {
        return this.aboutService.getAbout();
    }
}
