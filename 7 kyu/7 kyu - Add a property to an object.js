function addProperty(obj, prop, value) {
    if (prop in obj){throw new Error('property already exists');}
    obj[prop] = value;
  }