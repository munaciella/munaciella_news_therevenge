const axiosMock = {
    create: jest.fn(() => axiosMock),
    get: jest.fn(),
    post: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  };
  
  export default axiosMock;