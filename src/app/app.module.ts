import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// *------------------ Router -----------------*/
import { AppRoutingModule } from './app-routing/app-routing.module';

// *------------------ Comoponents -----------------*/
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { AboutComponent } from './about/about.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';

// *------------------ Icon Library -----------------*/
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// *------- Pipe -------*/
import { ShortenPipe } from './Pipes/shorten.pipe';

// *------------------ NGX Loader Componenets -----------------*/
import {
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
} from 'ngx-ui-loader';

const ngxUiLoaderConfigurations: NgxUiLoaderConfig = {
  bgsColor: '#0072e1',
  bgsOpacity: 0.8,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'ball-spin-clockwise',
  blur: 5,
  delay: 0,
  fastFadeOut: true,
  fgsColor: '#0072e1',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'ball-spin-clockwise',
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgb(40,40,40)',
  pbColor: '#0072e1',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
  text: '',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  maxTime: -1,
  minTime: 300,
};

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ErrorHandleComponent,
    RecipeEditComponent,
    ShortenPipe,
    FooterComponent,
    AboutComponent,
    UpgradeComponent,
    FeaturesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    FlexLayoutModule,
    LayoutModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfigurations),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
