import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AboutPage } from "../pages/about/about.page";
import { PlansPage } from "../pages/plans/plans.page";
import { GiftPage } from "../pages/gift/gift.page";
import { EcoPage } from "../pages/eco/eco.page";
import { FooterComponent } from "./footer/footer.component";

const routes: Routes = [
   
    {
        path: 'about',
        component: AboutPage
    },
    {
        path: 'plans',
        component: PlansPage
    },
    {
        path: 'gift',
        component: GiftPage
    },
    {
        path: 'eco',
        component: EcoPage
    }
]

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [
        CommonModule, 
        IonicModule,
        RouterModule.forChild(routes)
    ],
    exports: [HeaderComponent, FooterComponent],
})
export class SharedComponentsModule { }