export class AlphabetModel {
  letter: string;
  vowel: boolean;
  param: string;
  words: string[];
  imagePath: string;
  imageName: string;

  constructor(
    obj: any
  ) {
    this.letter = obj.letter;
    this.vowel = obj.vowel;
    this.param = obj.param;
    this.words = obj.words;
    this.imagePath = obj.imagePath;
    this.imageName = obj.imageName;
  }
}
