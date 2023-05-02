/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/method-signature-style */
import { Article } from '../../../src/entities/Article';

// Тестовая статья
const defaultArticle = {
  title: 'TESTING ARTICLE',
  subtitle: 'Test',
  img:
    'https://img.freepik.com/free-vector/online-test-concept-illustration_114360-5486.jpg',
  views: 2023,
  createdAt: '26.02.2024',
  userId: '1',
  type: ['SCIENCE'],
  blocks: [],
};

// Создали статью для теста
export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: 'POST',
      url: 'http://localhost:8000/articles',
      headers: { Authorization: 'boo' },
      body: article ?? defaultArticle,
    })
    .then((resp) => resp.body);
};

// Удалили статью, что бы не засорять БД
export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'boo' },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
