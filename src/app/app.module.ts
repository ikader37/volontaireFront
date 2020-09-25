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
import { AuthGaurdService } from './services/administrationServices/auth-gaurd.service';
import { LoginComponent } from './administration/login/login.component';
import { LogoutComponent } from './administration/logout/logout.component';




const appRoutes: Routes = [
  
  {path: 'projets', component: ProjetComponent, canActivate:[AuthGaurdService]},
  {path: 'projet/new', component: ProjetFormComponent, canActivate:[AuthGaurdService]},
  {path: 'detailsProjet', component: DetailsProjetComponent, canActivate:[AuthGaurdService]},

  {path: 'homes', component: HomeComponent, canActivate:[AuthGaurdService]},
  {path: 'regions', component: RegionComponent, canActivate:[AuthGaurdService]},
  {path: 'region/new', component: RegionFormComponent, canActivate:[AuthGaurdService]},
  {path: 'provinces', component: ProvinceComponent, canActivate:[AuthGaurdService]},
  {path: 'province/new', component: ProvinceFormComponent, canActivate:[AuthGaurdService]},
  {path: 'communes', component: CommuneComponent, canActivate:[AuthGaurdService]},
  {path: 'commune/new', component: ComuneFormComponent, canActivate:[AuthGaurdService]},
  {path: 'structures', component: StructureComponent, canActivate:[AuthGaurdService]},
  {path: 'structure/new', component: StructureFormComponent, canActivate:[AuthGaurdService]},
  {path: 'specialites', component: SpecialiteComponent, canActivate:[AuthGaurdService]},
  {path: 'specialite/new', component: SpecialiteFormComponent, canActivate:[AuthGaurdService]},
  {path: 'personnes', component: PersonneComponent, canActivate:[AuthGaurdService]},
  {path: 'personne/new', component: PersonneFormComponent, canActivate:[AuthGaurdService]},
  {path: 'personne/edit', component: EditPersonneComponent, canActivate:[AuthGaurdService]},
  {path: 'personne/login', component: PersonLoginComponent, canActivate:[AuthGaurdService]},
  {path: 'candidatures', component: CandidatureComponent, canActivate:[AuthGaurdService]},
  {path: 'candidature/new', component: CandidatureFormComponent , canActivate:[AuthGaurdService]},
  {path: 'structure/login', component: LoginstructureComponent, canActivate:[AuthGaurdService] },
  {path: 'personne/dashboard', component: PersonneDashboardComponent , canActivate:[AuthGaurdService]},
  {path: 'partenaireFinancier/new', component: PartenaireFinancierComponent, canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent , canActivate:[AuthGaurdService]},

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
    FinanceComponent,
    LoginComponent,
    LogoutComponent,
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
