//https://github.com/stemmlerjs/simple-typescript-starter/tree/master
import { ImageFile } from './djn/imageFile';

const imageFile = new ImageFile({
    name: 'image.png',
    size: 100,
    width: 200,
    height: 300,
});
console.log(imageFile.toString()); // image.png (100 bytes) 200x300
