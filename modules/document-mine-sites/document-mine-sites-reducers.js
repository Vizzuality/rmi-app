
import * as actions from './document-mine-sites-actions';

export default { 
  [actions.setDocumentMineSites]: (state, { payload }) => {
    console.log(payload)
    return ({ ...state, list: payload }) 
  }
};
