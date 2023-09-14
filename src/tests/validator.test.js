import { Validator } from '../validator';

describe('Validator', () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    test('should return false for invalid username', () => {
        expect(validator.validateUsername('user__789')).toBe(false); // Содержит два подчёркивания
        expect(validator.validateUsername('1user')).toBe(false);     // Начинается с цифры
        expect(validator.validateUsername('user7')).toBe(false);     // Заканчивается цифрой
        expect(validator.validateUsername('user1234')).toBe(false);   // Содержит подряд четыре цифры
        expect(validator.validateUsername('')).toBe(false);           // Пустая строка
        expect(validator.validateUsername('user@')).toBe(false);      // Содержит недопустимый символ @
    });

    test('should return true for valid usernames without digits', () => {
        expect(validator.validateUsername('username')).toBe(true);
        expect(validator.validateUsername('user-name')).toBe(true);
        expect(validator.validateUsername('user_name')).toBe(true);
    });

    test('should return false for usernames starting with invalid characters', () => {
        expect(validator.validateUsername('123user')).toBe(false);  // Начинается с цифры
        expect(validator.validateUsername('-user')).toBe(false);    // Начинается с тире
        expect(validator.validateUsername('_user')).toBe(false);    // Начинается с подчёркивания
    });

    test('should return false for usernames ending with invalid characters', () => {
        expect(validator.validateUsername('user1234-')).toBe(false);  // Заканчивается тире
        expect(validator.validateUsername('user_name_')).toBe(false); // Заканчивается подчёркиванием
        expect(validator.validateUsername('user.')).toBe(false);      // Заканчивается точкой
    });

    test('should return false for usernames with consecutive digits', () => {
        expect(validator.validateUsername('user1234abc')).toBe(false);  // Подряд четыре цифры
    });
});