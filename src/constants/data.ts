import { Cake } from "@/types/catalog";

export const data: Cake[] = [
  {
    id: "1",
    image: "/images/cake.png",
    title: "Брусничка1",
    description:
      "Шоколадный бисквит прослоен сливочно-творожным кремом с добавлением брусники. ",
    price: 1250,
    hasOptions: true,
  },
  {
    id: "2",
    image: "/images/cake.png",
    title: "Торт 2",
    description: "Шоколадный бисквит с кремом",
    price: 1399,
  },
  {
    id: "3",
    image: "/images/cake.png",
    title: "Торт 3",
    description: "Нежный чизкейк с ягодами",
    price: 1459,
    hasOptions: true,
  },
  {
    id: "11",
    image: "/images/cake.png",
    title: "Брусничка 4",
    description:
      "Шоколадный бисквит прослоен сливочно-творожным кремом с добавлением брусники. ",
    price: 1250,
  },
  {
    id: "12",
    image: "/images/cake.png",
    title: "Торт 5",
    description: "Шоколадный бисквит с кремом",
    price: 1399,
  },
  {
    id: "13",
    image: "/images/cake.png",
    title: "Торт 6",
    description: "Нежный чизкейк с ягодами",
    price: 1459,
  },
  {
    id: "21",
    image: "/images/cake.png",
    title: "Брусничка 7",
    description:
      "Шоколадный бисквит прослоен сливочно-творожным кремом с добавлением брусники. ",
    price: 1250,
  },
  {
    id: "22",
    image: "/images/cake.png",
    title: "Торт 8",
    description: "Шоколадный бисквит с кремом",
    price: 1399,
  },
  {
    id: "123",
    image: "/images/cake.png",
    title: "Торт 9",
    description: "Нежный чизкейк с ягодами",
    price: 1459,
  },
  {
    id: "113",
    image: "/images/cake.png",
    title: "Торт 10",
    description: "Нежный чизкейк с ягодами",
    price: 1459,
    hasOptions: true,
  },
  {
    id: "111",
    image: "/images/cake.png",
    title: "Брусничка 11",
    description:
      "Шоколадный бисквит прослоен сливочно-творожным кремом с добавлением брусники. ",
    price: 1250,
  },
  {
    id: "112",
    image: "/images/cake.png",
    title: "Торт 12",
    description: "Шоколадный бисквит с кремом",
    price: 1399,
  },
  {
    id: "113",
    image: "/images/cake.png",
    title: "Торт 13",
    description: "Нежный чизкейк с ягодами",
    price: 1459,
    hasOptions: true,
  },
  {
    id: "111",
    image: "/images/cake.png",
    title: "Брусничка 14",
    description:
      "Шоколадный бисквит прослоен сливочно-творожным кремом с добавлением брусники. ",
    price: 1250,
  },
];

export const heroData = {
  title: "Вкусные торты на заказ!",
  description:
    "Авторские торты, капкейки и пирожные с индивидуальным дизайном и неповторимым вкусом для ваших праздников",
  smallImage: "/images/hero1.png",
  mainImage: "/images/hero2.png",
};

export const aboutData = {
  A:{
    title: "Обо мне",
    description: `Привет! Меня зовут [Имя]. С детства обожаю превращать простые ингредиенты 
    в настоящие произведения искусства. Для меня кондитерское дело — это не просто работа, 
    а способ делиться радостью и создавать неповторимую атмосферу вашего праздника. 
    Я использую только натуральные продукты и вкладываю душу в каждый десерт.`,
    image: "/images/conditer.png",
  },
  B:{
    title: "О СЕБЕ",
    description: `Наши десерты изготовлены только из натуральных ингредиентов, без сахара, искусственных ароматизаторов, 
    красителей и консервантов. Наши десерты изготовлены только из натуральных ингредиентов, без сахара, искусственных 
    ароматизаторов, красителей и консервантов. Наши десерты изготовлены только из натуральных ингредиентов, без сахара, 
    искусственных ароматизаторов, красителей и консервантов Наши десерты изготовлены только из натуральных ингредиентов, без сахара, искусственных ароматизаторов, красителей и консервантов`,
    image: "/images/conditer2.png",
  },
};

export const socialLinks = [
  {
    id: "vk",
    href: "https://vk.com",
    iconHeader: "/icons/vk_header.svg",
    iconFooter: "/icons/vk_footer.svg",
  },
  {
    id: "telegram",
    href: "https://t.me",
    iconHeader: "/icons/telegram_header.svg",
    iconFooter: "/icons/telegram_footer.svg",
  },
];

export const reviewsData = {
  title: "Отзывы",
  reviews: [
    {
      id: "1",
      text: "Заказывали торт на юбилей! Было не только невероятно красиво, но и очень вкусно! Все гости были в восторге. Обязательно будем заказывать еще!",
      author: "Юлия Самойлова",
      role: "постоянный покупатель"
    },
    {
      id: "2", 
      text: "Прекрасный торт на день рождения ребенка! Дизайн точно по картинке, вкус восхитительный. Доставили вовремя, все аккуратно упаковано.",
      author: "Анна Петрова",
      role: "клиент"
    },
    {
      id: "3",
      text: "Уже третий раз заказываю торты здесь! Качество всегда на высоте, цены адекватные. Рекомендую всем!",
      author: "Мария Сидорова",
      role: "постоянный клиент"
    }
  ]
};

export const headerData = {
  A: {
    navItems: [
      { label: "Каталог", href: "#catalog" },
      { label: "Обо мне", href: "#about" }, 
      { label: "Отзывы", href: "#reviews" }
    ],
    cartIcon: "/icons/cart.svg",
    socialLinks: [
      {
        id: "vk",
        href: "https://vk.com",
        icon: "/icons/vk_header.svg",
      },
      {
        id: "telegram",
        href: "https://t.me", 
        icon: "/icons/telegram_header.svg",
      },
    ]
  },
  B: {
    logo: "/icons/logo_themeB.svg",
    phone: "+7 (952) 234-45-56",
    navItems: [
      { label: "О СЕБЕ", href: "#about" },
      { label: "АССОРТИМЕНТ", href: "#catalog" },
      { label: "ОТЗЫВЫ", href: "#reviews" },
      { label: "ОФОРМИТЬ ЗАКАЗ", href: "#order" }
    ],
    cartIcon: "/icons/cart2.svg",
    socialLinks: [
      {
        id: "vk",
        href: "https://vk.com",
        icon: "/icons/vk2.svg",
      },
      {
        id: "telegram",
        href: "https://t.me",
        icon: "/icons/telegram2.svg", 
      },
    ]
  }
};