export class Validator {

    validateUsername(username) {
        const pattern = /^[a-zA-Z][a-zA-Z0-9_-]*[a-zA-Z0-9]$/;

        // Проверяем, не начинается ли имя с цифры, подчёркивания или тире
        if (/^[0-9_-]/.test(username)) {
            return false;
        }

        // Проверяем, не заканчивается ли имя цифрой, подчёркиванием или тире
        if (/[0-9_-]$/.test(username)) {
            return false;
        }

        // Проверяем, не содержит ли имя подряд более трёх цифр
        if (/\d{4,}/.test(username)) {
            return false;
        }

        // Проверяем имя на соответствие регулярному выражению
        return pattern.test(username);
    }
}

