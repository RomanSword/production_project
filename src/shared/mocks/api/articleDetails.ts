import { Article, ArticleBlockType, ArticleType } from 'entities/article/model/types/article';

export const articleDetailsData: Article = {
    id: '1',
    title: 'Frostpunk 2: что нужно знать перед прохождением и стоит ли​ покупать',
    subtitle: 'Рассказываем о плюсах и минусах новинки',
    avatarSrc:
        'https://opis-cdn.tinkoffjournal.ru/mercury/in-out-frostpunk2-qa.jpg?preset=image_1280w',
    views: 2000,
    createdAt: '30.04.2024',
    type: [ArticleType.GAMES, ArticleType.STRATEGY],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'В градостроительном симуляторе Frostpunk 2 вы выживаете в морозном постапокалипсисе и принимаете тяжелые решения.',
            paragraphs: [
                'Ранее я уже поделился советами о том, как пережить ледяной буран. Теперь подробнее расскажу о других деталях игры: где купить новинку и сколько она стоит, какие у нее системные требования, чем стратегия радует и чем разочаровывает.',
                'Заодно перескажу события первой части и посоветую, во что еще поиграть, если вам понравилась Frostpunk 2.'
            ]
        },
        {
            id: '2',
            type: ArticleBlockType.TEXT,
            title: 'Сколько стоит Frostpunk 2 и где ее купить',
            paragraphs: [
                'Frostpunk 2 можно купить в российском Steam за 1900 ₽. Также стратегия доступна в EGS и GOG. О том, как покупать игры в цифровых магазинах, можно узнать в нашей инструкции. Также игра доступна по подписке Game Pass для ПК.',
                'В 2025 году стратегия выйдет на консолях PS5 и Xbox Series. Точная дата релиза неизвестна.',
                'У Frostpunk 2 есть два издания: базовое и Deluxe. В базовое издание за 1900 ₽ входит только сама игра. В Deluxe-издание за 3200 ₽ помимо игры включены: Три платных дополнения, которые выйдут позже. Постройка «Зал капитана». Повесть Warm Flesh. Цифровой артбук и саундтрек.'
            ]
        },
        {
            id: '4',
            type: ArticleBlockType.IMAGE,
            src: 'https://opis-cdn.tinkoffjournal.ru/mercury/01-frostpunk2-qa.jpg?preset=image_1280w',
            title: 'В первые дни население Нью-Лондона составляет около полусотни человек'
        }
    ]
};
