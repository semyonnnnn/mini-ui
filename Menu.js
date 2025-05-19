import { MenuMixins } from "./Mixins.js";

class Menu extends MenuMixins {
    constructor() {
      super();
      this.triggersMap = this.buildTriggersMap();
      this.initializeListeners();
    }
  

  selectOne(item, condition){
    return item.querySelector(`#${condition}`);
  }

  selectAll(item, condition){
    return item.querySelectorAll(`[id^=${condition}]`);
  }

  buildTriggersMap() {
  const entries = Array.from(this.selectAll(navMenu, this.full_prefix)).map(trigger => {
    const key = this.extractKeyFromId(trigger.id);
    const correspondingMenu = this.selectOne(secondaryMenu, this.createMenuIdFromKey(key));
    return [key, [trigger, correspondingMenu]];
  });

  return Object.fromEntries(entries);
}



  initializeListeners() {
    Object.entries(this.triggersMap).forEach(([key, [trigger, menu]], index, entries) => {
      menu.style.display = 'none';

      trigger.addEventListener('click', () => {
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