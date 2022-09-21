import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiBody } from "@nestjs/swagger";
import { ContactService } from './contact.service';
import { contactMeDto } from './contact.dto';

@Controller('contact')
export class ContactController {
    constructor(private contactService: ContactService) { }

    @Get()
    @ApiOperation({ summary: "reach out to me at 👇" })
    getContact() {
        return this.contactService.getContact();
    }

    @Post("/get-in-touch")
    @ApiBody({
        type: contactMeDto,
        required: true,
        description: "Contact Payload",
    })
    @ApiOperation({ summary: "you can now reach out to me with just a click" })
    getInTouch() {
        return this.contactService.getInTouch();
    }
}
