import { MenuMixins } from "./Mixins.js";
import { DomMap } from "./DomMap.js";

class Menu extends MenuMixins {
  constructor() {
    super();
    this.subMenuMap = this.buildSubMenuMap();
    this.initializeSubmenuListeners();
  }

  selectOne(item, condition) {
    return item.querySelector(`#${condition}`);
  }

  selectAll(item, condition) {
    return item.querySelectorAll(`[id^=${condition}]`);
  }

  buildSubMenuMap() {
    const DomElements = new DomMap();
    const { navMenu, secondaryMenu } = DomElements;
    const entries = Array.from(this.selectAll(navMenu, this.full_prefix)).map(
      (trigger) => {
        const key = this.extractKeyFromId(trigger.id);
        const correspondingMenu = this.selectOne(
          secondaryMenu,
          this.createMenuIdFromKey(key)
        );
        return [key, [trigger, correspondingMenu]];
      }
    );

    return Object.fromEntries(entries);
  }

  initializeSubmenuListeners() {
    const entries = Object.entries(this.subMenuMap);
    entries.forEach(([, [, menu]], index) => {
      this.hide(menu);
      // if (index == 0) {
      //   this.show(menu);
      // } else {
      //   this.hide(menu);
      // }
    });

    entries.forEach(([key, [trigger, menu]], index, entries) => {
      trigger.addEventListener("click", () => {
        entries.forEach(([otherKey, [otherTrigger, otherMenu]], i) => {
          if (otherKey !== key) {
            this.hide(otherMenu);
          }
        });
        this.show(menu);
      });

      (trigger.id.includes("moreInfo") || trigger.id.includes("report")) &&
        trigger.addEventListener("mouseover", () => {
          entries.forEach(([otherKey, [otherTrigger, otherMenu]], i) => {
            if (otherKey !== key) {
              this.hide(otherMenu);
            }
          });
          this.show(menu);
        });
    });
  }
}

export { Menu };
