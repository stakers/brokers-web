import Button from './index';

describe('Button', () => {
  it('should display the button type', () => {
    const expected = 'btn-primary';
    expect(Button({ type: 'btn-primary' })).toEqual(expected);
  });
});
