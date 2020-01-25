const myName: string = 'Chad';

const ten: number = 10;
const negative: number = -10000;
const decimal: number = 10.00000001;

const isYes: boolean = true;

const nothingHere: null = null;
const noDefinition: undefined = undefined;

// type inference
// don't need to mention type during one line variable assignment
let foo = 'foo';
// foo = 12; compiler error as ts inferred foo's type is string

// no type inference here
// bar's type is any
let bar;
if (1 === 1) {
  bar = 'bar';
} else {
  bar = 'kadjfaldfjf';
}
// no compiler error
bar = 10;

// functions
const add = (a: number, b: number): number => a + b;

const joinStrings = (a: string, b: string): string => a + b;

// objects
const post = {
  daysOld: 10,
  isPublished: true,
  title: 'Latest TS News'
};
//  post.color; compiler error

// interfaces
interface Post {
  daysOld: number;
  isPublished: boolean;
  title: string;
}

const printPost = (postToPrint: Post) =>
  `${postToPrint.title} (${postToPrint.daysOld} days old)`;

// compiler error
// const printPost = (postToPrint: Post) => postToPrint.color

// classes
class Car {
  constructor(public color: string, private year: number) {}

  public drive() {
    this.putInGear();
    this.pressPedal();
    this.turnWheel();
    console.log('vroom!');
  }

  private putInGear() {}
  private pressPedal() {}
  private turnWheel() {}
}

const car = new Car('red', 2000);
car.color; // 'red'
// car.year; compiler error bc private property

car.drive();
// car.putInGear(); compiler error bc private method

// decorators

// decorator
const Component = (target: any) => {
  console.log(target);
};

@Component
class Foo {}

// decorator factory
const ComponentFactory = (someArg: any) => {
  // must return a fn
  return () => {};
};

// ts modules
import { Baz } from './Baz';
const baz = new Baz();

interface Driveable {
  speed: number;
  drive(): string;
}

class DriveableCar implements Driveable {
  speed = 10;
  drive() {
    return 'I am driving at speed: ' + this.speed;
  }
}

const driveableCar = new DriveableCar();

const startDriving = (vehicle: Driveable) => {
  vehicle.drive();
};

startDriving(driveableCar);

// generics
class NumberHolder {
  value: number;
}

const numberHolder = new NumberHolder();
numberHolder.value = 10;

class StringHolder {
  value: string;
}

const stringHolder = new StringHolder();
stringHolder.value = 'foo';

class ValueHolder<T> {
  value: T;
}

const booleanHolder = new ValueHolder<boolean>();
booleanHolder.value = true;
// booleanHolder.value = 'foo'; // compiler error

// generic function
const numberWrapper = (value: number): number[] => [value];

const valueWrapper = <T>(value: T): T[] => [value];

const booleanWrapper = valueWrapper<boolean>(true);

// type inference means you don't have to pass the type in
const stringWrapper = valueWrapper('foo');
