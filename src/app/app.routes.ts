import { Routes } from '@angular/router';
import { ExecutiveManagementComponent } from './executive-management/executive-management.component';

export const routes: Routes = [
    {
        path: "executive-management",
        component: ExecutiveManagementComponent
    },
    {
        path: "**",
        redirectTo: "/executive-management",
        pathMatch: "full"
    }
];
