import { createAction, createThunkAction } from 'redux-tools';
import { Deserializer } from 'jsonapi-serializer';

// services
import AboutService from 'services/foundation/about';

export const setContent = createAction('navigation/setContent');

export const getAboutTree = createThunkAction('navigation/getAboutTree', (_options = {}) =>
  (dispatch) => {
    const deserializer = new Deserializer({});

    return new Promise((resolve, reject) => {
      AboutService.getAbout(_options)
        .then((data) => {
          deserializer.deserialize(data)
            .then((parsedData) => {
              resolve(parsedData);
              const aboutChildren = (parsedData['about-sections'] || []);
              dispatch(setContent({ aboutChildren }));
            })
            .catch(errors => reject(errors));
        });
    });
  });

export default {
  setContent,
  getAboutTree
};
