## blackmailJS
BlackmailJS aka RansomScript is a typography class for Javascript (Vanilla). It aims to simulate character cut-outs from newspapers/magazines in the style of old-fashioned ransom notes. It concatenates a given string sequence by applying various HTML text elements like: ```<strong> <i> <em> <mark> <small> <del>``` <ins> <sub> <sup>.




Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Usage
### Example: Hello, World
```html
<!-- Create a 'div' container with a proper 'ID' -->
<div id="BLK_Example"></div>
<script>
  // Initiate a new Blackmail instance with your favourite word(s) aka string of characters e.g. "Hello, World." and inject your previously created 'ID' of the 'div' container.
  let blk_example = new Blackmail("Hello, World.", "#BLK_Example");
  // Use the 'attach()' function on your newly created instance and let blackmailJS magic do the rest ^^   
  blk_example.attach();
</script>
```

