//https://github.com/stemmlerjs/simple-typescript-starter/tree/master
import { buildModal,ModalStatus} from './djn/status';

const modal = buildModal('hexlet forever', ModalStatus.Opened);
console.log(modal);
// { text: 'hexlet forever', status: ModalStatus.Opened }