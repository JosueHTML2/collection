exports = module.exports = class Collection {
  constructor() {
    this.data    = [];
    this.size    = 0;
    this.cleared = 0;
  }
  set(key, value) {
    try {
      this.data.push({ key, value, full: [{ [key]: value }]  });
      this.size += 1;
      return true;
    } catch(e) {
      return false;
    }
  }
  get(key) {
    return this.data.find(object =>  object.full ? object.key == key : undefined)?.full;
  }
  remove(key) {
    try {
      this.data.slice(this.data.indexOf(this.get(key)));
      this.size -= 1;
      return true;
    } catch(e) {
      return false;
    }
  }
  clear() {
    try {
      this.data = [];
      this.cleared += 1;
      this.size = 0;
      return this.cleared;
    } catch(e) {
      return false;
    }
  }
  
}
