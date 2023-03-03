import makedsgn from './../assets/projects/makedsgn.jpg'
import rubezh from './../assets/projects/rubezh.jpg'
import modemchik from './../assets/projects/modemchik.jpg'

const projects = [
    {
        id: 1,
        name: 'rubezh',
        title: 'ЧОП "Рубеж"',
        subtitle: 'Частное охранное предприятие в Крыму',
        text: 'Был разработан дизайн и вёрстка проекта.',
        data: 'Май 2021',
        img: rubezh,
        video: rubezh,
        link: 'https://rubezh82.ru/',
        linkGh: '',
        tools: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'Figma',
        ],
    },
    {
        id: 2,
        name: 'makedsgn',
        title: 'Makedsgn.ru',
        subtitle: 'Сообщество дизайнеров и веб-разработчиков',
        text: 'Проекту требовалось разработать дизайн в тёмных тонах и строгий логотип.',
        data: 'Август 2021',
        img: makedsgn,
        video: makedsgn,
        link: 'https://makedsgn.ru',
        linkGh: '',
        tools: [
            'Figma',
            'Illustrator',
        ],
    },
    {
        id: 3,
        name: 'modemchik',
        title: 'Модемчик',
        subtitle: 'Маркет интернет услуг',
        text: 'Был сделан редизайн сайта, поскольку предыдущий сильно устарел и был полон ошибок. Заказчиком была поставлена задача сохранить основные цвета, сделать сайт удобным и информативным.',
        data: 'Ноябрь 2021',
        img: modemchik,
        video: modemchik,
        link: 'https://modemchik.com/',
        linkGh: '',
        tools: [
            'Figma',
        ],
    },
];


export { projects }
