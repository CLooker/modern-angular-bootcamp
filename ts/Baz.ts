export class Baz {
  baz = 'baz';
}

// legal when tsconfig.strict is false
// illegal when tsconfig.strict is true
// export class Baz {
//   baz: string; // this could be undefined

//   drive(speed) { // speed has no type annotation
//     console.log('Driving at speed: ' + speed);
//   }
// }
