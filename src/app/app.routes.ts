import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ContactComponent } from './contact/contact.component';
import { NoticesComponent } from './notices/notices.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'activities',
        component: ActivitiesComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'notice',
        component: NoticesComponent
    }
];
