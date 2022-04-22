/* defining the Course class */
const Course = class {
  constructor(data){
    for(let key in data) this[key] = data[key];
  }
  get get_title(){
    return `${this.title} (${this.id})`;
  }
};