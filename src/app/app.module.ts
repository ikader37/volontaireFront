import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegionComponent } from './administration/region/region.component';
import { RegionFormComponent } from './administration/region/region-form/region-form.component';
import { ProvinceComponent } from './administration/province/province.component';
import { ProvinceFormComponent } from './administration/province/province-form/province-form.component';
import { CommuneComponent } from './administration/commune/commune.component';
import { ComuneFormComponent } from './administration/commune/comune-form/comune-form.component';
import { PathLocationStrategy } from '@angular/common';
import { StructureComponent } from './structure/structure.component';

import { RegionService } from './services/administrationServices/region.service';
import { SpecialiteComponent } from './volontaire/specialite/specialite.component';
import { CandidatureComponent } from './volontaire/candidature/candidature.component';
import { ProvinceService } from './services/administrationServices/province.service';
import { ProjetService } from './services/volontaire/projet.service';
import { PersonneService } from './services/volontaire/personne.service';
import { SpecialiteService } from './services/volontaire/specialite.service';
import { ProjetComponent } from './volontaire/projet/projet.component';
import { ProjetFormComponent } from './volontaire/projet/projet-form/projet-form.component';
import { SpecialiteFormComponent } from './volontaire/specialite/specialite-form/specialite-form.component';
import { CandidatureFormComponent } from './volontaire/candidature/candidature-form/candidature-form.component';
import { CandidatureService } from './services/volontaire/candidature.service';
import { DetailsProjetComponent } from './volontaire/projet/details-projet/details-projet.component';
import { StructureAccueilService } from './services/administrationServices/structure-accueil.service';
import { StructureFormComponent } from './structure/structure-form/structure-form.component';
import { LoginstructureComponent } from './structure/loginstructure/loginstructure.component';
import { EditPersonneComponent } from './personne/edit-personne/edit-personne.component';
import { PersonLoginComponent } from './personne/person-login/person-login.component';
import { PersonneComponent } from './personne/personne.component';
import { PersonneFormComponent } from './personne/personne-form/personne-form.component';
import { PersonneDashboardComponent } from './personne/personne-dashboard/personne-dashboard.component';
import { PartenaireFinancierComponent } from './partenaire-financier/partenaire-financier.component';
import { FinanceComponent } from './finance/finance.component';




const appRoutes: Routes = [
  
  {path: 'projets', component: ProjetComponent},
  {path: 'projet/new', component: ProjetFormComponent},
  {path: 'detailsProjet', component: DetailsProjetComponent},

  {path: 'homes', component: HomeComponent},
  {path: 'regions', component: RegionComponent},
  {path: 'region/new', component: RegionFormComponent},
  {path: 'provinces', component: ProvinceComponent},
  {path: 'province/new', component: ProvinceFormComponent},
  {path: 'communes', component: CommuneComponent},
  {path: 'commune/new', component: ComuneFormComponent},
  {path: 'structures', component: StructureComponent},
  {path: 'structure/new', component: StructureFormComponent},
  {path: 'specialites', component: SpecialiteComponent},
  {path: 'specialite/new', component: SpecialiteFormComponent},
  {path: 'personnes', component: PersonneComponent},
  {path: 'personne/new', component: PersonneFormComponent},
  {path: 'personne/edit', component: EditPersonneComponent},
  {path: 'personne/login', component: PersonLoginComponent},
  {path: 'candidatures', component: CandidatureComponent},
  {path: 'candidature/new', component: CandidatureFormComponent },
  {path: 'structure/login', component: LoginstructureComponent },
  {path: 'personne/dashboard', component: PersonneDashboardComponent },
  {path: 'partenaireFinancier/new', component: PartenaireFinancierComponent },

  {path: '', redirectTo:'homes',pathMatch:'full'},
  {path: '**', redirectTo:'homes'}

];


@NgModule({
  declarations: [
    AppComponent,
    ProjetComponent,
    HeaderComponent,
    HomeComponent,
    RegionComponent,
    RegionFormComponent,
    ProvinceComponent,
    ProvinceFormComponent,
    CommuneComponent,
    ComuneFormComponent,
    StructureComponent,
    StructureFormComponent,
    PersonneComponent,
    SpecialiteComponent,
    CandidatureComponent,
    ProjetFormComponent,
    SpecialiteFormComponent,
    PersonneFormComponent,
    CandidatureFormComponent,
    DetailsProjetComponent,
    LoginstructureComponent,
    EditPersonneComponent,
    PersonLoginComponent,
    PersonneDashboardComponent,
    PartenaireFinancierComponent,
    FinanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    RegionService,
    ProvinceService,
    ProjetService,
    PersonneService,
    SpecialiteService,
    CandidatureService,
    StructureAccueilService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
