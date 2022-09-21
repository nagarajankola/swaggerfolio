import { ContactService } from './contact.service';
export declare class ContactController {
    private contactService;
    constructor(contactService: ContactService);
    getContact(): {
        email: string;
        github: string;
        linkedIn: string;
        phone: string;
    }[];
    getInTouch(): void;
}
