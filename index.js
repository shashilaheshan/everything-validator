function regExMatch(regex, val) {
  return regex.test(val);
}

function isEmail(email) {
  let val = email;
  return regExMatch(
    /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/,
    val
  );
}

function isPassword(password, options) {
  //options type={letter,special,numbers,numchar},length
  let val = password;
  let optionLength = Object.keys(options).length;
  let type = options.type ? options.type : "plain";
  let length = options.length;
  if (optionLength > 0) {
    switch (type) {
      case "letters":
        regex = /^[a-zA-Z]+$/;
        break;
      case "digits":
        regex = /^[0-9.]+$/;
        break;
      case "special":
        regex = /[!@#$_%^&*(),.?":{}|<>]/g;
        break;
      case "numchar":
        regex = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;
        break;
      default:
        regex = "";
    }
  }
  if (length > 0) {
    if (regExMatch(regex, val)) {
      if (val.trim().length >= length) {
        return true;
      }
      return false;
    }
    return false;
  } else {
    return regExMatch(regex, val);
  }
}

function isLetters(value) {
  let regex = /^[a-zA-Z]+$/;
  return regExMatch(regex, value);
}
function isDigits(value) {
  let regex = /^[0-9.]+$/;
  return regExMatch(regex, value);
}
function isBirthDay(value, type = "dd/mm/YYYY") {
  let regex;
  switch (type) {
    case "dd/mm/YYYY":
      regex = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
      break;
    case "dd-mm-YYYY":
      regex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
      break;
    case "YYYY-mm-dd":
      regex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
      break;
  }
  return regExMatch(regex, value);
}
function isPhoneNumber(value, size = 10) {
  let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return regExMatch(regex, value);
}

function isUrl(value) {
  let regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  return regExMatch(regex, value);
}
function isJsonObject(value) {
  try {
    JSON.parse(value);
    return true;
  } catch (e) {
    return false;
  }
}
function isIPAddress(value) {
  let regex = /^(?:(?:^|\.)(?:2(?:5[0-5]|[0-4]\d)|1?\d?\d)){4}$/;
  return regExMatch(regex, value);
}
function isFileName(value) {
  let regex = /(.*?)\.(docx|doc|pdf|xml|bmp|ppt|xls|pptx|xsls|json)$/;
  return regExMatch(regex, value);
}

function isImageName(value) {
  let regex = /(.*?)\.(png|jpg|jpeg|gif|bitmap|webp|tiff|bmp|psd|pdf|eps|ai|indd|raw)$/;
  return regExMatch(regex, value);
}

module.exports = {
  isEmail,
  isPassword,
  isLetters,
  isDigits,
  isBirthDay,
  isPhoneNumber,
  isUrl,
  isJsonObject,
  isIPAddress,
  isFileName,
  isImageName
};

