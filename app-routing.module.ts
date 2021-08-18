import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'exercise',
    loadChildren: () => import('./exercise/exercise.module').then( m => m.ExercisePageModule)
  },
  {
    path: 'plans',
    loadChildren: () => import('./plans/plans.module').then( m => m.PlansPageModule)
  },
  {
    path: 'more',
    loadChildren: () => import('./more/more.module').then( m => m.MorePageModule)
  },
  {
    path: 'aboutme',
    loadChildren: () => import('./aboutme/aboutme.module').then( m => m.AboutmePageModule)
  },
  {
    path: 'bicep',
    loadChildren: () => import('./bicep/bicep.module').then( m => m.BicepPageModule)
  },
  {
    path: 'tricep',
    loadChildren: () => import('./tricep/tricep.module').then( m => m.TricepPageModule)
  },
  {
    path: 'chest',
    loadChildren: () => import('./chest/chest.module').then( m => m.ChestPageModule)
  },
  {
    path: 'shoulder',
    loadChildren: () => import('./shoulder/shoulder.module').then( m => m.ShoulderPageModule)
  },
  {
    path: 'cardio',
    loadChildren: () => import('./cardio/cardio.module').then( m => m.CardioPageModule)
  },
  {
    path: 'calf',
    loadChildren: () => import('./calf/calf.module').then( m => m.CalfPageModule)
  },
  {
    path: 'back',
    loadChildren: () => import('./back/back.module').then( m => m.BackPageModule)
  },
  {
    path: 'forearm',
    loadChildren: () => import('./forearm/forearm.module').then( m => m.ForearmPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
