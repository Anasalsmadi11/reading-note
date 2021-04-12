# Text
*When creating a web page, you add tags 
(known as markup) to the contents of the 
page. These tags provide extra meaning 
and allow browsers to show users the 
appropriate structure for the page.*

*In this chapter we focus on how to add markup to the text that 
appears on your pages. You will learn about:

* **Structural markup:** *the elements that you can use to 
describe both headings and paragraphs*

* **Semantic markup:** *which provides extra information; such 
as where emphasis is placed in a sentence, that something 
you have written is a quotation (and who said it), the 
meaning of acronyms, and so on*

## Headings

<img src='images/Capture3.PNG'>

*HTML has six "levels" of 
headings:*
**h1** *is used for main headings*

**h2** *is used for subheadings*

*If there are further sections 
under the subheadings then the 
**h3** element is used, and so 
on..*

## Paragraphs

<img src='images/Capture4.PNG'>

*To create a paragraph, surround 
the words that make up the 
paragraph with an opening **p**
tag and closing **p** tag.*

*By default, a browser will show 
each paragraph on a new line 
with some space between it and 
any subsequent paragraphs.*

## Bold & Italic

*By enclosing words in the tags 
**b** and **b** we can make 
characters appear bold.

The **b** element also represents 
a section of text that would be 
presented in a visually different 
way (for example key words in a 
paragraph) although the use of 
the **b** element does not imply 
any additional meaning*

## Visual Editors & Their Code views

*Content management systems and HTML editors such as Dreamweaver 
usually have two views of the page you are creating: a visual editor and a 
code view.*

### Visual editors 
*often resemble 
word processors. Although 
each editor will differ slightly, 
there are some features that 
are common to most editors 
that allow you to control the 
presentation of text.*

### Code views 
*show you the code 
created by the visual editor so 
you can manually edit it, or so 
you can just enter new code 
yourself. It is often activated 
using a button with an icon 
that says HTML or has angled 
brackets. White space may be 
added to the code by the editor 
to make the code easier to read.*

## Semantic Markup
*There are some text elements that are not intended to affect the 
structure of your web pages, but they do add extra information to the 
pages — they are known as semantic markup.*

## Strong & Emphasis
*The use of the **strong**
element indicates that its 
content has strong importance. 
For example, the words contained in this element might be said with strong emphasis.*
By default, browsers will show 
the contents of a **strong**
element in bold.*

## Quotations

*The **blockquote** element is 
used for longer quotes that take 
up an entire paragraph. Note 
how the **p** element is still 
used inside the **blockquote**
element. 
Browsers tend to indent the 
contents of the **blockquote**
element, however you should not 
use this element just to indent a 
piece of text — rather you should 
achieve this effect using CSS.*

# Introducing CSS

*CSS allows you to create rules that specify how the content of 
an element should appear. For example, you can specify that 
the background of the page is cream, all paragraphs should 
appear in gray using the Arial typeface, or that all level one 
headings should be in a blue, italic, Times typeface.*

*The key to understanding how CSS works is to 
imagine that there is an invisible box around 
every HTML element.*

![image](images/Capture5.PNG)

## Using Internal CSS

### Style
*You can also include CSS rules 
within an HTML page by placing 
them inside a **style** element, 
which usually sits inside the 
**head** element of the page. 
The **style** element should use 
the type attribute to indicate 
that the styles are specified in 
CSS. The value should be text/
css.*

## CSS Selectors

*There are many different types 
of CSS selector that allow you to 
target rules to specific elements 
in an HTML document. 
The table on the opposite page 
introduces the most commonly 
used CSS selectors.
On this page, there is an HTML 
file to demonstrate which 
elements these CSS selectors 
would apply to.
CSS selectors are case sensitive, 
so they must match element 
names and attribute values 
exactly*

# Basic js structions

*A script is a series of instructions that a computer can follow one-by-one. 
Each individual instruction or step is known as a statement. 
Statements should end with a semicolon.*

*STATEMENTS ARE INSTRUCTIONS AND 
EACH ONE STARTS ON A NEW LINE 
A statement is an individual instruction that the 
computer should follow. Each one should start on a 
new line and end with a semicolon. This makes your 
code easier to read and follow.*

*STATEMENTS CAN BE ORGANIZED 
INTO CODE BLOCKS 
Some statements are surrounded by curly braces; 
these are known as code blocks. The closing curly 
brace is not followed by a semicolon.*

## WHAT IS A VARIABLE?

*A script will have to temporarily 
store the bits of information it 
needs to do its job. It can store this 
data in variables. 
When you write JavaScript, you have to tell the 
interpreter every individual step that you want it to 
perform. This sometimes involves more detail than 
you might expect.*

*You may be able to do calculations like this in 
your head, bu t when writing a script to do this 
calculation, you need to give the computer very 
detailed instructions. You might tell it to perform the 
following four steps in order:* 
1. *Remember the value for width* 
2. *Remember the value for height* 
3. *Multiply width by height to get the area* 
4. *Return the result to the user*

*A variable is a good name for this 
concept because the data stored 
in a variable can change (or vary) 
each time a script runs.*

## Diognaise loops

*Looking at a flowchart (for all but the most basic scripts), 
the code can take more than one path, which means the 
browser runs different code in different situations. In this 
chapter, you will learn how to create and control the flow of 
data in your scripts to handle different situations.*

### EVALUATIONS 
*You can analyze values in 
your scripts to determine 
whether or note they 
match expected results.* 

### DECISIONS 
*Using the results of 
evaluations, you can 
decide which path your 
script should go down.*

### LOOPS 
*There are also many 
occasions where you will 
want to perform the same 
set of steps repeatedly.*