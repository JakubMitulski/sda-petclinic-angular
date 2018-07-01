import {Address} from '../address/address';
import {Pet} from '../pet/pet';

export interface Owner {
  id: number;
  firstname: string;
  lastname: string;
  address: Address;
  pets: Pet[];
}
