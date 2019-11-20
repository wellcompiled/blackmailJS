let _styleCounter = false;
class Blackmail {
  constructor(str, elem, color, shadow, shadow_color, bg_color) {
    this.str = str;
    this.elem = elem;
    this.color = color;
    this.shadow = shadow;
    this.shadow_color = shadow_color;
    this.split = str;
    this.len = this.split.length;
    this.tags = ["p class='blk_p'", "strong class='blk_strong'",
      "i class='blk_i'",
      "em class='blk_em'", "small class='blk_small'", "mark class='blk_mark'",
      "del class='blk_del'", "ins class='blk_ins'", "sub class='blk_sub'",
      "sup class='blk_sup'", "h1 class='blk_h1'", "h2 class='blk_h2'",
      "h3 class='blk_h3'", "h4 class='blk_h4'", "h5 class='blk_h4'"];
    this.sign = ["+", "-"];
    this.degree = 17;
    this.bgc = document.querySelector("body").style.backgroundColor;
    this.cases = ["upper", "lower"];
    this.decoration = ["none", "underline", "overline", "line-through",
      "underline wavy", "overline wavy", "line-through wavy", "none",
      "underline dotted", "overline dotted", "dashed", "dotted", "double",
      "solid", "wavy", "blink", "unset"];
    // web-safe fonts
    this.fonts = [
      ['Georgia, serif'],
      ['"Palatino Linotype", "Book Antiqua", Palatino, serif'],
      ['"Times New Roman", Times, serif'],
      ["Arial, Helvetica, sans-serif"],
      ['"Arial Black", Gadget, sans-serif'],
      ['"Comic Sans MS", cursive, sans-serif'],
      ['Impact, Charcoal, sans-serif'],
      ['"Lucida Sans Unicode", "Lucida Grande", sans-serif'],
      ['Tahoma, Geneva, sans-serif'],
      ['"Trebuchet MS", Helvetica, sans-serif'],
      ['Verdana, Geneva, sans-serif'],
      ['"Courier New", Courier, monospace'],
      ['"Lucida Console", Monaco, monospace']
    ];
  };
  init() {
    console.log("--> Blackmail.init()");
    if (this.str == "" || this.str !== undefined) {
      this.info();
      this.attach();
      
      
      
      
    }
  };
  
  attach() {
    console.log("--> Blackmail.attach()");
    try {
      if (!_styleCounter) {
        
        let _CSS = ".blk_p{display:block;margin:0;padding:0}.blk_strong{font-weight:bold}.blk_i{font-style:italic}.blk_small{font-size:smaller}.blk_mark{background-color:yellow;color:black}.blk_del{text-decoration:line-through}.blk_ins{text-decoration:underline}.blk_sub{vertical-align:sub;font-size:smaller}.blk_sup{vertical-align:super;font-size:smaller}.blk_h1{display:block;margin:0;padding:0;font-size:2em;font-weight:bold}.blk_h2{display:block;margin:0;padding:0;font-size:1.5em;font-weight:bold}.blk_h3{display:block;margin:0;padding:0;font-size:1.17em;font-weight:bold}.blk_h4{display:block;margin:0;padding:0;font-weight:bold}.blk_h5{display:block;margin:0;padding:0;font-size:.83em;font-weight:bold}";
        
        let _HEAD = document.head || document.getElementsByTagName('head')[0];
        
        let _STYLE = document.createElement('style');
        
        _HEAD.appendChild(_STYLE);
        
        _STYLE.type = 'text/css';
        
        if (_STYLE.styleSheet){
          // This is required for IE8 and below.
          _STYLE.styleSheet.cssText = _CSS;
        } else {
          _STYLE.appendChild(document.createTextNode(_CSS));
        }
        _styleCounter = true;
      }
      document.querySelector(this.elem).innerHTML = this.generate();
    } catch (e) {
      console.log(e);
    }
  };
  rand(value) {
    return Math.floor(Math.random() * value);
  };
  rndFont() {
    let _a = this.rand(this.fonts.length);
    return this.fonts[_a];
  };
  rndFontSize() {
    let _b = this.rand(this.sizes.length);
    return this.sizes[_b];
  };
  rndTag() {
    let _c = this.rand(this.tags.length);
    return this.tags[_c];
  };
  rndDegree() {
    let _d = this.rand(this.degree);
    let _sig = this.rand(this.sign.length);
    return this.sign[_sig] + _d;
  };
  rndTextTransform() {
    let _e = this.rand(this.cases.length);
    return this.cases[_e];
  };
  rndDecoration() {
    let _f = this.rand(this.decoration.length);
    return this.decoration[_f];
  };
  rndRGBA() {
    let _r = this.rand(255).toString();
    let _g = this.rand(255).toString();
    let _b = this.rand(255).toString();
    let _min_alpha = 0.125;
    let _max_alpha = 1.0;
    let _range = _max_alpha - _min_alpha;
    let _adjust = (Math.random() * _range).toFixed(3);
    // let alpha = (min_alpha + adjust);
    let _result = "rgba(" + _r + "&#44;" + _g + "&#44;" + _b + "&#44;" +
      _range +
      ")";
    return _result;
  };
  generate() {
    let _composition = "";
    for (let i = 0; i <= this.len - 1; i++) {
      let _tag = this.rndTag();
      let _lh = Math.random() + 1;
      var _char = "<" + _tag + " style='float:left;line-height:" + _lh.toFixed(
          2) +
        ";letter-spacing:.24em;";

      // if (_tag == "h1" ||
      //     _tag == "h2" ||
      //     _tag == "h3" ||
      //     _tag == "h4" ||
      //     _tag == "h5" || 
      //     _tag == "p") {
      //     _char += "line-height:0;";
      // }
      if (this.color) {
        _char += "color:" + this.color + ";";
      } else {
        _char += "color:" + this.rndRGBA() + ";";
      }
      // condition for mark tags
      if (this.color && _tag == "mark class='blk_mark'") {
        _char += "background-color:" + this.color + ";";
        _char += "color: " + this.bgc + ";";
        // _char += "color: white;";
        // _char += "line-height:2;";
      } else if (!this.color && _tag == "mark class='blk_mark'") {
        _char += "background-color:" + this.rndRGBA() + ";";
        _char += "color:" + this.rndRGBA() + ";";
      }
      // _char += "font-size:" + this.rndFontSize() + "%;";
      _char += "font-family:" + this.rndFont() + ";";
      _char += "-webkit-transform:rotate(" + this.rndDegree() + "deg);";
      _char += "transform:rotate(" + this.rndDegree() + "deg);";
      _char += "text-transform:" + this.rndTextTransform() + "case;";
      _char += "text-decoration:" + this.rndDecoration() + " " + this.color +
        ";";
      // if (this.decoration_counter <= 2) {
      //   this.decoration_counter += 1;
      // }
      if (this.shadow) {
        _char += "text-shadow:" + this.shadow_color + " 2px 2px 0;";
      }
      // closing text element 
      _char += "'>";
      // insert the actual _character, but keep in mind that there are "spaces" out there
      if (this.split[i] == " ") {
        _char += "&nbsp;&nbsp;";
      } else {
        // well, let's insert just a non-space character
        _char += this.split[i];
      }
      // add closing _tag and finsish string _composition
      _char += "</" + _tag + ">";
      // combine everything into one string seqeunce
      _composition += _char;
    }
    return _composition;
  };
};