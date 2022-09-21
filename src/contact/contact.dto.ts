import { ApiProperty } from "@nestjs/swagger";

export class contactMeDto {
    @ApiProperty({
        description: "Type it out here and I will get a text message!",
        example: "Hey Raj! I have a project to collaborate on. Let's connect.",
      })
    text: string;
}