import {
  Ai,
  Bt,
  Dt,
  Et,
  Fi,
  Gi,
  Hi,
  Ht,
  Jt,
  We,
  Zr,
  _i,
  animated,
  k,
  ni,
  pr,
  require_baseClone,
  require_baseSlice,
  require_jsx_runtime,
  require_omit,
  require_toString,
  to,
  useTransition,
  w
} from "./chunk-GVRTHUP3.js";
import "./chunk-UWZXFKA6.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-UPDK7Z2H.js";

// node_modules/lodash/cloneDeep.js
var require_cloneDeep = __commonJS({
  "node_modules/lodash/cloneDeep.js"(exports, module) {
    var baseClone = require_baseClone();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_SYMBOLS_FLAG = 4;
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }
    module.exports = cloneDeep;
  }
});

// node_modules/lodash/_arrayReduce.js
var require_arrayReduce = __commonJS({
  "node_modules/lodash/_arrayReduce.js"(exports, module) {
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    module.exports = arrayReduce;
  }
});

// node_modules/lodash/_basePropertyOf.js
var require_basePropertyOf = __commonJS({
  "node_modules/lodash/_basePropertyOf.js"(exports, module) {
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = basePropertyOf;
  }
});

// node_modules/lodash/_deburrLetter.js
var require_deburrLetter = __commonJS({
  "node_modules/lodash/_deburrLetter.js"(exports, module) {
    var basePropertyOf = require_basePropertyOf();
    var deburredLetters = {
      // Latin-1 Supplement block.
      "À": "A",
      "Á": "A",
      "Â": "A",
      "Ã": "A",
      "Ä": "A",
      "Å": "A",
      "à": "a",
      "á": "a",
      "â": "a",
      "ã": "a",
      "ä": "a",
      "å": "a",
      "Ç": "C",
      "ç": "c",
      "Ð": "D",
      "ð": "d",
      "È": "E",
      "É": "E",
      "Ê": "E",
      "Ë": "E",
      "è": "e",
      "é": "e",
      "ê": "e",
      "ë": "e",
      "Ì": "I",
      "Í": "I",
      "Î": "I",
      "Ï": "I",
      "ì": "i",
      "í": "i",
      "î": "i",
      "ï": "i",
      "Ñ": "N",
      "ñ": "n",
      "Ò": "O",
      "Ó": "O",
      "Ô": "O",
      "Õ": "O",
      "Ö": "O",
      "Ø": "O",
      "ò": "o",
      "ó": "o",
      "ô": "o",
      "õ": "o",
      "ö": "o",
      "ø": "o",
      "Ù": "U",
      "Ú": "U",
      "Û": "U",
      "Ü": "U",
      "ù": "u",
      "ú": "u",
      "û": "u",
      "ü": "u",
      "Ý": "Y",
      "ý": "y",
      "ÿ": "y",
      "Æ": "Ae",
      "æ": "ae",
      "Þ": "Th",
      "þ": "th",
      "ß": "ss",
      // Latin Extended-A block.
      "Ā": "A",
      "Ă": "A",
      "Ą": "A",
      "ā": "a",
      "ă": "a",
      "ą": "a",
      "Ć": "C",
      "Ĉ": "C",
      "Ċ": "C",
      "Č": "C",
      "ć": "c",
      "ĉ": "c",
      "ċ": "c",
      "č": "c",
      "Ď": "D",
      "Đ": "D",
      "ď": "d",
      "đ": "d",
      "Ē": "E",
      "Ĕ": "E",
      "Ė": "E",
      "Ę": "E",
      "Ě": "E",
      "ē": "e",
      "ĕ": "e",
      "ė": "e",
      "ę": "e",
      "ě": "e",
      "Ĝ": "G",
      "Ğ": "G",
      "Ġ": "G",
      "Ģ": "G",
      "ĝ": "g",
      "ğ": "g",
      "ġ": "g",
      "ģ": "g",
      "Ĥ": "H",
      "Ħ": "H",
      "ĥ": "h",
      "ħ": "h",
      "Ĩ": "I",
      "Ī": "I",
      "Ĭ": "I",
      "Į": "I",
      "İ": "I",
      "ĩ": "i",
      "ī": "i",
      "ĭ": "i",
      "į": "i",
      "ı": "i",
      "Ĵ": "J",
      "ĵ": "j",
      "Ķ": "K",
      "ķ": "k",
      "ĸ": "k",
      "Ĺ": "L",
      "Ļ": "L",
      "Ľ": "L",
      "Ŀ": "L",
      "Ł": "L",
      "ĺ": "l",
      "ļ": "l",
      "ľ": "l",
      "ŀ": "l",
      "ł": "l",
      "Ń": "N",
      "Ņ": "N",
      "Ň": "N",
      "Ŋ": "N",
      "ń": "n",
      "ņ": "n",
      "ň": "n",
      "ŋ": "n",
      "Ō": "O",
      "Ŏ": "O",
      "Ő": "O",
      "ō": "o",
      "ŏ": "o",
      "ő": "o",
      "Ŕ": "R",
      "Ŗ": "R",
      "Ř": "R",
      "ŕ": "r",
      "ŗ": "r",
      "ř": "r",
      "Ś": "S",
      "Ŝ": "S",
      "Ş": "S",
      "Š": "S",
      "ś": "s",
      "ŝ": "s",
      "ş": "s",
      "š": "s",
      "Ţ": "T",
      "Ť": "T",
      "Ŧ": "T",
      "ţ": "t",
      "ť": "t",
      "ŧ": "t",
      "Ũ": "U",
      "Ū": "U",
      "Ŭ": "U",
      "Ů": "U",
      "Ű": "U",
      "Ų": "U",
      "ũ": "u",
      "ū": "u",
      "ŭ": "u",
      "ů": "u",
      "ű": "u",
      "ų": "u",
      "Ŵ": "W",
      "ŵ": "w",
      "Ŷ": "Y",
      "ŷ": "y",
      "Ÿ": "Y",
      "Ź": "Z",
      "Ż": "Z",
      "Ž": "Z",
      "ź": "z",
      "ż": "z",
      "ž": "z",
      "Ĳ": "IJ",
      "ĳ": "ij",
      "Œ": "Oe",
      "œ": "oe",
      "ŉ": "'n",
      "ſ": "s"
    };
    var deburrLetter = basePropertyOf(deburredLetters);
    module.exports = deburrLetter;
  }
});

// node_modules/lodash/deburr.js
var require_deburr = __commonJS({
  "node_modules/lodash/deburr.js"(exports, module) {
    var deburrLetter = require_deburrLetter();
    var toString = require_toString();
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsCombo = "[" + rsComboRange + "]";
    var reComboMark = RegExp(rsCombo, "g");
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
    }
    module.exports = deburr;
  }
});

// node_modules/lodash/_asciiWords.js
var require_asciiWords = __commonJS({
  "node_modules/lodash/_asciiWords.js"(exports, module) {
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    module.exports = asciiWords;
  }
});

// node_modules/lodash/_hasUnicodeWord.js
var require_hasUnicodeWord = __commonJS({
  "node_modules/lodash/_hasUnicodeWord.js"(exports, module) {
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    module.exports = hasUnicodeWord;
  }
});

// node_modules/lodash/_unicodeWords.js
var require_unicodeWords = __commonJS({
  "node_modules/lodash/_unicodeWords.js"(exports, module) {
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsDingbatRange = "\\u2700-\\u27bf";
    var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
    var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
    var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
    var rsPunctuationRange = "\\u2000-\\u206f";
    var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
    var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['’]";
    var rsBreak = "[" + rsBreakRange + "]";
    var rsCombo = "[" + rsComboRange + "]";
    var rsDigits = "\\d+";
    var rsDingbat = "[" + rsDingbatRange + "]";
    var rsLower = "[" + rsLowerRange + "]";
    var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsUpper = "[" + rsUpperRange + "]";
    var rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")";
    var rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")";
    var rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
    var rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
    var rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
      rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
      rsUpper + "+" + rsOptContrUpper,
      rsOrdUpper,
      rsOrdLower,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    module.exports = unicodeWords;
  }
});

// node_modules/lodash/words.js
var require_words = __commonJS({
  "node_modules/lodash/words.js"(exports, module) {
    var asciiWords = require_asciiWords();
    var hasUnicodeWord = require_hasUnicodeWord();
    var toString = require_toString();
    var unicodeWords = require_unicodeWords();
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? void 0 : pattern;
      if (pattern === void 0) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }
    module.exports = words;
  }
});

// node_modules/lodash/_createCompounder.js
var require_createCompounder = __commonJS({
  "node_modules/lodash/_createCompounder.js"(exports, module) {
    var arrayReduce = require_arrayReduce();
    var deburr = require_deburr();
    var words = require_words();
    var rsApos = "['’]";
    var reApos = RegExp(rsApos, "g");
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
      };
    }
    module.exports = createCompounder;
  }
});

// node_modules/lodash/_castSlice.js
var require_castSlice = __commonJS({
  "node_modules/lodash/_castSlice.js"(exports, module) {
    var baseSlice = require_baseSlice();
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === void 0 ? length : end;
      return !start && end >= length ? array : baseSlice(array, start, end);
    }
    module.exports = castSlice;
  }
});

// node_modules/lodash/_hasUnicode.js
var require_hasUnicode = __commonJS({
  "node_modules/lodash/_hasUnicode.js"(exports, module) {
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsZWJ = "\\u200d";
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    module.exports = hasUnicode;
  }
});

// node_modules/lodash/_asciiToArray.js
var require_asciiToArray = __commonJS({
  "node_modules/lodash/_asciiToArray.js"(exports, module) {
    function asciiToArray(string) {
      return string.split("");
    }
    module.exports = asciiToArray;
  }
});

// node_modules/lodash/_unicodeToArray.js
var require_unicodeToArray = __commonJS({
  "node_modules/lodash/_unicodeToArray.js"(exports, module) {
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsCombo = "[" + rsComboRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsZWJ = "\\u200d";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    module.exports = unicodeToArray;
  }
});

// node_modules/lodash/_stringToArray.js
var require_stringToArray = __commonJS({
  "node_modules/lodash/_stringToArray.js"(exports, module) {
    var asciiToArray = require_asciiToArray();
    var hasUnicode = require_hasUnicode();
    var unicodeToArray = require_unicodeToArray();
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    module.exports = stringToArray;
  }
});

// node_modules/lodash/_createCaseFirst.js
var require_createCaseFirst = __commonJS({
  "node_modules/lodash/_createCaseFirst.js"(exports, module) {
    var castSlice = require_castSlice();
    var hasUnicode = require_hasUnicode();
    var stringToArray = require_stringToArray();
    var toString = require_toString();
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
      };
    }
    module.exports = createCaseFirst;
  }
});

// node_modules/lodash/upperFirst.js
var require_upperFirst = __commonJS({
  "node_modules/lodash/upperFirst.js"(exports, module) {
    var createCaseFirst = require_createCaseFirst();
    var upperFirst = createCaseFirst("toUpperCase");
    module.exports = upperFirst;
  }
});

// node_modules/lodash/startCase.js
var require_startCase = __commonJS({
  "node_modules/lodash/startCase.js"(exports, module) {
    var createCompounder = require_createCompounder();
    var upperFirst = require_upperFirst();
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? " " : "") + upperFirst(word);
    });
    module.exports = startCase;
  }
});

// node_modules/@nivo/treemap/dist/nivo-treemap.es.js
var import_react = __toESM(require_react());
var import_omit = __toESM(require_omit());
var import_cloneDeep = __toESM(require_cloneDeep());
var import_startCase = __toESM(require_startCase());

// node_modules/d3-hierarchy/src/hierarchy/count.js
function count(node) {
  var sum = 0, children = node.children, i2 = children && children.length;
  if (!i2)
    sum = 1;
  else
    while (--i2 >= 0)
      sum += children[i2].value;
  node.value = sum;
}
function count_default() {
  return this.eachAfter(count);
}

// node_modules/d3-hierarchy/src/hierarchy/each.js
function each_default(callback) {
  var node = this, current, next = [node], children, i2, n2;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      callback(node), children = node.children;
      if (children)
        for (i2 = 0, n2 = children.length; i2 < n2; ++i2) {
          next.push(children[i2]);
        }
    }
  } while (next.length);
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
function eachBefore_default(callback) {
  var node = this, nodes = [node], children, i2;
  while (node = nodes.pop()) {
    callback(node), children = node.children;
    if (children)
      for (i2 = children.length - 1; i2 >= 0; --i2) {
        nodes.push(children[i2]);
      }
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
function eachAfter_default(callback) {
  var node = this, nodes = [node], next = [], children, i2, n2;
  while (node = nodes.pop()) {
    next.push(node), children = node.children;
    if (children)
      for (i2 = 0, n2 = children.length; i2 < n2; ++i2) {
        nodes.push(children[i2]);
      }
  }
  while (node = next.pop()) {
    callback(node);
  }
  return this;
}

// node_modules/d3-hierarchy/src/hierarchy/sum.js
function sum_default(value) {
  return this.eachAfter(function(node) {
    var sum = +value(node.data) || 0, children = node.children, i2 = children && children.length;
    while (--i2 >= 0)
      sum += children[i2].value;
    node.value = sum;
  });
}

// node_modules/d3-hierarchy/src/hierarchy/sort.js
function sort_default(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
}

// node_modules/d3-hierarchy/src/hierarchy/path.js
function path_default(end) {
  var start = this, ancestor = leastCommonAncestor(start, end), nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k2 = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k2, 0, end);
    end = end.parent;
  }
  return nodes;
}
function leastCommonAncestor(a2, b) {
  if (a2 === b)
    return a2;
  var aNodes = a2.ancestors(), bNodes = b.ancestors(), c = null;
  a2 = aNodes.pop();
  b = bNodes.pop();
  while (a2 === b) {
    c = a2;
    a2 = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}

// node_modules/d3-hierarchy/src/hierarchy/ancestors.js
function ancestors_default() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
}

// node_modules/d3-hierarchy/src/hierarchy/descendants.js
function descendants_default() {
  var nodes = [];
  this.each(function(node) {
    nodes.push(node);
  });
  return nodes;
}

// node_modules/d3-hierarchy/src/hierarchy/leaves.js
function leaves_default() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
}

// node_modules/d3-hierarchy/src/hierarchy/links.js
function links_default() {
  var root = this, links = [];
  root.each(function(node) {
    if (node !== root) {
      links.push({ source: node.parent, target: node });
    }
  });
  return links;
}

// node_modules/d3-hierarchy/src/hierarchy/index.js
function hierarchy(data, children) {
  var root = new Node(data), valued = +data.value && (root.value = data.value), node, nodes = [root], child, childs, i2, n2;
  if (children == null)
    children = defaultChildren;
  while (node = nodes.pop()) {
    if (valued)
      node.value = +node.data.value;
    if ((childs = children(node.data)) && (n2 = childs.length)) {
      node.children = new Array(n2);
      for (i2 = n2 - 1; i2 >= 0; --i2) {
        nodes.push(child = node.children[i2] = new Node(childs[i2]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }
  return root.eachBefore(computeHeight);
}
function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}
function defaultChildren(d) {
  return d.children;
}
function copyData(node) {
  node.data = node.data.data;
}
function computeHeight(node) {
  var height = 0;
  do
    node.height = height;
  while ((node = node.parent) && node.height < ++height);
}
function Node(data) {
  this.data = data;
  this.depth = this.height = 0;
  this.parent = null;
}
Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: count_default,
  each: each_default,
  eachAfter: eachAfter_default,
  eachBefore: eachBefore_default,
  sum: sum_default,
  sort: sort_default,
  path: path_default,
  ancestors: ancestors_default,
  descendants: descendants_default,
  leaves: leaves_default,
  links: links_default,
  copy: node_copy
};

// node_modules/d3-hierarchy/src/array.js
var slice = Array.prototype.slice;

// node_modules/d3-hierarchy/src/accessors.js
function required(f) {
  if (typeof f !== "function")
    throw new Error();
  return f;
}

// node_modules/d3-hierarchy/src/constant.js
function constantZero() {
  return 0;
}
function constant_default(x) {
  return function() {
    return x;
  };
}

// node_modules/d3-hierarchy/src/treemap/round.js
function round_default(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
}

// node_modules/d3-hierarchy/src/treemap/dice.js
function dice_default(parent, x0, y0, x1, y1) {
  var nodes = parent.children, node, i2 = -1, n2 = nodes.length, k2 = parent.value && (x1 - x0) / parent.value;
  while (++i2 < n2) {
    node = nodes[i2], node.y0 = y0, node.y1 = y1;
    node.x0 = x0, node.x1 = x0 += node.value * k2;
  }
}

// node_modules/d3-hierarchy/src/tree.js
function TreeNode(node, i2) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null;
  this.a = this;
  this.z = 0;
  this.m = 0;
  this.c = 0;
  this.s = 0;
  this.t = null;
  this.i = i2;
}
TreeNode.prototype = Object.create(Node.prototype);

// node_modules/d3-hierarchy/src/treemap/slice.js
function slice_default(parent, x0, y0, x1, y1) {
  var nodes = parent.children, node, i2 = -1, n2 = nodes.length, k2 = parent.value && (y1 - y0) / parent.value;
  while (++i2 < n2) {
    node = nodes[i2], node.x0 = x0, node.x1 = x1;
    node.y0 = y0, node.y1 = y0 += node.value * k2;
  }
}

// node_modules/d3-hierarchy/src/treemap/squarify.js
var phi = (1 + Math.sqrt(5)) / 2;
function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
  var rows = [], nodes = parent.children, row, nodeValue, i0 = 0, i1 = 0, n2 = nodes.length, dx, dy, value = parent.value, sumValue, minValue, maxValue, newRatio, minRatio, alpha, beta;
  while (i0 < n2) {
    dx = x1 - x0, dy = y1 - y0;
    do
      sumValue = nodes[i1++].value;
    while (!sumValue && i1 < n2);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);
    for (; i1 < n2; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue)
        minValue = nodeValue;
      if (nodeValue > maxValue)
        maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) {
        sumValue -= nodeValue;
        break;
      }
      minRatio = newRatio;
    }
    rows.push(row = { value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1) });
    if (row.dice)
      dice_default(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
    else
      slice_default(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
    value -= sumValue, i0 = i1;
  }
  return rows;
}
var squarify_default = function custom(ratio) {
  function squarify(parent, x0, y0, x1, y1) {
    squarifyRatio(ratio, parent, x0, y0, x1, y1);
  }
  squarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };
  return squarify;
}(phi);

// node_modules/d3-hierarchy/src/treemap/index.js
function treemap_default() {
  var tile = squarify_default, round = false, dx = 1, dy = 1, paddingStack = [0], paddingInner = constantZero, paddingTop = constantZero, paddingRight = constantZero, paddingBottom = constantZero, paddingLeft = constantZero;
  function treemap(root) {
    root.x0 = root.y0 = 0;
    root.x1 = dx;
    root.y1 = dy;
    root.eachBefore(positionNode);
    paddingStack = [0];
    if (round)
      root.eachBefore(round_default);
    return root;
  }
  function positionNode(node) {
    var p = paddingStack[node.depth], x0 = node.x0 + p, y0 = node.y0 + p, x1 = node.x1 - p, y1 = node.y1 - p;
    if (x1 < x0)
      x0 = x1 = (x0 + x1) / 2;
    if (y1 < y0)
      y0 = y1 = (y0 + y1) / 2;
    node.x0 = x0;
    node.y0 = y0;
    node.x1 = x1;
    node.y1 = y1;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x0 += paddingLeft(node) - p;
      y0 += paddingTop(node) - p;
      x1 -= paddingRight(node) - p;
      y1 -= paddingBottom(node) - p;
      if (x1 < x0)
        x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0)
        y0 = y1 = (y0 + y1) / 2;
      tile(node, x0, y0, x1, y1);
    }
  }
  treemap.round = function(x) {
    return arguments.length ? (round = !!x, treemap) : round;
  };
  treemap.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
  };
  treemap.tile = function(x) {
    return arguments.length ? (tile = required(x), treemap) : tile;
  };
  treemap.padding = function(x) {
    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
  };
  treemap.paddingInner = function(x) {
    return arguments.length ? (paddingInner = typeof x === "function" ? x : constant_default(+x), treemap) : paddingInner;
  };
  treemap.paddingOuter = function(x) {
    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
  };
  treemap.paddingTop = function(x) {
    return arguments.length ? (paddingTop = typeof x === "function" ? x : constant_default(+x), treemap) : paddingTop;
  };
  treemap.paddingRight = function(x) {
    return arguments.length ? (paddingRight = typeof x === "function" ? x : constant_default(+x), treemap) : paddingRight;
  };
  treemap.paddingBottom = function(x) {
    return arguments.length ? (paddingBottom = typeof x === "function" ? x : constant_default(+x), treemap) : paddingBottom;
  };
  treemap.paddingLeft = function(x) {
    return arguments.length ? (paddingLeft = typeof x === "function" ? x : constant_default(+x), treemap) : paddingLeft;
  };
  return treemap;
}

// node_modules/d3-hierarchy/src/treemap/binary.js
function binary_default(parent, x0, y0, x1, y1) {
  var nodes = parent.children, i2, n2 = nodes.length, sum, sums = new Array(n2 + 1);
  for (sums[0] = sum = i2 = 0; i2 < n2; ++i2) {
    sums[i2 + 1] = sum += nodes[i2].value;
  }
  partition(0, n2, parent.value, x0, y0, x1, y1);
  function partition(i3, j2, value, x02, y02, x12, y12) {
    if (i3 >= j2 - 1) {
      var node = nodes[i3];
      node.x0 = x02, node.y0 = y02;
      node.x1 = x12, node.y1 = y12;
      return;
    }
    var valueOffset = sums[i3], valueTarget = value / 2 + valueOffset, k2 = i3 + 1, hi = j2 - 1;
    while (k2 < hi) {
      var mid = k2 + hi >>> 1;
      if (sums[mid] < valueTarget)
        k2 = mid + 1;
      else
        hi = mid;
    }
    if (valueTarget - sums[k2 - 1] < sums[k2] - valueTarget && i3 + 1 < k2)
      --k2;
    var valueLeft = sums[k2] - valueOffset, valueRight = value - valueLeft;
    if (x12 - x02 > y12 - y02) {
      var xk = (x02 * valueRight + x12 * valueLeft) / value;
      partition(i3, k2, valueLeft, x02, y02, xk, y12);
      partition(k2, j2, valueRight, xk, y02, x12, y12);
    } else {
      var yk = (y02 * valueRight + y12 * valueLeft) / value;
      partition(i3, k2, valueLeft, x02, y02, x12, yk);
      partition(k2, j2, valueRight, x02, yk, x12, y12);
    }
  }
}

// node_modules/d3-hierarchy/src/treemap/sliceDice.js
function sliceDice_default(parent, x0, y0, x1, y1) {
  (parent.depth & 1 ? slice_default : dice_default)(parent, x0, y0, x1, y1);
}

// node_modules/d3-hierarchy/src/treemap/resquarify.js
var resquarify_default = function custom2(ratio) {
  function resquarify(parent, x0, y0, x1, y1) {
    if ((rows = parent._squarify) && rows.ratio === ratio) {
      var rows, row, nodes, i2, j2 = -1, n2, m2 = rows.length, value = parent.value;
      while (++j2 < m2) {
        row = rows[j2], nodes = row.children;
        for (i2 = row.value = 0, n2 = nodes.length; i2 < n2; ++i2)
          row.value += nodes[i2].value;
        if (row.dice)
          dice_default(row, x0, y0, x1, y0 += (y1 - y0) * row.value / value);
        else
          slice_default(row, x0, y0, x0 += (x1 - x0) * row.value / value, y1);
        value -= row.value;
      }
    } else {
      parent._squarify = rows = squarifyRatio(ratio, parent, x0, y0, x1, y1);
      rows.ratio = ratio;
    }
  }
  resquarify.ratio = function(x) {
    return custom2((x = +x) > 1 ? x : 1);
  };
  return resquarify;
}(phi);

// node_modules/@nivo/treemap/dist/nivo-treemap.es.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
function j() {
  return j = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var o2 = arguments[t2];
      for (var n2 in o2)
        Object.prototype.hasOwnProperty.call(o2, n2) && (e2[n2] = o2[n2]);
    }
    return e2;
  }, j.apply(this, arguments);
}
function D(e2, t2) {
  if (null == e2)
    return {};
  var o2, n2, i2 = {}, a2 = Object.keys(e2);
  for (n2 = 0; n2 < a2.length; n2++)
    o2 = a2[n2], t2.indexOf(o2) >= 0 || (i2[o2] = e2[o2]);
  return i2;
}
var H = function(e2, t2) {
  return to([e2, t2], function(e3, t3) {
    return "translate(" + e3 + "," + t3 + ")";
  });
};
var V = function(e2, t2) {
  return to([e2, t2], function(e3, t3) {
    return "translate(" + e3 + "px, " + t3 + "px)";
  });
};
var q = function(e2, t2, o2) {
  return to([e2, t2, o2], function(e3, t3, o3) {
    return "translate(" + e3 + "," + t3 + ") rotate(" + o3 + ")";
  });
};
var A = function(e2, t2, o2) {
  return to([e2, t2, o2], function(e3, t3, o3) {
    return "translate(" + e3 + "px," + t3 + "px) rotate(" + o3 + "deg)";
  });
};
var G = function(e2, t2, o2) {
  return to([e2, t2, o2], function(e3, t3, o3) {
    return "translate(" + (e3 - (0 === o3 ? 0 : 5)) + "px," + (t3 - (0 === o3 ? 5 : 0)) + "px) rotate(" + o3 + "deg)";
  });
};
var J = (0, import_react.memo)(function(e2) {
  var t2 = e2.node, o2 = e2.animatedProps, n2 = e2.borderWidth, i2 = e2.enableLabel, a2 = e2.enableParentLabel, r2 = e2.labelSkipSize, d = Et(), b = i2 && t2.isLeaf && (0 === r2 || Math.min(t2.width, t2.height) > r2), u = a2 && t2.isParent;
  return (0, import_jsx_runtime.jsxs)(animated.g, { transform: H(o2.x, o2.y), children: [(0, import_jsx_runtime.jsx)(animated.rect, { "data-testid": "node." + t2.id, width: to(o2.width, function(e3) {
    return Math.max(e3, 0);
  }), height: to(o2.height, function(e3) {
    return Math.max(e3, 0);
  }), fill: t2.fill ? t2.fill : o2.color, strokeWidth: n2, stroke: t2.borderColor, fillOpacity: t2.opacity, onMouseEnter: t2.onMouseEnter, onMouseMove: t2.onMouseMove, onMouseLeave: t2.onMouseLeave, onClick: t2.onClick }), b && (0, import_jsx_runtime.jsx)(animated.text, { "data-testid": "label." + t2.id, textAnchor: "middle", dominantBaseline: "central", style: j({}, d.labels.text, { fill: t2.labelTextColor, pointerEvents: "none" }), fillOpacity: o2.labelOpacity, transform: q(o2.labelX, o2.labelY, o2.labelRotation), children: t2.label }), u && (0, import_jsx_runtime.jsx)(animated.text, { "data-testid": "parentLabel." + t2.id, dominantBaseline: "central", style: j({}, d.labels.text, { fill: t2.parentLabelTextColor, pointerEvents: "none" }), fillOpacity: o2.parentLabelOpacity, transform: q(o2.parentLabelX, o2.parentLabelY, o2.parentLabelRotation), children: t2.parentLabel })] });
});
var K = (0, import_react.memo)(function(e2) {
  var t2 = e2.node;
  return (0, import_jsx_runtime.jsx)(w, { id: t2.id, value: t2.formattedValue, enableChip: true, color: t2.color });
});
var N = (0, import_react.memo)(function(e2) {
  var t2 = e2.node, o2 = e2.animatedProps, n2 = e2.borderWidth, i2 = e2.enableLabel, a2 = e2.enableParentLabel, r2 = e2.labelSkipSize, d = Et(), b = i2 && t2.isLeaf && (0 === r2 || Math.min(t2.width, t2.height) > r2), u = a2 && t2.isParent;
  return (0, import_jsx_runtime.jsxs)(animated.div, { "data-testid": "node." + t2.id, id: t2.path.replace(/[^\w]/gi, "-"), style: { boxSizing: "border-box", position: "absolute", top: 0, left: 0, transform: V(o2.x, o2.y), width: o2.width, height: o2.height, borderWidth: n2, borderStyle: "solid", borderColor: t2.borderColor, overflow: "hidden" }, children: [(0, import_jsx_runtime.jsx)(animated.div, { style: { boxSizing: "border-box", position: "absolute", top: 0, left: 0, opacity: t2.opacity, width: o2.width, height: o2.height, background: o2.color }, onMouseEnter: t2.onMouseEnter, onMouseMove: t2.onMouseMove, onMouseLeave: t2.onMouseLeave, onClick: t2.onClick }), b && (0, import_jsx_runtime.jsx)(animated.span, { "data-testid": "label." + t2.id, style: j({}, d.labels.text, { position: "absolute", display: "flex", top: -5, left: -5, width: 10, height: 10, justifyContent: "center", alignItems: "center", whiteSpace: "nowrap", color: t2.labelTextColor, transformOrigin: "center center", transform: A(o2.labelX, o2.labelY, o2.labelRotation), opacity: o2.labelOpacity, pointerEvents: "none" }), children: t2.label }), u && (0, import_jsx_runtime.jsx)(animated.span, { "data-testid": "parentLabel." + t2.id, style: j({}, d.labels.text, { position: "absolute", display: "flex", justifyContent: "flex-start", alignItems: "center", whiteSpace: "nowrap", width: 10, height: 10, color: t2.parentLabelTextColor, transformOrigin: "top left", transform: G(o2.parentLabelX, o2.parentLabelY, o2.parentLabelRotation), opacity: o2.parentLabelOpacity, pointerEvents: "none" }), children: t2.parentLabel })] });
});
var Q = { layers: ["nodes"], identity: "id", value: "value", tile: "squarify", leavesOnly: false, innerPadding: 0, outerPadding: 0, colors: { scheme: "nivo" }, colorBy: "pathComponents.1", nodeOpacity: 0.33, enableLabel: true, label: "formattedValue", labelSkipSize: 0, labelTextColor: { from: "color", modifiers: [["darker", 1]] }, orientLabel: true, enableParentLabel: true, parentLabel: "id", parentLabelSize: 20, parentLabelPosition: "top", parentLabelPadding: 6, parentLabelTextColor: { from: "color", modifiers: [["darker", 1]] }, borderWidth: 1, borderColor: { from: "color", modifiers: [["darker", 1]] }, isInteractive: true, tooltip: K, role: "img", animate: true, motionConfig: "gentle" };
var U = j({}, Q, { nodeComponent: J, defs: [], fill: [] });
var Z = j({}, Q, { nodeComponent: N });
var $ = j({}, Q, { pixelRatio: "undefined" != typeof window && window.devicePixelRatio || 1 });
var _ = { binary: binary_default, dice: dice_default, slice: slice_default, sliceDice: sliceDice_default, squarify: squarify_default };
var ee = function(e2) {
  var t2 = e2.root, o2 = e2.getValue;
  return (0, import_react.useMemo)(function() {
    return hierarchy(t2).sum(o2);
  }, [t2, o2]);
};
var te = function(e2) {
  var t2 = e2.data, o2 = e2.width, i2 = e2.height, a2 = e2.identity, r2 = void 0 === a2 ? Q.identity : a2, u = e2.value, p = void 0 === u ? Q.value : u, c = e2.valueFormat, s = e2.leavesOnly, v = void 0 === s ? Q.leavesOnly : s, h = e2.tile, f = void 0 === h ? Q.tile : h, L = e2.innerPadding, g = void 0 === L ? Q.innerPadding : L, x = e2.outerPadding, P = void 0 === x ? Q.outerPadding : x, M = e2.label, w2 = void 0 === M ? Q.label : M, S = e2.orientLabel, k2 = void 0 === S ? Q.orientLabel : S, I = e2.enableParentLabel, z = void 0 === I ? Q.enableParentLabel : I, B = e2.parentLabel, R = void 0 === B ? Q.parentLabel : B, E = e2.parentLabelSize, X2 = void 0 === E ? Q.parentLabelSize : E, Y2 = e2.parentLabelPosition, F2 = void 0 === Y2 ? Q.parentLabelPosition : Y2, D2 = e2.parentLabelPadding, H2 = void 0 === D2 ? Q.parentLabelPadding : D2, V2 = e2.colors, q2 = void 0 === V2 ? Q.colors : V2, A2 = e2.colorBy, G2 = void 0 === A2 ? Q.colorBy : A2, J2 = e2.nodeOpacity, K2 = void 0 === J2 ? Q.nodeOpacity : J2, N2 = e2.borderColor, U2 = void 0 === N2 ? Q.borderColor : N2, Z2 = e2.labelTextColor, $2 = void 0 === Z2 ? Q.labelTextColor : Z2, te2 = e2.parentLabelTextColor, oe2 = void 0 === te2 ? Q.parentLabelTextColor : te2, ne2 = Gi(r2), ie2 = Gi(p), ae2 = Dt(c), re2 = Gi(w2), le2 = Gi(R), de2 = function(e3) {
    var t3 = e3.width, o3 = e3.height, i3 = e3.tile, a3 = e3.innerPadding, r3 = e3.outerPadding, l = e3.enableParentLabel, d = e3.parentLabelSize, b = e3.parentLabelPosition, u2 = e3.leavesOnly;
    return (0, import_react.useMemo)(function() {
      var e4 = treemap_default().size([t3, o3]).tile(_[i3]).round(true).paddingInner(a3).paddingOuter(r3);
      if (l && !u2) {
        var n2 = d + 2 * r3;
        e4["padding" + (0, import_startCase.default)(b)](n2);
      }
      return e4;
    }, [t3, o3, i3, a3, r3, l, d, b, u2]);
  }({ width: o2, height: i2, tile: f, innerPadding: g, outerPadding: P, enableParentLabel: z, parentLabelSize: X2, parentLabelPosition: F2, leavesOnly: v }), be2 = ee({ root: t2, getValue: ie2 }), ue2 = (0, import_react.useMemo)(function() {
    var e3 = (0, import_cloneDeep.default)(be2);
    return de2(e3), v ? e3.leaves() : e3.descendants();
  }, [be2, de2, v]), pe2 = (0, import_react.useMemo)(function() {
    return ue2.map(function(e3) {
      var t3 = function(e4, t4) {
        var o4 = e4.ancestors().map(function(e5) {
          return t4(e5.data);
        }).reverse();
        return { path: o4.join("."), pathComponents: o4 };
      }(e3, ne2), o3 = t3.path, n2 = t3.pathComponents, i3 = { id: ne2(e3.data), path: o3, pathComponents: n2, data: (0, import_omit.default)(e3.data, "children"), x: e3.x0, y: e3.y0, width: e3.x1 - e3.x0, height: e3.y1 - e3.y0, value: e3.value, formattedValue: ae2(e3.value), treeDepth: e3.depth, treeHeight: e3.height, isParent: e3.height > 0, isLeaf: 0 === e3.height, parentLabelX: 0, parentLabelY: 0, parentLabelRotation: 0 };
      return i3.labelRotation = k2 && i3.height > i3.width ? -90 : 0, "top" === F2 && (i3.parentLabelX = P + H2, i3.parentLabelY = P + X2 / 2), "right" === F2 && (i3.parentLabelX = i3.width - P - X2 / 2, i3.parentLabelY = i3.height - P - H2, i3.parentLabelRotation = -90), "bottom" === F2 && (i3.parentLabelX = P + H2, i3.parentLabelY = i3.height - P - X2 / 2), "left" === F2 && (i3.parentLabelX = P + X2 / 2, i3.parentLabelY = i3.height - P - H2, i3.parentLabelRotation = -90), i3.label = re2(i3), i3.parentLabel = le2(i3), i3;
    });
  }, [ue2, ne2, ae2, re2, k2, le2, X2, F2, H2, P]), ce2 = Et(), se2 = pr(q2, G2), ve2 = We(U2, ce2), he2 = We($2, ce2), fe2 = We(oe2, ce2), Le2 = (0, import_react.useMemo)(function() {
    return pe2.map(function(e3) {
      var t3 = j({}, e3, { color: se2(e3), opacity: K2 });
      return t3.borderColor = ve2(t3), t3.labelTextColor = he2(t3), t3.parentLabelTextColor = fe2(t3), t3;
    });
  }, [pe2, se2, K2, ve2, he2, fe2]);
  return { hierarchy: be2, nodes: Le2, layout: de2 };
};
var oe = function(e2) {
  var t2 = e2.nodes;
  return (0, import_react.useMemo)(function() {
    return { nodes: t2 };
  }, [t2]);
};
var ne = function(e2) {
  return { x: e2.x, y: e2.y, width: e2.width, height: e2.height, color: e2.color, labelX: e2.width / 2, labelY: e2.height / 2, labelRotation: e2.labelRotation, labelOpacity: 1, parentLabelX: e2.parentLabelX, parentLabelY: e2.parentLabelY, parentLabelRotation: e2.parentLabelRotation, parentLabelOpacity: 1 };
};
var ie = function(e2) {
  return { x: e2.x + e2.width / 2, y: e2.y + e2.height / 2, width: 0, height: 0, color: e2.color, labelX: 0, labelY: 0, labelRotation: e2.labelRotation, labelOpacity: 0, parentLabelX: 0, parentLabelY: 0, parentLabelRotation: e2.parentLabelRotation, parentLabelOpacity: 0 };
};
var ae = (0, import_react.memo)(function(e2) {
  var i2 = e2.nodes, a2 = e2.nodeComponent, r2 = e2.borderWidth, l = e2.enableLabel, d = e2.labelSkipSize, b = e2.enableParentLabel, p = function(e3, i3) {
    var a3 = i3.isInteractive, r3 = i3.onMouseEnter, l2 = i3.onMouseMove, d2 = i3.onMouseLeave, b2 = i3.onClick, u = i3.tooltip, p2 = k(), c2 = p2.showTooltipFromEvent, s2 = p2.hideTooltip, v2 = (0, import_react.useCallback)(function(e4, t2) {
      c2((0, import_react.createElement)(u, { node: e4 }), t2, "left");
    }, [c2, u]), h2 = (0, import_react.useCallback)(function(e4, t2) {
      v2(e4, t2), null == r3 || r3(e4, t2);
    }, [r3, v2]), f = (0, import_react.useCallback)(function(e4, t2) {
      v2(e4, t2), null == l2 || l2(e4, t2);
    }, [l2, v2]), L = (0, import_react.useCallback)(function(e4, t2) {
      s2(), null == d2 || d2(e4, t2);
    }, [d2, s2]), g = (0, import_react.useCallback)(function(e4, t2) {
      null == b2 || b2(e4, t2);
    }, [b2]);
    return (0, import_react.useMemo)(function() {
      return e3.map(function(e4) {
        return a3 ? j({}, e4, { onMouseEnter: function(t2) {
          return h2(e4, t2);
        }, onMouseMove: function(t2) {
          return f(e4, t2);
        }, onMouseLeave: function(t2) {
          return L(e4, t2);
        }, onClick: function(t2) {
          return g(e4, t2);
        } }) : e4;
      });
    }, [a3, e3, h2, f, L, g]);
  }(i2, { isInteractive: e2.isInteractive, onMouseEnter: e2.onMouseEnter, onMouseMove: e2.onMouseMove, onMouseLeave: e2.onMouseLeave, onClick: e2.onClick, tooltip: e2.tooltip }), c = Zr(), s = c.animate, v = c.config, h = useTransition(p, { keys: function(e3) {
    return e3.path;
  }, initial: ne, from: ie, enter: ne, update: ne, leave: ie, config: v, immediate: !s });
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: h(function(e3, t2) {
    return (0, import_react.createElement)(a2, { key: t2.path, node: t2, animatedProps: e3, borderWidth: r2, enableLabel: l, labelSkipSize: d, enableParentLabel: b });
  }) });
});
var re = ["isInteractive", "animate", "motionConfig", "theme", "renderWrapper"];
var le = function(e2) {
  var t2 = e2.data, n2 = e2.identity, a2 = void 0 === n2 ? U.identity : n2, r2 = e2.value, l = void 0 === r2 ? U.value : r2, d = e2.valueFormat, b = e2.tile, u = void 0 === b ? U.tile : b, p = e2.nodeComponent, h = void 0 === p ? U.nodeComponent : p, f = e2.innerPadding, L = void 0 === f ? U.innerPadding : f, g = e2.outerPadding, m2 = void 0 === g ? U.outerPadding : g, y2 = e2.leavesOnly, C2 = void 0 === y2 ? U.leavesOnly : y2, x = e2.width, P = e2.height, M = e2.margin, w2 = e2.layers, S = void 0 === w2 ? U.layers : w2, O = e2.colors, k2 = void 0 === O ? U.colors : O, T = e2.colorBy, W = void 0 === T ? U.colorBy : T, I = e2.nodeOpacity, z = void 0 === I ? U.nodeOpacity : I, B = e2.borderWidth, R = void 0 === B ? U.borderWidth : B, E = e2.borderColor, X2 = void 0 === E ? U.borderColor : E, F2 = e2.defs, j2 = void 0 === F2 ? U.defs : F2, D2 = e2.fill, H2 = void 0 === D2 ? U.fill : D2, V2 = e2.enableLabel, q2 = void 0 === V2 ? U.enableLabel : V2, A2 = e2.label, G2 = void 0 === A2 ? U.label : A2, J2 = e2.labelTextColor, K2 = void 0 === J2 ? U.labelTextColor : J2, N2 = e2.orientLabel, Q2 = void 0 === N2 ? U.orientLabel : N2, Z2 = e2.labelSkipSize, $2 = void 0 === Z2 ? U.labelSkipSize : Z2, _2 = e2.enableParentLabel, ee2 = void 0 === _2 ? U.enableParentLabel : _2, ne2 = e2.parentLabel, ie2 = void 0 === ne2 ? U.parentLabel : ne2, re2 = e2.parentLabelSize, le2 = void 0 === re2 ? U.parentLabelSize : re2, de2 = e2.parentLabelPosition, be2 = void 0 === de2 ? U.parentLabelPosition : de2, ue2 = e2.parentLabelPadding, pe2 = void 0 === ue2 ? U.parentLabelPadding : ue2, ce2 = e2.parentLabelTextColor, se2 = void 0 === ce2 ? U.parentLabelTextColor : ce2, ve2 = e2.isInteractive, he2 = void 0 === ve2 ? U.isInteractive : ve2, fe2 = e2.onMouseEnter, Le2 = e2.onMouseMove, ge2 = e2.onMouseLeave, me = e2.onClick, ye = e2.tooltip, Ce = void 0 === ye ? U.tooltip : ye, xe = e2.role, Pe = e2.ariaLabel, Me = e2.ariaLabelledBy, we = e2.ariaDescribedBy, Se = Bt(x, P, M), Oe = Se.margin, ke = Se.innerWidth, Te = Se.innerHeight, We2 = Se.outerWidth, Ie = Se.outerHeight, ze = te({ data: t2, identity: a2, value: l, valueFormat: d, leavesOnly: C2, width: ke, height: Te, tile: u, innerPadding: L, outerPadding: m2, colors: k2, colorBy: W, nodeOpacity: z, borderColor: X2, label: G2, labelTextColor: K2, orientLabel: Q2, enableParentLabel: ee2, parentLabel: ie2, parentLabelSize: le2, parentLabelPosition: be2, parentLabelPadding: pe2, parentLabelTextColor: se2 }).nodes, Be = { nodes: null };
  S.includes("nodes") && (Be.nodes = (0, import_jsx_runtime.jsx)(ae, { nodes: ze, nodeComponent: h, borderWidth: R, enableLabel: q2, labelSkipSize: $2, enableParentLabel: ee2, isInteractive: he2, onMouseEnter: fe2, onMouseMove: Le2, onMouseLeave: ge2, onClick: me, tooltip: Ce }, "nodes"));
  var Re = oe({ nodes: ze }), Ee = Hi(j2, ze, H2);
  return (0, import_jsx_runtime.jsx)(_i, { width: We2, height: Ie, margin: Oe, defs: Ee, role: xe, ariaLabel: Pe, ariaLabelledBy: Me, ariaDescribedBy: we, children: S.map(function(e3, t3) {
    var n3;
    return "function" == typeof e3 ? (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: (0, import_react.createElement)(e3, Re) }, t3) : null != (n3 = null == Be ? void 0 : Be[e3]) ? n3 : null;
  }) });
};
var de = function(e2) {
  var t2 = e2.isInteractive, o2 = void 0 === t2 ? U.isInteractive : t2, n2 = e2.animate, i2 = void 0 === n2 ? U.animate : n2, a2 = e2.motionConfig, r2 = void 0 === a2 ? U.motionConfig : a2, l = e2.theme, d = e2.renderWrapper, b = D(e2, re);
  return (0, import_jsx_runtime.jsx)(Ht, { animate: i2, isInteractive: o2, motionConfig: r2, renderWrapper: d, theme: l, children: (0, import_jsx_runtime.jsx)(le, j({ isInteractive: o2 }, b)) });
};
var be = function(e2) {
  return (0, import_jsx_runtime.jsx)(Jt, { children: function(t2) {
    var o2 = t2.width, n2 = t2.height;
    return (0, import_jsx_runtime.jsx)(de, j({ width: o2, height: n2 }, e2));
  } });
};
var ue = ["isInteractive", "animate", "motionConfig", "theme", "renderWrapper"];
var pe = function(e2) {
  var t2 = e2.data, n2 = e2.identity, a2 = void 0 === n2 ? Z.identity : n2, r2 = e2.value, l = void 0 === r2 ? Z.value : r2, d = e2.tile, b = void 0 === d ? Z.tile : d, u = e2.nodeComponent, p = void 0 === u ? Z.nodeComponent : u, s = e2.valueFormat, v = e2.innerPadding, h = void 0 === v ? Z.innerPadding : v, f = e2.outerPadding, L = void 0 === f ? Z.outerPadding : f, g = e2.leavesOnly, m2 = void 0 === g ? Z.leavesOnly : g, y2 = e2.width, C2 = e2.height, x = e2.margin, P = e2.layers, M = void 0 === P ? U.layers : P, w2 = e2.colors, S = void 0 === w2 ? Z.colors : w2, O = e2.colorBy, k2 = void 0 === O ? Z.colorBy : O, T = e2.nodeOpacity, W = void 0 === T ? Z.nodeOpacity : T, I = e2.borderWidth, z = void 0 === I ? Z.borderWidth : I, B = e2.borderColor, R = void 0 === B ? Z.borderColor : B, E = e2.enableLabel, X2 = void 0 === E ? Z.enableLabel : E, F2 = e2.label, j2 = void 0 === F2 ? Z.label : F2, D2 = e2.labelTextColor, H2 = void 0 === D2 ? Z.labelTextColor : D2, V2 = e2.orientLabel, q2 = void 0 === V2 ? Z.orientLabel : V2, A2 = e2.labelSkipSize, G2 = void 0 === A2 ? Z.labelSkipSize : A2, J2 = e2.enableParentLabel, K2 = void 0 === J2 ? Z.enableParentLabel : J2, N2 = e2.parentLabel, Q2 = void 0 === N2 ? Z.parentLabel : N2, $2 = e2.parentLabelSize, _2 = void 0 === $2 ? Z.parentLabelSize : $2, ee2 = e2.parentLabelPosition, ne2 = void 0 === ee2 ? Z.parentLabelPosition : ee2, ie2 = e2.parentLabelPadding, re2 = void 0 === ie2 ? Z.parentLabelPadding : ie2, le2 = e2.parentLabelTextColor, de2 = void 0 === le2 ? Z.parentLabelTextColor : le2, be2 = e2.isInteractive, ue2 = void 0 === be2 ? Z.isInteractive : be2, pe2 = e2.onMouseEnter, ce2 = e2.onMouseMove, se2 = e2.onMouseLeave, ve2 = e2.onClick, he2 = e2.tooltip, fe2 = void 0 === he2 ? Z.tooltip : he2, Le2 = e2.role, ge2 = e2.ariaLabel, me = e2.ariaLabelledBy, ye = e2.ariaDescribedBy, Ce = Bt(y2, C2, x), xe = Ce.margin, Pe = Ce.innerWidth, Me = Ce.innerHeight, we = Ce.outerWidth, Se = Ce.outerHeight, Oe = te({ data: t2, identity: a2, value: l, valueFormat: s, leavesOnly: m2, width: Pe, height: Me, tile: b, innerPadding: h, outerPadding: L, colors: S, colorBy: k2, nodeOpacity: W, borderColor: R, label: j2, labelTextColor: H2, orientLabel: q2, enableParentLabel: K2, parentLabel: Q2, parentLabelSize: _2, parentLabelPosition: ne2, parentLabelPadding: re2, parentLabelTextColor: de2 }).nodes, ke = { nodes: null };
  M.includes("nodes") && (ke.nodes = (0, import_jsx_runtime.jsx)(ae, { nodes: Oe, nodeComponent: p, borderWidth: z, enableLabel: X2, labelSkipSize: G2, enableParentLabel: K2, isInteractive: ue2, onMouseEnter: pe2, onMouseMove: ce2, onMouseLeave: se2, onClick: ve2, tooltip: fe2 }, "nodes"));
  var Te = oe({ nodes: Oe });
  return (0, import_jsx_runtime.jsx)("div", { role: Le2, "aria-label": ge2, "aria-labelledby": me, "aria-describedby": ye, style: { position: "relative", width: we, height: Se }, children: (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", top: xe.top, left: xe.left }, children: M.map(function(e3, t3) {
    var n3;
    return "function" == typeof e3 ? (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: (0, import_react.createElement)(e3, Te) }, t3) : null != (n3 = null == ke ? void 0 : ke[e3]) ? n3 : null;
  }) }) });
};
var ce = function(e2) {
  var t2 = e2.isInteractive, o2 = void 0 === t2 ? Z.isInteractive : t2, n2 = e2.animate, i2 = void 0 === n2 ? Z.animate : n2, a2 = e2.motionConfig, r2 = void 0 === a2 ? Z.motionConfig : a2, l = e2.theme, d = e2.renderWrapper, b = D(e2, ue);
  return (0, import_jsx_runtime.jsx)(Ht, { animate: i2, isInteractive: o2, motionConfig: r2, renderWrapper: d, theme: l, children: (0, import_jsx_runtime.jsx)(pe, j({ isInteractive: o2 }, b)) });
};
var se = function(e2) {
  return (0, import_jsx_runtime.jsx)(Jt, { children: function(t2) {
    var o2 = t2.width, n2 = t2.height;
    return (0, import_jsx_runtime.jsx)(ce, j({ width: o2, height: n2 }, e2));
  } });
};
var ve = ["theme", "isInteractive", "animate", "motionConfig", "renderWrapper"];
var he = function(e2, t2, o2, n2) {
  return e2.find(function(e3) {
    return Ai(e3.x + t2.left, e3.y + t2.top, e3.width, e3.height, o2, n2);
  });
};
var fe = function(e2) {
  var n2 = e2.data, i2 = e2.identity, d = void 0 === i2 ? $.identity : i2, b = e2.value, u = void 0 === b ? $.identity : b, p = e2.tile, s = void 0 === p ? $.tile : p, v = e2.valueFormat, h = e2.innerPadding, g = void 0 === h ? $.innerPadding : h, m2 = e2.outerPadding, y2 = void 0 === m2 ? $.outerPadding : m2, C2 = e2.leavesOnly, x = void 0 === C2 ? $.leavesOnly : C2, P = e2.width, M = e2.height, w2 = e2.margin, S = e2.colors, O = void 0 === S ? $.colors : S, k2 = e2.colorBy, T = void 0 === k2 ? $.colorBy : k2, W = e2.nodeOpacity, I = void 0 === W ? $.nodeOpacity : W, B = e2.borderWidth, R = void 0 === B ? $.borderWidth : B, E = e2.borderColor, X2 = void 0 === E ? $.borderColor : E, F2 = e2.enableLabel, j2 = void 0 === F2 ? $.enableLabel : F2, D2 = e2.label, H2 = void 0 === D2 ? $.label : D2, V2 = e2.labelTextColor, q2 = void 0 === V2 ? $.labelTextColor : V2, A2 = e2.orientLabel, G2 = void 0 === A2 ? $.orientLabel : A2, J2 = e2.labelSkipSize, K2 = void 0 === J2 ? $.labelSkipSize : J2, N2 = e2.isInteractive, Q2 = void 0 === N2 ? $.isInteractive : N2, U2 = e2.onMouseMove, Z2 = e2.onClick, _2 = e2.tooltip, ee2 = void 0 === _2 ? $.tooltip : _2, oe2 = e2.pixelRatio, ne2 = void 0 === oe2 ? $.pixelRatio : oe2, ie2 = e2.role, ae2 = e2.ariaLabel, re2 = e2.ariaLabelledBy, le2 = e2.ariaDescribedBy, de2 = (0, import_react.useRef)(null), be2 = Bt(P, M, w2), ue2 = be2.margin, pe2 = be2.innerWidth, ce2 = be2.innerHeight, se2 = be2.outerWidth, ve2 = be2.outerHeight, fe2 = te({ data: n2, identity: d, value: u, valueFormat: v, leavesOnly: x, width: pe2, height: ce2, tile: s, innerPadding: g, outerPadding: y2, colors: O, colorBy: T, nodeOpacity: I, borderColor: X2, label: H2, labelTextColor: q2, orientLabel: G2, enableParentLabel: false }).nodes, Le2 = Et();
  (0, import_react.useEffect)(function() {
    if (null !== de2.current) {
      var e3 = de2.current.getContext("2d");
      null !== e3 && (de2.current.width = se2 * ne2, de2.current.height = ve2 * ne2, e3.scale(ne2, ne2), e3.fillStyle = Le2.background, e3.fillRect(0, 0, se2, ve2), e3.translate(ue2.left, ue2.top), fe2.forEach(function(t2) {
        e3.fillStyle = t2.color, e3.fillRect(t2.x, t2.y, t2.width, t2.height), R > 0 && (e3.strokeStyle = t2.borderColor, e3.lineWidth = R, e3.strokeRect(t2.x, t2.y, t2.width, t2.height));
      }), j2 && (e3.textAlign = "center", e3.textBaseline = "middle", e3.font = Le2.labels.text.fontSize + "px " + Le2.labels.text.fontFamily, fe2.forEach(function(t2) {
        if (t2.isLeaf && (0 === K2 || Math.min(t2.width, t2.height) > K2)) {
          var o2 = G2 && t2.height > t2.width;
          e3.save(), e3.translate(t2.x + t2.width / 2, t2.y + t2.height / 2), e3.rotate(ni(o2 ? -90 : 0)), e3.fillStyle = t2.labelTextColor, e3.fillText("" + t2.label, 0, 0), e3.restore();
        }
      })));
    }
  }, [de2, fe2, se2, ve2, pe2, ce2, ue2, R, j2, G2, K2, Le2, ne2]);
  var ge2 = k(), me = ge2.showTooltipFromEvent, ye = ge2.hideTooltip, Ce = (0, import_react.useCallback)(function(e3) {
    if (null !== de2.current) {
      var t2 = Fi(de2.current, e3), n3 = t2[0], i3 = t2[1], a2 = he(fe2, ue2, n3, i3);
      void 0 !== a2 ? (me((0, import_react.createElement)(ee2, { node: a2 }), e3, "left"), null == U2 || U2(a2, e3)) : ye();
    }
  }, [de2, fe2, ue2, me, ye, ee2, U2]), xe = (0, import_react.useCallback)(function() {
    ye();
  }, [ye]), Pe = (0, import_react.useCallback)(function(e3) {
    if (null !== de2.current) {
      var t2 = Fi(de2.current, e3), o2 = t2[0], n3 = t2[1], i3 = he(fe2, ue2, o2, n3);
      void 0 !== i3 && (null == Z2 || Z2(i3, e3));
    }
  }, [de2, fe2, ue2, Z2]);
  return (0, import_jsx_runtime.jsx)("canvas", { ref: de2, width: se2 * ne2, height: ve2 * ne2, style: { width: se2, height: ve2 }, onMouseEnter: Q2 ? Ce : void 0, onMouseMove: Q2 ? Ce : void 0, onMouseLeave: Q2 ? xe : void 0, onClick: Q2 ? Pe : void 0, role: ie2, "aria-label": ae2, "aria-labelledby": re2, "aria-describedby": le2 });
};
var Le = function(e2) {
  var t2 = e2.theme, o2 = e2.isInteractive, n2 = void 0 === o2 ? $.isInteractive : o2, i2 = e2.animate, a2 = void 0 === i2 ? $.animate : i2, r2 = e2.motionConfig, l = void 0 === r2 ? $.motionConfig : r2, d = e2.renderWrapper, b = D(e2, ve);
  return (0, import_jsx_runtime.jsx)(Ht, { isInteractive: n2, animate: a2, motionConfig: l, theme: t2, renderWrapper: d, children: (0, import_jsx_runtime.jsx)(fe, j({ isInteractive: n2 }, b)) });
};
var ge = function(e2) {
  return (0, import_jsx_runtime.jsx)(Jt, { children: function(t2) {
    var o2 = t2.width, n2 = t2.height;
    return (0, import_jsx_runtime.jsx)(Le, j({ width: o2, height: n2 }, e2));
  } });
};
export {
  be as ResponsiveTreeMap,
  ge as ResponsiveTreeMapCanvas,
  se as ResponsiveTreeMapHtml,
  de as TreeMap,
  Le as TreeMapCanvas,
  ce as TreeMapHtml,
  $ as canvasDefaultProps,
  Q as commonDefaultProps,
  Z as htmlDefaultProps,
  A as htmlLabelTransform,
  V as htmlNodeTransform,
  G as htmlParentLabelTransform,
  U as svgDefaultProps,
  q as svgLabelTransform,
  H as svgNodeTransform,
  _ as tileByType
};
//# sourceMappingURL=@nivo_treemap.js.map
