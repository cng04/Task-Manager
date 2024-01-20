// This is the module where all the modules from the Angular Material Module will be stored so they can be 
// used when this module is exported

import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatMenu, MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// Importing allows the components of these modules to be used by the custom-material module
@NgModule({
    imports: [
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatMenuModule,
        MatTableModule,
        MatListModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],

// Exporting dictates which modules will be exported from the custom-material module
// This will allow other modules where custom-material module is imported in to use these modules from Angular Material
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatMenuModule,
        MatTableModule,
        MatListModule,
        MatIconModule,
        MatDatepickerModule
    ],
})

export class CustomMaterialModule {}