import { Injectable } from '@angular/core';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getproducts(): Items[]{
    return this.products;
  }
  removeProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }

  protected products: Items[] = [
    {
      id: 1,
      name: 'Телевизор Yasin 43G11 109 см черный',
      category: 'TV',
      likes: 0,
      price: 89998,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/pab/p74/19867464.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/yasin-43g11-109-sm-chernyi-108494502/?c=750000000',
      rating: 5.0
    },
    {
      id: 2,
      name: 'Телевизор SMART 32G7000 81 см черный',
      category: 'TV',
      likes: 0,
      price: 51559,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/hd2/hdf/80548027924510.png?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/smart-32g7000-81-sm-chernyi-109729462/?c=750000000',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Apple iPhone 16 Pro Max 256Gb черный',
      category: 'TV',
      likes: 0,
      price: 219989,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h37/h5c/86330224541726.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/xiaomi-a-pro-2025-l55ma-sru-140-sm-chernyi-120147252/?c=750000000',
      rating: 5.0
    },
    {
      id: 4,
      name: 'Телевизор LG 50UT80006LA 127 см черный',
      category: 'TV',
      likes: 0,
      price: 249969,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h42/h5b/86276469162014.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/lg-50ut80006la-127-sm-chernyi-120393144/?c=750000000',
      rating: 5.0
    },
    {
      id: 5,
      name: 'Телевизор Samsung UE65DU7100UXCE 165 см черный',
      category: 'TV',
      likes: 0,
      price: 344938,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h8c/hdf/85888051478558.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/samsung-ue65du7100uxce-165-sm-chernyi-118908115/?c=750000000',
      rating: 5.0
    },
    {
      id: 6,
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
      category: 'Phone',
      likes: 0,
      price: 666844,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
      rating: 5
    },
    {
      id: 7,
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ темно-черный',
      category: 'Phone',
      likes: 0,
      price: 607673,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/pa8/pcf/20117665.png?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-temno-chernyi-133434571/?c=750000000',
      rating: 5
    },
    {
      id: 8,
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      category: 'Phone',
      likes: 0,
      price: 685679,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      rating: 5
    },
    {
      id: 9,
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/512 ГБ темно-черный',
      category: 'Phone',
      likes: 0,
      price: 669582,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/pa8/pcf/20117665.png?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-512-gb-temno-chernyi-133434601/?c=750000000',
      rating: 5
    },
    {
      id: 10,
      name: 'Смартфон OPPO Find N3 16 ГБ/512 ГБ золотистый',
      category: 'Phone',
      likes: 0,
      price: 849990,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/hcd/h4c/84634174554142.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/oppo-find-n3-16-gb-512-gb-zolotistyi-115053268/?c=750000000',
      rating: 5
    },
    {
      id: 11,
      name: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3',
      category: 'Laptop',
      likes: 0,
      price: 494124,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
      rating: 5
    },
    {
      id: 12,
      name: 'Ноутбук ASUS TUF Gaming F15 15.6" / 16 Гб / SSD 512 Гб / DOS / FX507ZC4-HN143 / 90NR0GW1-M00B40',
      category: 'Laptop',
      likes: 0,
      price: 454899,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h5d/h8e/83606463807518.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-15-6-16-gb-ssd-512-gb-dos-fx507zc4-hn143-90nr0gw1-m00b40-113186739/?c=750000000',
      rating: 4.9
    },
    {
      id: 13,
      name: 'Ноутбук ASUS TUF Gaming A15 15.6" / 16 Гб / SSD 512 Гб / Без ОС / FA506NC-HN065 / 90NR0JF7-M005F0',
      category: 'Laptop',
      likes: 0,
      price: 449990,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h46/h90/85949426794526.png?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-15-6-16-gb-ssd-512-gb-bez-os-fa506nc-hn065-90nr0jf7-m005f0-119121191/?c=750000000',
      rating: 5
    },
    {
      id: 14,
      name: 'Ноутбук Lenovo Legion Slim 5 16" / 32 Гб / SSD 1000 Гб / Без ОС / 16AHP9 / 83DH005RRK',
      category: 'Laptop',
      likes: 0,
      price: 1355000,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/hc9/86158174224414.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/lenovo-legion-slim-5-16-32-gb-ssd-1000-gb-bez-os-16ahp9-83dh005rrk-119935984/?c=750000000',
      rating: 5
    },
    {
      id: 15,
      name: 'Ноутбук Xiaomi RedmiBook Pro 15.6" / 16 Гб / SSD 512 Гб / Win 11 / JYU4461CN',
      category: 'Laptop',
      likes: 0,
      price: 509995,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/hfb/hbe/85204766392350.png?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/xiaomi-redmibook-pro-15-6-16-gb-ssd-512-gb-win-11-jyu4461cn-116736719/?c=750000000',
      rating: 5
    },
    {
      id: 16,
      name: 'Часы Кварцевые SOKOLOV 326.73.00.000.07.02.2 сталь',
      category: 'Watches',
      likes: 0,
      price: 56199,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/ha6/h83/64694655451166.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/kvartsevye-sokolov-326-73-00-000-07-02-2-stal--103249984/?c=750000000',
      rating: 5
    },
    {
      id: 17,
      name: 'Часы Кварцевые Gentlemen нержавеющая сталь',
      category: 'Watches',
      likes: 0,
      price: 58900,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/p51/p46/19405097.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/kvartsevye-gentlemen-nerzhavejuschaja-stal--120270263/?c=750000000',
      rating: 5
    },
    {
      id: 18,
      name: 'Часы Кварцевые Michael Kors MK5976-Silver сталь',
      category: 'Watches',
      likes: 0,
      price: 74512,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h3b/h9f/63811093889054.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/kvartsevye-michael-kors-mk5976-silver-stal--21405147/?c=750000000',
      rating: 5
    },
    {
      id: 19,
      name: 'Часы Кварцевые Santa Barbara Polo & Racquet Club SB.ASA.116 Мужские нержавеющая сталь',
      category: 'Watches',
      likes: 0,
      price: 70000,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h95/85745232609310.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/kvartsevye-santa-barbara-polo-racquet-club-sb-asa-116-muzhskie-nerzhavejuschaja-stal--118405282/?c=750000000',
      rating: 5
    },
    {
      id: 20,
      name: 'Часы Кварцевые Michael Kors MK6356 сталь',
      category: 'Watches',
      likes: 0,
      price: 78778,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h2e/h64/63809282244638.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/kvartsevye-michael-kors-mk6356-stal--21405154/?c=750000000',
      rating: 5
    },
    {
      id: 21,
      name: 'Milka Цельный лесной орех шоколадная плитка молочный 90 г',
      category: 'Chocolate',
      likes: 0,
      price: 1056,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/haa/h48/85702680051742.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/milka-tsel-nyi-lesnoi-oreh-shokoladnaja-plitka-molochnyi-90-g-100221933/?c=750000000',
      rating: 5
    },
    {
      id: 22,
      name: 'Рахат Kazakhstan шоколадная плитка темный 100 г',
      category: 'Chocolate',
      likes: 0,
      price: 735,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h90/70365637279774.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/rahat-kazakhstan-shokoladnaja-plitka-temnyi-100-g-100221859/?c=750000000',
      rating: 5
    },
    {
      id: 23,
      name: 'Alpen Gold Max Fun Взрывная карамель, мармелад, печенье шоколадная плитка молочный 160 г',
      category: 'Chocolate',
      likes: 0,
      price: 1349,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/hf6/hd8/63889116463134.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/alpen-gold-max-fun-vzryvnaja-karamel-marmelad-pechen-e-shokoladnaja-plitka-molochnyi-160-g-100222642/?c=750000000',
      rating: 5
    },
    {
      id: 24,
      name: 'Milka MMMAX Oreo шоколадная плитка молочный 300 г',
      category: 'Chocolate',
      likes: 0,
      price: 1799,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h53/ha0/84983016882206.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/milka-mmmax-oreo-shokoladnaja-plitka-molochnyi-300-g-100801830/?c=750000000',
      rating: 5
    },
    {
      id: 25,
      name: 'Alpen Gold клубника с йогуртом шоколадная плитка молочный 80 г',
      category: 'Chocolate',
      likes: 0,
      price: 399,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/pff/p41/13915282.JPG?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/alpen-gold-klubnika-s-iogurtom-shokoladnaja-plitka-molochnyi-80-g-101223559/?c=750000000',
      rating: 5
    }
  ];
}
