describe('示例测试套件', () => {
  test('1 + 1 应该等于 2', () => {
    expect(1 + 1).toBe(2);
  });

  test('数组应该包含特定元素', () => {
    const arr = ['a', 'b', 'c'];
    expect(arr).toContain('b');
  });

  test('对象应该有特定属性', () => {
    const obj = { name: 'test', value: 123 };
    expect(obj).toHaveProperty('name', 'test');
  });
});
