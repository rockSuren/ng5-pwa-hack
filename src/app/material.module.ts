import { NgModule } from '@angular/core';
import {
MatAutocompleteModule, MatButtonModule, 
MatIconModule, MatInputModule, 
MatListModule, MatMenuModule, MatCardModule,
MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSortModule, 
MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule, 
MatFormFieldModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule,MatCheckboxModule ,MatTooltipModule,MatDialogModule}
from '@angular/material'; 
import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
        imports:[
            MatAutocompleteModule, MatButtonModule, 
MatIconModule, MatInputModule, 
MatCardModule,
MatListModule, MatMenuModule, 
MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSortModule, 
MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule, 
MatFormFieldModule, MatExpansionModule,MatDatepickerModule,MatNativeDateModule,
FlexLayoutModule,MatCheckboxModule,MatTooltipModule,MatDialogModule
        ],
        exports:[MatAutocompleteModule, MatButtonModule, 
            MatCardModule,
            MatIconModule, MatInputModule, 
            MatListModule, MatMenuModule, 
            MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSortModule, 
            MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule, MatDatepickerModule,
            MatFormFieldModule, MatExpansionModule,FlexLayoutModule,MatNativeDateModule,MatCheckboxModule,MatTooltipModule,MatDialogModule],
            providers:[],
            declarations:[]
})
export class MaterialModule{ }