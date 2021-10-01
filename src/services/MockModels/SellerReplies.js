const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export default [
  {
    id: 1,
    category: 'Мясо',
    title: 'Говядина свежая',
    img: require('assets/Mock/MyLots/meat.png'),
    price: 1999,
    priceMarker: 'high',
    description:
      'Отличное мясо, всегда свежее. Забой не позже чем за сутки до поставки.',
    volMin: 100,
    volMax: 10000,
    country: 'Казахстан',
    county: 'Алматинская',
    city: 'Алматы',
    locality: null,
    time: '8:22 PM',
    commentary: 'Получится ли доставить завтра в город или нет?',
    replyStatus: 'active',
    fullImage: require('assets/Mock/PopularItems/mainCucumber.png'),
    itemPhotos: [
      require('assets/Mock/MyLots/meat.png'),
      require('assets/Mock/MyLots/meat.png'),
      require('assets/Mock/MyLots/meat.png'),
      require('assets/Mock/MyLots/meat.png'),
      require('assets/Mock/MyLots/meat.png'),
    ],
    itemCertificates: [require('assets/Mock/MyLots/meat.png')],
    buyerVolume: '980',
    status: 'active',
    date:
      new Date().getDate() +
      ' ' +
      months[new Date().getMonth() + 1] +
      ' ' +
      new Date().getFullYear(),
    seller: {
      rating: 4.1,
      userName: 'Ержан',
      userLastName: 'Магомедов',
      userPhone: '+7 747 123-98-43',
    },
    buyer: {
      rating: 4.5,
      userName: 'Максим',
      userLastName: 'Федоров',
      userPhone: '+7 747 541-98-12',
    },
  },
  {
    id: 2,
    category: 'Томат',
    title: 'Томаты (помидоры)',
    img: require('assets/Mock/MyLots/tomatoes.png'),
    price: 320,
    priceMarker: 'low',
    buyerVolume: '1250',
    status: 'review',
    description:
      'Помидоры прям с грядки. Снимаем после вашего заказа, все свежее и натуральное',
    volMin: 50,
    volMax: 500,
    country: 'Казахстан',
    county: 'Алматинская',
    city: 'Алматы',
    locality: null,
    time: '8:43 AM',
    commentary: 'Получится ли доставить завтра в город или нет?',
    replyStatus: 'review',
    fullImage: require('assets/Mock/PopularItems/mainCucumber.png'),
    itemPhotos: [
      require('assets/Mock/MyLots/tomatoes.png'),
      require('assets/Mock/MyLots/tomatoes.png'),
      require('assets/Mock/MyLots/tomatoes.png'),
      require('assets/Mock/MyLots/tomatoes.png'),
    ],
    itemCertificates: [require('assets/Mock/MyLots/tomatoes.png')],
    date:
      new Date().getDate() +
      ' ' +
      months[new Date().getMonth() + 1] +
      ' ' +
      new Date().getFullYear(),
    seller: {
      rating: 4.5,
      userName: 'Нуржан',
      userLastName: 'Прокофьева',
      userPhone: '+7 747 123-98-43',
    },
    buyer: {
      rating: 3.5,
      userName: 'Алексей',
      userLastName: 'Сатаров',
      userPhone: '+7 747 578-98-42',
    },
  },
  {
    id: 3,
    category: 'Картофель',
    title: 'Картофель Беллароза',
    img: require('assets/Mock/MyLots/potato.png'),
    price: 250,
    priceMarker: 'low',
    description: 'Хорошая картошка, домашняя',
    volMin: 15,
    volMax: 500,
    country: 'Казахстан',
    county: 'Алматинская',
    city: 'Алматы',
    locality: null,
    time: '11:43 AM',
    commentary: 'Получится ли доставить завтра в город или нет?',
    replyStatus: 'review',
    fullImage: require('assets/Mock/PopularItems/mainCucumber.png'),
    itemPhotos: [
      require('assets/Mock/MyLots/potato.png'),
      require('assets/Mock/MyLots/potato.png'),
    ],
    itemCertificates: [require('assets/Mock/MyLots/potato.png')],
    buyerVolume: '578',
    status: 'finished',
    date:
      new Date().getDate() +
      ' ' +
      months[new Date().getMonth() + 1] +
      ' ' +
      new Date().getFullYear(),
    seller: {
      rating: 4.8,
      userName: 'Аманжол',
      userLastName: 'Ертаев',
      userPhone: '+7 747 123-98-43',
    },
    buyer: {
      rating: 1.5,
      userName: 'Айбек',
      userLastName: 'Курбанов',
      userPhone: '+7 707 876-98-42',
    },
  },
  {
    id: 4,
    category: 'Огурцы',
    title: 'Огурцы',
    img: require('assets/Mock/MyLots/cucumber.png'),
    price: 90,
    priceMarker: 'medium',
    description: 'Хороший огурцы с грядка',
    volMin: 5,
    volMax: 50,
    country: 'Казахстан',
    county: 'Алматинская',
    city: 'Алматы',
    locality: null,
    time: '2:43 PM',
    commentary: 'Получится ли доставить завтра в город или нет?',
    replyStatus: 'review',
    fullImage: require('assets/Mock/PopularItems/mainCucumber.png'),
    itemPhotos: [
      require('assets/Mock/MyLots/cucumber.png'),
      require('assets/Mock/MyLots/cucumber.png'),
      require('assets/Mock/MyLots/cucumber.png'),
    ],
    itemCertificates: [require('assets/Mock/MyLots/cucumber.png')],
    buyerVolume: '450',
    status: 'denied',
    date:
      new Date().getDate() +
      ' ' +
      months[new Date().getMonth() + 1] +
      ' ' +
      new Date().getFullYear(),
    seller: {
      rating: 3.5,
      userName: 'Алексей',
      userLastName: 'Захаров',
      userPhone: '+7 747 123-98-43',
    },
    buyer: {
      rating: 4.9,
      userName: 'Магомед',
      userLastName: 'Исмаилов',
      userPhone: '+7 777 111-32-42',
    },
  },
]
