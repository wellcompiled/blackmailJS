## blackmailJS
BlackmailJS aka RansomScript is a typography class for Javascript (Vanilla). It aims to simulate character cut-outs from newspapers/magazines in the style of old-fashioned ransom notes. It concatenates a given string sequence by applying various HTML text elements like: ```<strong> <i> <em> <mark> <small> <del>``` <ins> <sub> <sup>.




Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Usage

```example
<div id="BLK_Example"></div>
<script>
  let blk_example = new Blackmail("Hello World.", "#BLK_Example");
  blk_example.attach();
</script>
```

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/wellcompiled/blackmailJS/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
