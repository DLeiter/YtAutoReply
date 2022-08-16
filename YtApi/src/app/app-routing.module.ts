import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelDetailsComponent } from './pages/channel-details/channel-details.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'channel-details', component: ChannelDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent, 
  ChannelDetailsComponent
];