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
              const aboutSections = (parsedData['about-sections'] || [])
                .map(aboutSection => ({
                  id: aboutSection.id,
                  title: aboutSection.title,
                  slug: aboutSection.slug
                }));
              dispatch(setContent({ aboutChildren: aboutSections }));
            })
            .catch(errors => reject(errors));
        });
    });
  });

export default {
  setContent,
  getAboutTree
};
