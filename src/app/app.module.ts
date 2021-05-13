// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Directives
import { GallaryDetailsDirective } from './directives/gallary-details.directive';

// Routing
import { AppRoutingModule } from './app-routing/app-routing.module';

// Components
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';

// icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// NGX UI
import { NgScrollbarModule } from 'ngx-scrollbar';

// Bootstrap UI
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Angular Material UI
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

// Taiga UI
import { TuiDialogModule, TuiNotificationsModule, TuiRootModule, TuiScrollbarModule } from '@taiga-ui/core';

// Pipes
import { ShortenPipe } from './Pipes/shorten.pipe';

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
    GallaryDetailsDirective,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    LayoutModule,
    NgScrollbarModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatCardModule,
    TuiRootModule,
    TuiNotificationsModule,
    TuiDialogModule,
    TuiScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
