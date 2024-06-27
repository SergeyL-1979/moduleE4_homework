// Родительский класс для электроприборов
class ElectricDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.pluggedIn = false;
    }

    turnOn() {
        if (!this.pluggedIn) {
            this.pluggedIn = true;
            console.log(`${this.name} включен в розетку.`);
        } else {
            console.log(`${this.name} уже включен в розетку.`);
        }
    }

    turnOff() {
        if (this.pluggedIn) {
            this.pluggedIn = false;
            console.log(`${this.name} выключен из розетки.`);
        } else {
            console.log(`${this.name} уже выключен из розетки.`);
        }
    }
}

// Класс для настольной лампы, наследующий ElectricDevice
class DeskLamp extends ElectricDevice {
    constructor(name, power, bulbType) {
        super(name, power);
        this.bulbType = bulbType;
    }

    changeBulb(newBulbType) {
        this.bulbType = newBulbType;
        console.log(`Тип лампочки для ${this.name} изменен на ${this.bulbType}.`);
    }
}

// Класс для компьютера, наследующий ElectricDevice
class Computer extends ElectricDevice {
    constructor(name, power, operatingSystem) {
        super(name, power);
        this.operatingSystem = operatingSystem;
    }

    runProgram(programName) {
        console.log(`${this.operatingSystem} запускает программу ${programName}.`);
    }
}

// Создаем экземпляры приборов
const lamp = new DeskLamp('Настольная лампа', 60, 'LED');
const pc = new Computer('Компьютер', 500, 'Windows');

// Проверяем методы и свойства приборов
lamp.turnOn(); // Включаем настольную лампу
lamp.changeBulb('Incandescent'); // Меняем лампочку
lamp.turnOff(); // Выключаем настольную лампу

pc.turnOn(); // Включаем компьютер
pc.runProgram('Word'); // Запускаем программу на компьютере
pc.turnOff(); // Выключаем компьютер
