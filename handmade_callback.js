function yahofunc(param) {
  if(typeof param === "string") {
    return param + "yaho";
  }
}

function merongfunc(param) {
  if(typeof param === "string") {
    return param + "merong";
  }
}

function handMade(test, callback) {
  if(typeof (test) === "string" && typeof callback === "function") {
    console.log(typeof test);
    console.log(typeof callback);

    console.log(callback(test));
  }
}

handMade("나는 이렇게 말하지, ",merongfunc);
handMade("나는 이렇게 말하지, ",yahofunc);
