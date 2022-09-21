import { Injectable } from '@nestjs/common';
import { contact } from '../utils/data';

@Injectable()
export class ContactService {
    getContact() {
        return contact;
    }

    getInTouch() {
        console.log("Reached you !");
        
    }
}
