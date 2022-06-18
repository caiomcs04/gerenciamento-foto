import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  photos = [
    {
      url: 'https://quatrorodas.abril.com.br/wp-content/uploads/2022/06/moto-eletrica.webp',
      description: 'Moto Elétrica',
    },
    {
      url: 'https://s2.glbimg.com/QT6ukXRNkwt7u_j0J6Zs2prRMiQ=/0x0:921x691/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/y/4/lDfqbPTBW4RuE8iJbDAw/3ebfveyae5bldcygx5jyo2epzu.jpg',
      description: 'Moto chinesa vermelha',
    },
  ];
}
