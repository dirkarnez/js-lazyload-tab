`((__node, __tabContent, __inject) => {
    // create a new div element
    const newDiv = document.createElement("div");
   
    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings from tab1!");
   
    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    __tabContent.appendChild(newDiv);
})(${arguments[0]}, ${arguments[1]}, ${arguments[2]})`;