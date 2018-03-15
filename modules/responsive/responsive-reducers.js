
import * as actions from './responsive-actions';
import initialState from './responsive-initial-state';
import { defaultSizes, defaultSize } from './responsive-constants';

export default {
  [actions.setSizes]: (state, { payload }) => {
    const { mobile, tablet, phone, desktop } = { ...initialState, ...payload };

    let fakeWidth;

    if (mobile) {
      if (phone) {
        fakeWidth = defaultSizes.phone;
      } else if (tablet) {
        fakeWidth = defaultSizes.tablet;
      } else {
        // TODO - should we ever get here? default to the lowest value i guess
        fakeWidth = defaultSizes.phone;
      }
    } else if (desktop) {
      fakeWidth = defaultSizes.desktop;
    } else {
      // nothing set, default to our defaultSize
      fakeWidth = defaultSize;
    }

    return { ...state, mobile, tablet, phone, desktop, fakeWidth };
  }
};
