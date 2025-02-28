import { Component } from '@angular/core';
import { Items} from '../items';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  sharing(id: number): void {
    const product = this.products.find(p => p.id === id);
    if (product) {
      const encodedLink = encodeURIComponent(product.productLink);
      const telegramShareUrl = `https://t.me/share/url?url=${encodedLink}`;
      window.open(telegramShareUrl, '_blank');
    }
  }

  products: Items[] = [
    {
      id: 1,
      name: 'Телевизор Yasin 43G11 109 см черный',
      description: 'Телевизор YASIN 43G11K 2K FHD может отображать чрезвычайно четкое и детальное изображение, и зрители могут четко видеть каждую деталь изображения',
      price: 89998,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/pab/p74/19867464.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/yasin-43g11-109-sm-chernyi-108494502/?c=750000000',
      rating: 5.0
    },
    {
      id: 2,
      name: 'Телевизор SMART 32G7000 81 см черный',
      description: 'This is Телевизор SMART 32G7000 81 см черный',
      price: 51559,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/hd2/hdf/80548027924510.png?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/smart-32g7000-81-sm-chernyi-109729462/?c=750000000',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Apple iPhone 16 Pro Max 256Gb черный',
      description: 'Телевизоры Xiaomi серии A Pro 2025, оснащенные передовой технологией отображения на квантовых ' +
        'точках, оживляют цвета. Благодаря широкому охвату цветовой гаммы и дисплею с 1 миллиардом цветов вы можете ' +
        'наслаждаться потрясающим качеством изображения, не выходя из своей гостиной',
      price: 219989,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h37/h5c/86330224541726.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/xiaomi-a-pro-2025-l55ma-sru-140-sm-chernyi-120147252/?c=750000000',
      rating: 5.0
    },
    {
      id: 4,
      name: 'Телевизор LG 50UT80006LA 127 см черный',
      description: 'Телевизор LED LG 50UT80006LA сочетает стильный минималистский дизайн и высокое качество изображения' +
        ' для увлекательного просмотра. В нем установлен экран 50 дюймов с подсветкой Direct LED и разрешением UltraHD,' +
        ' который позволяет получать удовольствие от реалистичной картинки',
      price: 249969,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h42/h5b/86276469162014.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/lg-50ut80006la-127-sm-chernyi-120393144/?c=750000000',
      rating: 5.0
    },
    {
      id: 5,
      name: 'Телевизор Samsung UE65DU7100UXCE 165 см черный',
      description: 'Телевизор LED Samsung UE65DU7100UXCE с экраном 65 дюймов 4K UltraHD обеспечивает высокое качество' +
        ' картинки с реалистичной передачей деталей во время просмотра телеканалов и другого мультимедийного контента.' +
        ' Акустическая система 20 Вт с технологией Dolby Digital Plus воспроизводит насыщенный и чистый звук. ' +
        'Samsung UE65DU7100UXCE реализована платформа Smart TV под управлением Tizen, что предоставляет возможность ' +
        'поиска и запуска интересующего контента на безграничных просторах Интернет. Для беспроводного подключения к ' +
        'Интернет реализован модуль Wi-Fi',
      price: 344938,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h8c/hdf/85888051478558.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/samsung-ue65du7100uxce-165-sm-chernyi-118908115/?c=750000000',
      rating: 5.0
    },
    {
      id: 6,
      name: 'Телевизор Samsung UE50DU8000UXCE 127 см черный',
      description: 'Телевизор LED Samsung UE50DU8000UXCE имеет тонкий корпус черного цвета, который оптимально впишется ' +
        'в любой интерьер. Экран диагональю 50 дюймов демонстрирует кристально чистые цвета и четкое изображение в разрешении ' +
        'Ultra 4K. Объемное звучание дополняет картинку и погружает в увиденное. Устройство поддерживает SmartTV, который позволяет ' +
        'смотреть любимые передачи, фильмы и другой контент.',
      price: 245149,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h6b/ha6/85887766331422.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/samsung-ue50du8000uxce-127-sm-chernyi-118908125/?c=750000000',
      rating: 5.0
    },
    {
      id: 7,
      name: 'Телевизор LG 75UT80006LA 191 см черный',
      description: 'Телевизор LED LG 75UT80006LA сочетает стильный минималистский дизайн и высокое качество изображения ' +
        'для увлекательного просмотра. В нем установлен экран 75 дюймов с подсветкой Direct LED и разрешением UltraHD, ' +
        'который позволяет получать удовольствие от реалистичной картинки',
      price: 477466,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h57/h3d/86289132912670.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/lg-75ut80006la-191-sm-chernyi-120456599/?c=750000000',
      rating: 5.0
    },
    {
      id: 8,
      name: 'Телевизор TCL 55V6B 140 см черный',
      description: 'LED-телевизор TCL 55V6B черного цвета имеет диагональ экрана 55" (140 см). Он передает изображение ' +
        'в качестве 4K UltraHD с высокой детализацией и контрастностью. Подсветка Direct LED предполагает заднее размещение ' +
        'светодиодов: они направлены в сторону пользователя. Рассеиватели, установленные поверх, распределяют свет ' +
        'равномерно по всей поверхности матрицы',
      price: 211527,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/p71/p80/23464421.png?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/tcl-55v6b-140-sm-chernyi-124217778/?c=750000000',
      rating: 5.0
    },
    {
      id: 9,
      name: 'Телевизор Samsung UE55DU8000UXCE 140 см черный',
      description: 'LED-телевизор Samsung UE55DU8000UXCE выполнен в черном корпусе с экраном диагональю 55" (138 см).' +
        ' Он устанавливается на подставку и поддерживает фиксацию на стену. Для этого на обратной стороне выполнены ' +
        'отверстия в соответствии с креплением VESA 200x200. Для подключения видеотехники на корпусе предусмотрено 3 ' +
        'HDMI-разъема. Накопители, мобильные и цифровые устройства присоединяются через 2 USB-порта',
      price: 275920,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h46/ha6/85982122606622.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/samsung-ue55du8000uxce-140-sm-chernyi-119247854/?c=750000000',
      rating: 5.0
    },
    {
      id: 10,
      name: 'Телевизор Samsung QE55Q60DAUXCE 140 см серый',
      description: 'LED-телевизор Samsung QE55Q60DAUXCE со Smart TV поддерживает голосовое управление через помощника ' +
        'Samsung Bixby. Благодаря встроенным технологиям динамики на 20 Вт выдают чистый и объемный стереозвук. Есть ' +
        'беспроводные модули, LAN- и HDMI-порты для выбора удобного способа подключения к сети Интернет и другим устройствам. ' +
        'Вы можете записывать видео, передавать контент на экран с помощью функции AirPlay, управлять ' +
        'телевизором через мобильное приложение SmartThings',
      price: 363461,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h21/85990957187102.jpg?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/samsung-qe55q60dauxce-140-sm-seryi-119285285/?c=750000000',
      rating: 5.0
    },
    {
      id: 11,
      name: 'Телевизор Haier 55 SMART TV S2 140 см черный',
      description: 'LED-телевизор Haier 55 Smart TV S2 выполнен в корпусе черного цвета с узкой рамкой. Он устанавливается' +
        ' на тумбу за счет использования двух опор или крепится на стене с помощью кронштейна. На экране диагональю 55 ' +
        'дюймов с разрешением Ultra HD передается картинка с четкими и выразительными деталями. Технология МЕМС исключает ' +
        'искажение динамичного контента на основе его анализа и компенсации задержек. Технология HDR 10 гарантирует глубокие ' +
        'оттенки, насыщенность в темных и светлых сценах. Акустическая система с технологией Surrounding Sound создает ' +
        'чистое звучание с эффектом погружения',
      price: 214990,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h3f/h75/86141611900958.png?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/haier-55-smart-tv-s2-140-sm-chernyi-119871871/?c=750000000',
      rating: 5.0
    },
    {
      id: 12,
      name: 'Телевизор TCL 55C655 140 см черный',
      description: 'Представьте себе, что вы сидите в театре и наблюдаете, как поднимается занавес, когда актеры выходят' +
        ' на сцену. С Dolby Vision вы можете насладиться завораживающей сценой прямо перед вами. Вы почувствуете себя ' +
        'так, как будто находитесь в театре, а не просто смотрите телевизор дома',
      price: 274841,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/pf0/pb5/22759112.png?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/tcl-55c655-140-sm-chernyi-124480513/?c=750000000',
      rating: 5.0
    },
    {
      id: 13,
      name: 'Телевизор Xiaomi A 2025 L55MA-ARU 140 см черный',
      description: 'Технология двойного декодирования Dolby Audio™ + DTS-X обеспечивает высокое качество звуковых ' +
        'эффектов для более объемного звучания*. Кроме того, передовая технология DTS Virtual:X обеспечивает трехмерное ' +
        'звучание с помощью динамиков, расположенных сверху, создавая эффект нахождения в кинотеатре',
      price: 209990,
      imageLink: 'https://resources.cdn-kaspi.kz/img/m/p/h90/hae/86622226808862.png?format=gallery-large',
      productLink: 'https://kaspi.kz/shop/p/xiaomi-a-2025-l55ma-aru-140-sm-chernyi-121806358/?c=750000000',
      rating: 5.0
    },
  ];
}
