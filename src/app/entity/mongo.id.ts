import {float} from 'aws-sdk/clients/lightsail';

export function ObjectID() {
  const ObjectId = (() => {
    let increment = Math.floor(Math.random() * (16777216));
    const pid = Math.floor(Math.random() * (65536));
    let machine = Math.floor(Math.random() * (16777216));

    const setMachineCookie = () => {
      const cookieList = document.cookie.split('; ');
      // tslint:disable-next-line:forin
      for (const i in cookieList) {
        const cookie = cookieList[i].split('=');
        const cookieMachineId = parseInt(cookie[1], 10);
        if (cookie[0] === 'mongoMachineId' && cookieMachineId && cookieMachineId >= 0 && cookieMachineId <= 16777215) {
          machine = cookieMachineId;
          break;
        }
      }
      document.cookie = 'mongoMachineId=' + machine + ';expires=Tue, 19 Jan 2038 05:00:00 GMT;path=/';
    };
    if (typeof (localStorage) !== typeof undefined) {
      try {
        const mongoMachineId = parseInt(localStorage.getItem('mongoMachineId'), 10);
        if (mongoMachineId >= 0 && mongoMachineId <= 16777215) {
          machine = Math.floor(localStorage.getItem('mongoMachineId') as any as float);
        }
        // Just always stick the value in.
        localStorage.setItem('mongoMachineId', machine.toString());
      } catch (e) {
        setMachineCookie();
      }
    } else {
      setMachineCookie();
    }

    function ObjId() {
      if (!(this instanceof ObjectId)) {
        // @ts-ignore
        return new ObjectId(arguments[0], arguments[1], arguments[2], arguments[3]).toString();
      }

      if (typeof (arguments[0]) === 'object') {
        this.timestamp = arguments[0].timestamp;
        this.machine = arguments[0].machine;
        this.pid = arguments[0].pid;
        this.increment = arguments[0].increment;
      } else if (typeof (arguments[0]) === 'string' && arguments[0].length === 24) {
        this.timestamp = Number('0x' + arguments[0].substr(0, 8));
        this.machine = Number('0x' + arguments[0].substr(8, 6));
        this.pid = Number('0x' + arguments[0].substr(14, 4));
        this.increment = Number('0x' + arguments[0].substr(18, 6));
      } else if (arguments.length === 4 && arguments[0] != null) {
        this.timestamp = arguments[0];
        this.machine = arguments[1];
        this.pid = arguments[2];
        this.increment = arguments[3];
      } else {
        this.timestamp = Math.floor(new Date().valueOf() / 1000);
        this.machine = machine;
        this.pid = pid;
        this.increment = increment++;
        if (increment > 0xffffff) {
          increment = 0;
        }
      }
    }

    return ObjId;
  })();

  ObjectId.prototype.getDate = function() {
    return new Date(this.timestamp * 1000);
  };

  ObjectId.prototype.toArray = function() {
    const strOid = this.toString();
    const array = [];
    let i;
    for (i = 0; i < 12; i++) {
      array[i] = parseInt(strOid.slice(i * 2, i * 2 + 2), 16);
    }
    return array;
  };

  /**
   * Turns a WCF representation of a BSON ObjectId into a 24 character string representation.
   */
  ObjectId.prototype.toString = function() {
    if (this.timestamp === undefined
      || this.machine === undefined
      || this.pid === undefined
      || this.increment === undefined) {
      return 'Invalid ObjectId';
    }

    const timestamp = this.timestamp.toString(16);
    const machine = this.machine.toString(16);
    const pid = this.pid.toString(16);
    const increment = this.increment.toString(16);
    return '00000000'.substr(0, 8 - timestamp.length) + timestamp +
      '000000'.substr(0, 6 - machine.length) + machine +
      '0000'.substr(0, 4 - pid.length) + pid +
      '000000'.substr(0, 6 - increment.length) + increment;
  };

  // @ts-ignore
  return new ObjectId().toString();
}

export function clone(obj: any) {
  return JSON.parse(JSON.stringify(obj || {}));
}

export function equals(array1: any, array2: any) {
  // if the other array is a falsy value, return
  if (!array2) {
    return false;
  }

  // compare lengths - can save a lot of time
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0, l = array1.length; i < l; i++) {
    // Check if we have nested arrays
    if (array1[i] instanceof Array && array2[i] instanceof Array) {
      // recurse into the nested arrays
      if (!array1[i].equals(array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
}
