import { NgModule } from '@angular/core';

import { ProgramsComponent } from './page/programs.component';
import { ProgramsRoutingModule } from './programs.routing';
import { PipelineComponent } from './page/pipeline/pipeline.component';
import { PlatformComponent } from './page/platform/platform.component';

@NgModule({
    declarations: [
        ProgramsComponent,
        PipelineComponent,
        PlatformComponent,
    ],
    imports: [
        ProgramsRoutingModule
    ],
    exports: [],
    providers: [],
    entryComponents: []
})
export class ProgramsModule {}
