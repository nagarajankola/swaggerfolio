"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const about_service_1 = require("./about/about.service");
const about_controller_1 = require("./about/about.controller");
const work_experience_service_1 = require("./work-experience/work-experience.service");
const work_experience_controller_1 = require("./work-experience/work-experience.controller");
const about_module_1 = require("./about/about.module");
const contact_module_1 = require("./contact/contact.module");
const projects_module_1 = require("./projects/projects.module");
const education_module_1 = require("./education/education.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [app_controller_1.AppController, about_controller_1.AboutController, work_experience_controller_1.WorkExperienceController],
        providers: [app_service_1.AppService, about_service_1.AboutService, work_experience_service_1.WorkExperienceService],
        imports: [about_module_1.AboutModule, contact_module_1.ContactModule, projects_module_1.ProjectsModule, education_module_1.EducationModule],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map