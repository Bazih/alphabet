import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlphabetModel } from '../../models/alphabet/alphabet.model';
import { LocalStorageService } from '../local-storage/local-storage.service';

const ALPHABET = [
  {
    letter: 'Аа',
    vowel: true,
    param: 'а',
    words: [
      'Трактор',
      'Пламя',
      'Финал'
    ],
    imagePath: 'assets/images/watermelon.jpg',
    imageName: 'Арбуз'
  },
  {
    letter: 'Бб',
    vowel: false,
    param: 'б',
    words: [
      'Изба',
      'Клумба',
      'Азбука'
    ],
    imagePath: 'assets/images/squirrel.jpg',
    imageName: 'Белка'
  },
  {
    letter: 'Вв',
    vowel: false,
    param: 'в',
    words: [
      'Диван',
      'Завод',
      'Лавка'
    ],
    imagePath: 'assets/images/wolf.jpg',
    imageName: 'Волк'
  },
  {
    letter: 'Гг',
    vowel: false,
    param: 'г',
    words: [
      'Август',
      'Бунгало',
      'Бигуди'
    ],
    imagePath: 'assets/images/mushroom.jpg',
    imageName: 'Гриб'
  },
  {
    letter: 'Дд',
    vowel: false,
    param: 'д',
    words: [
      'Вода',
      'Буддизм',
      'Бигуди'
    ],
    imagePath: 'assets/images/house.jpg',
    imageName: 'Дом'
  },
  {
    letter: 'Ее',
    vowel: true,
    param: 'е',
    words: [
      'Арена',
      'Археолог',
      'Баскетбол'
    ],
    imagePath: 'assets/images/spruce.jpg',
    imageName: 'Ель'
  },
  {
    letter: 'Ёё',
    vowel: true,
    param: 'ё',
    words: [
      'Вёсла',
      'Зёрна',
      'Лётчик'
    ],
    imagePath: 'assets/images/hedgehog.jpg',
    imageName: 'Ёжик'
  },
  {
    letter: 'Жж',
    vowel: false,
    param: 'ж',
    words: [
      'Джип',
      'Бумажник',
      'Дождь'
    ],
    imagePath: 'assets/images/toad.jpg',
    imageName: 'Жаба'
  },
  {
    letter: 'Зз',
    vowel: false,
    param: 'з',
    words: [
      'Алмаз',
      'Борозда',
      'Базар'
    ],
    imagePath: 'assets/images/hare.jpg',
    imageName: 'Заяц'
  },
  {
    letter: 'Ии',
    vowel: true,
    param: 'и',
    words: [
      'Пингвин',
      'Аист',
      'Задание'
    ],
    imagePath: 'assets/images/turkey.jpg',
    imageName: 'Индюк'
  },
  {
    letter: 'Йй',
    vowel: false,
    param: 'й',
    words: [
      'Буйвол',
      'Война',
      'Герой'
    ],
    imagePath: 'assets/images/yogurt.jpg',
    imageName: 'Йогурт'
  },
  {
    letter: 'Кк',
    vowel: false,
    param: 'к',
    words: [
      'Блокнот',
      'Антарктика',
      'Проект'
    ],
    imagePath: 'assets/images/kitty.jpg',
    imageName: 'Котенок'
  },
  {
    letter: 'Лл',
    vowel: false,
    param: 'л',
    words: [
      'Накал',
      'Бокал',
      'Элемент'
    ],
    imagePath: 'assets/images/fox.jpg',
    imageName: 'Лиса'
  },
  {
    letter: 'Мм',
    vowel: false,
    param: 'м',
    words: [
      'Память',
      'Автомат',
      'Алюминий'
    ],
    imagePath: 'assets/images/poppy.jpg',
    imageName: 'Мак'
  },
  {
    letter: 'Нн',
    vowel: false,
    param: 'н',
    words: [
      'Аноним',
      'Больница',
      'Военный'
    ],
    imagePath: 'assets/images/rhino.jpg',
    imageName: 'Носорог'
  },
  {
    letter: 'Оо',
    vowel: true,
    param: 'о',
    words: [
      'Блокнот',
      'Астронавт',
      'Проект'
    ],
    imagePath: 'assets/images/donkey.jpg',
    imageName: 'Осёл'
  },
  {
    letter: 'Пп',
    vowel: false,
    param: 'п',
    words: [
      'Антрополог',
      'Вепрь',
      'Бампер'
    ],
    imagePath: 'assets/images/bake.jpg',
    imageName: 'Печь'
  },
  {
    letter: 'Рр',
    vowel: false,
    param: 'р',
    words: [
      'Абориген',
      'Аэропорт',
      'Борода'
    ],
    imagePath: 'assets/images/radish.jpg',
    imageName: 'Редиска'
  },
  {
    letter: 'Сс',
    vowel: false,
    param: 'с',
    words: [
      'Боксер',
      'Атмосфера',
      'Институт'
    ],
    imagePath: 'assets/images/dog.jpg',
    imageName: 'Собака'
  },
  {
    letter: 'Тт',
    vowel: false,
    param: 'т',
    words: [
      'Достаток',
      'Высотник',
      'Батон'
    ],
    imagePath: 'assets/images/tiger.jpg',
    imageName: 'Тигр'
  },
  {
    letter: 'Уу',
    vowel: true,
    param: 'у',
    words: [
      'Глупость',
      'Акула',
      'Акушерка'
    ],
    imagePath: 'assets/images/snail.jpg',
    imageName: 'Улитка'
  },
  {
    letter: 'Фф',
    vowel: false,
    param: 'ф',
    words: [
      'Дефис',
      'График',
      'Платформа'
    ],
    imagePath: 'assets/images/owl.jpg',
    imageName: 'Филин'
  },
  {
    letter: 'Хх',
    vowel: false,
    param: 'х',
    words: [
      'Дыхание',
      'Арахис',
      'Бархат'
    ],
    imagePath: 'assets/images/bread.jpg',
    imageName: 'Хлеб'
  },
  {
    letter: 'Цц',
    vowel: false,
    param: 'ц',
    words: [
      'Операционист',
      'Герцог',
      'Дворец'
    ],
    imagePath: 'assets/images/heron.jpg',
    imageName: 'Цапля'
  },
  {
    letter: 'Чч',
    vowel: false,
    param: 'ч',
    words: [
      'Бычок',
      'Величие',
      'Разворачивать'
    ],
    imagePath: 'assets/images/teapot.jpg',
    imageName: 'Чайник'
  },
  {
    letter: 'Шш',
    vowel: false,
    param: 'ш',
    words: [
      'Башмак',
      'Брошюра',
      'Возвышение'
    ],
    imagePath: 'assets/images/ball.jpg',
    imageName: 'Шарик'
  },
  {
    letter: 'Щщ',
    vowel: false,
    param: 'щ',
    words: [
      'Башмак',
      'Брошюра',
      'Возвышение'
    ],
    imagePath: 'assets/images/pike.jpg',
    imageName: 'Щука'
  },
  {
    letter: 'Ъъ',
    vowel: false,
    param: 'ъ',
    words: [
      'Объект',
      'Изъян',
      'Телеобъектив'
    ],
    imagePath: 'assets/images/hall.jpg',
    imageName: 'Подъезд'
  },
  {
    letter: 'Ыы',
    vowel: true,
    param: 'ы',
    words: [
      'Вспышка',
      'Булыжник',
      'Домысел'
    ],
    imagePath: 'assets/images/cheese.jpg',
    imageName: 'Сыр'
  },
  {
    letter: 'Ьь',
    vowel: false,
    param: 'ь',
    words: [
      'Бутыль',
      'Бальзам',
      'Вольфрам'
    ],
    imagePath: 'assets/images/mouse.jpg',
    imageName: 'Мышь'
  },
  {
    letter: 'Ээ',
    vowel: true,
    param: 'э',
    words: [
      'Поэзия',
      'Дуэль',
      'Мэр'
    ],
    imagePath: 'assets/images/popsicle.jpg',
    imageName: 'Эскимо'
  },
  {
    letter: 'Юю',
    vowel: true,
    param: 'ю',
    words: [
      'Дзюдо',
      'Стюардесса',
      'Целлюлоза'
    ],
    imagePath: 'assets/images/whirligig.jpg',
    imageName: 'Юла'
  },
  {
    letter: 'Яя',
    vowel: true,
    param: 'я',
    words: [
      'Боярышник',
      'Паяльник',
      'Деятельность'
    ],
    imagePath: 'assets/images/apple.jpg',
    imageName: 'Яблоко'
  },
];

@Injectable({
  providedIn: 'root'
})
export class AlphabetService {

  constructor() { }

  getItems(): Observable<AlphabetModel[]> {
    let localData = LocalStorageService.getData();
    if (localData) {
      return of(localData);
    }
    localData = ALPHABET.map(letter => new AlphabetModel(letter));
    LocalStorageService.setData(localData);
    return of(localData);
  }
}
