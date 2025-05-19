import { StringBuilder } from "./StringBuilder.js";
import { DisplayToggler } from "./DisplayToggler.js";

const mix = (Base, ...Mixins) => {
  class Combined extends Base {
    constructor(...args) {
      super(...args);
      Mixins.forEach(Mixin => {
        copyProps(this, new Mixin());
      });
    }
  }

  function copyProps(target, source) {
    Reflect.ownKeys(source).forEach(key => {
      if (key !== "constructor" && key !== "prototype" && key !== "name") {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      }
    });
  }

  Mixins.forEach(Mixin => {
    copyProps(Combined.prototype, Mixin.prototype);
    copyProps(Combined, Mixin);
  });

  return Combined;
};

class MenuMixins extends mix(Object, StringBuilder, DisplayToggler) {}


export {
  MenuMixins
}
