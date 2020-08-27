import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DescriptionImageComponent } from './components/description-image/description-image.component';
import { CompanyVisionCardComponent } from './components/company-vision-card/company-vision-card.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { TestimonialContainerComponent } from './components/testimonial-container/testimonial-container.component';
import { TestimonialCaroselComponent } from './components/testimonial-carosel/testimonial-carosel.component';
import { CompanyConversationComponent } from './components/company-conversation/company-conversation.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    DescriptionImageComponent,
    CompanyVisionCardComponent,
    TestimonialCardComponent,
    TestimonialContainerComponent,
    TestimonialCaroselComponent,
    CompanyConversationComponent,
    FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
