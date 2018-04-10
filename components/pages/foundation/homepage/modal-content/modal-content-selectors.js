
import { createSelector } from 'reselect';

const news = state => state.staticContent.content.news;
const newsId = state => state.staticContent.resourceId;

export const getNews = createSelector(
  [news, newsId],
  (_news = [], _newsId) =>
    _news.find(news => news.id === _newsId)
);

export default { getNews };
