XD
==

**XD** is just a meme software, aiming to get me off some of the boredom surrounding me at the time I wrote it. However, instead of being trash, it's a pretty cool demonstration of how a cool and pretty performant data encoder could work.

As a quick disclaimer, I have **never** seen how things like base64 work, but I just assumed it could be something like this, although I'm probably, at least, 65% wrong. Whatever the case is, just have fun.


##  How it works
There are two sections which, at the same time, are divided by two separate containers.

### Encoding
Each time a compatible event fires on `#Edecoded` (such as `keyup`, `keydown` or `change`), its whole `.val()` is read.

Then, this value gets temporarily stored into a local variable which is used to iterate through the available characters. A new variable is defined, which will contain the rendered values. Whenever a new character appears, the render will push a new `X`, and then, continuously iterate from **1** (because we already have the initial `X`) to the index of the character in the **ASCII table**, this process, concatenates a `D` on each run.

Once completed, the result is copied back to the page, in the value of `#Eencoded`.


### Decoding
For each compatible event  that fires up on `#Dencoded` (such as `keyup`, `keydown` or `change`), its whole `.val()` is read.

If the value includes at least an `X` and a `D`, the program will iterate through each character. A container for the result is defined, and an accumulator is incremented each time this process occurs and, as such, whenever another `X` is found its value will be reset. During the reset operation, the current value within the accumulator will be used to decode an **ASCII** character by calling `String.fromCharCode(code)`.

Once the loop is done, the result of the concatenation done within it, will be copied back to the browser, in the value of `#Ddecoded`.

It's worth noting that, although the decoding process is pretty straightforward, there's a small issue due to how the data is encoded, and it's that it becomes kinda hard to programatically understand the first entry, mainly if there's only one. A small workaround has been applied that will increase the accumulator by one if either of the previously noted cases occurs.


## License
This software has been licensed under the [MIT license](LICENSE).