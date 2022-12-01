import { faker } from '@faker-js/faker';
import { giveThanks } from '.';

describe('giveThanks', () => {
  it('should make a given person say thank you', () => {
    const from = faker.name.firstName();

    const thanks = giveThanks(from);

    expect(thanks).toEqual(`${from} fait dire : 'Merci Mercantile !'`);
  });
});
