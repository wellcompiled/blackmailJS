## blackmailJS
BlackmailJS aka RansomScript is a typography class for Javascript (Vanilla). It aims to simulate character cut-outs from newspapers/magazines in the style of old-fashioned ransom notes. It concatenates a given string sequence by applying various HTML text elements like: ```<strong> <i> <em> <mark> <small> <del>``` <ins> <sub> <sup>.

BlackmailJS [Website](https://wellcompiled.github.io/blackmailJS/)

### Usage
To use BlackmailJS, it's recommended to inject it *before* your logic code.
This can be either inside the <head> element or right before the closing tag of the </body>.
```html
<script type='text/javascript' charset='utf-8' src='blackmail.min.js'></script>
``` 

#### Hello, World
```html
<!-- Create a '<div>' container with a proper 'id' -->
<div id="BLK_Example"></div>

<script>
  let my_string = "Hello, World.";
  let element_id = "#BLK_Example";
  // Initiate a new Blackmail instance with your favourite word(s) aka string of
  // characters e.g. "Hello, World." and inject your previously created 'id'.
  let my_blk_instance = new Blackmail(my_string, element_id);
  // Use the 'attach()' function on your newly created instance to render it to your screen.   
  my_blk_instance.attach();
</script>
```

### B.I.Y.S. && TODOs 
  - NPM, build process
  - code clean up and optimization
  - implement animation() function
  - render full page texts !!!


