/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/method-signature-style */
export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'boo' },
    body: {
      id: '4',
      first: 'Test',
      lastname: 'User',
      age: 1,
      currency: 'EUR',
      country: 'Russia',
      city: 'Moscow',
      username: 'Test',
      avatar:
        'https://storage.jewheart.com/content/users/avatars/3746/avatar_3746_500.jpg?1558628223',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
