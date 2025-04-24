describe('集成测试示例', () => {
  test('异步操作测试', async () => {
    const result = await Promise.resolve('success');
    expect(result).toBe('success');
  });

  test('模拟API调用', () => {
    const mockApi = jest.fn().mockResolvedValue({ data: 'test' });
    return mockApi().then(response => {
      expect(response.data).toBe('test');
    });
  });
});
