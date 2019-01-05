import { anchorate } from 'anchorate';

export default () => {
  anchorate({
    scroller: (element) => {
      if (!element) return false;
      element.scrollIntoView({ behavior: 'smooth' });
      return true;
    },
  });
};
