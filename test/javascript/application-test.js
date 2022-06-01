jest.mock('react-dom/client', () => ({ createRoot: () => ({ render: () => jest.fn() }) }));

describe('application', () => {
  it('should work', () => {
    // eslint-disable-next-line global-require
    require('../../app/javascript/application');
  });
});
