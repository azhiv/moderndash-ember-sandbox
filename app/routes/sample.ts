import Route from '@ember/routing/route';
import { difference } from 'moderndash';

export default class SampleRoute extends Route {
  model() {
    return difference([], []);
  }
}
