import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  appDownloadContent = [
    {
        title: 'Trouvez votre voiture de location parfaite',
        paragraph: 'Affrontez les routes enneigées dans un robuste 4x4 ou partez à la découverte des contrées sauvages dans une fourgonnette de camping.',
        /*btnBox: [
            {
                img: 'assets/img/play-store.png',
                text: 'GET IT ON',
                subText: 'Google Play',
                link: '#'
            },
            {
                img: 'assets/img/apple-store.png',
                text: 'Download on the',
                subText: 'Apple Store',
                link: '#'
            }
        ]*/
    }
]
appDownloadImage = [
    {
        img: 'assets/img/section/image_errand_416x285.jpg'
    }
];
}
