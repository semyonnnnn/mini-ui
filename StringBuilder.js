class StringBuilder{    
  trigger_prefix = "trigger_";
  menu_prefix = "menu_";

  get full_prefix() {
    return this.trigger_prefix + this.menu_prefix;
  }

  extractKeyFromId(id){
    return id.replace(this.full_prefix, "");
  }

  createMenuIdFromKey(key){
    return this.menu_prefix + key
  }

}

export { StringBuilder }