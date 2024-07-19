import { Component } from '@angular/core';

interface Site {
  name: string;
  url: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  portfolioHrefs: Site[] = [
    {
      name: "AUTOHAL",
      url: "https://autohal.ro"
    },
    {
      name: "FUNERAR ALEXANDRU",
      url: "https://servicii-funerare-alexandru.ro"
    },
    {
      name: "ELECTRO ROOM",
      url: "https://electroroom.niculuka.ro"
    },
    {
      name: "FOOD STORE",
      url: "https://foodstore.niculuka.ro"
    },
    {
      name: "WEATHER CAST",
      url: "https://weather.niculuka.ro"
    },
    {
      name: "NEUROPSY RASPOP",
      url: "https://neuropsy-raspop.com/"
    }
  ];

  developer: Site = {
    name: "niculuka",
    url: "https://github.com/niculuka"
  }
}
