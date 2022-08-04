import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelDetailsComponent } from './channel-details/channel-details.component';

const routes: Routes = [
  {path: 'channel-details', component: ChannelDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ChannelDetailsComponent];