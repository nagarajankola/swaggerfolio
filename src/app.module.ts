import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutService } from './about/about.service';
import { AboutController } from './about/about.controller';
import { WorkExperienceService } from './work-experience/work-experience.service';
import { WorkExperienceController } from './work-experience/work-experience.controller';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { ProjectsModule } from './projects/projects.module';
import { EducationModule } from './education/education.module';

@Module({
  controllers: [AppController, AboutController, WorkExperienceController],
  providers: [AppService, AboutService, WorkExperienceService],
  imports: [ AboutModule, ContactModule, ProjectsModule, EducationModule],
})

export class AppModule {}