import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsService } from '@app/Core/services/admin-and-news-service/news.service';
import { INews } from '@app/shared/models/INews';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-news-portal',
  templateUrl: './add-news-portal.component.html',
})
export class AddNewsPortalComponent implements OnInit {
  newsForm: FormGroup;

  constructor(private fb: FormBuilder, private newsDb: NewsService,private toastrService:ToastrService,private route:Router) {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
    this.newsForm = this.fb.group({
      title: ['', [Validators.required,Validators.minLength(5)]],
      description: ['', Validators.required],
      summary: ['', [Validators.required,Validators.maxLength(100)]],
      fullNews: ['',[ Validators.required,Validators.pattern(reg)]],
    });
  }

  ngOnInit(): void {}
  addNews(myForm: INews) {
      this.newsDb.addNews(myForm).subscribe((data)=>{
      this.newsForm.reset()
      this.toastrService.success('News added successfuly');
      this.route.navigate(["/news"]);
      });
  }


}
