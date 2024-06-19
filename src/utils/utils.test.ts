import { getArticleWord } from './utils';

describe('utils', () => {
  it('should return статья', () => {
    const result = getArticleWord(1);
    expect(result).toBe('статья');
  });

  it('should return статей', () => {
    const result = getArticleWord(8);
    const result2 = getArticleWord(9);
    const result3 = getArticleWord(19);
    const result4 = getArticleWord(25);
    const result5 = getArticleWord(48);
    expect(result).toBe('статей');
    expect(result2).toBe('статей');
    expect(result3).toBe('статей');
    expect(result4).toBe('статей');
    expect(result5).toBe('статей');
  });

  it('should return статьи', () => {
    const result = getArticleWord(24);
    const result2 = getArticleWord(32);
    const result3 = getArticleWord(44);
    const result4 = getArticleWord(23);
    const result5 = getArticleWord(53);
    expect(result).toBe('статьи');
    expect(result2).toBe('статьи');
    expect(result3).toBe('статьи');
    expect(result4).toBe('статьи');
    expect(result5).toBe('статьи');
  });
});
