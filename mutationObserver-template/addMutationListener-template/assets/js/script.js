if ('MutationObserver' in window) {


    // Values which will exist as input fields in supervisor.
    var supervisorMutationEvent = "attributes_subtree" || "childlist_subtree";
    var supervisorClassName = "my-new-class";
    var supervisorNodeName = "h1";
    supervisorNodeName = supervisorNodeName.toUpperCase();
    var supervisorMutationSelector = ".container";

    addMutationListener(supervisorMutationSelector, supervisorMutationEvent, mutationHandler);
    //comments
    {
        // Parameter 1: element (class or Id) you want to listen to selector.
        // Parameter 2: mutation you want to listen for - possible settings (childList OR attributes OR childList_subtree OR attributes_subtree).
        // Parameter 3: a reference to your function, no invocation, just referencing - you will receive the mutation/event as a parameter upon invocation by the mutationObserver.
        // All parameters are required.

        // Parameter 1 in depths: You must provide an element by it's unique class or Id.
        // A class is produced by prefixing the name with a dot (.)
        // An id is produced by prefixing the name with a hashtag (#)

        // Parameter 2 in depths: You must provide a mutation you want to listen for.
        // The childList mutation will listen for changes to the direct children of the element you provided in parameter 1.
        // The attributes mutation will listen for attribute changes on the element you provided in parameter 1.
        // The childList_subtree mutation will listen for changes to the direct children of the element you provided in parameter 1, but it will also listen for changes on children of children.
        // The attributes mutation will listen for attribute changes on the element you provided in parameter 1, but it will also listen for changes on children of children.

        // Parameter 3 in depths: You must provide a reference (not an invocation) to a function you define.
        // Your function must contain a parameter ready to receive the mutation that you are listening for.

        // Use cases:
        // The addMutationListener can be used to update cart recom titles when a page refresh is not triggered upon changing or updating the cart content.
        // The addMutationListener can be used to trigger an upsell recom.
    }
}




function addMutationListener(element, mutationType, action) {
    if (element == "" || !element || !isNaN(element)) return;
    if (mutationType == "" || !mutationType || !isNaN(mutationType)) return;
    if (!action || typeof (action) !== 'function' || action == "" || action == "undefined") return;

    var mutationConfig;
    switch (mutationType.toLowerCase()) {
        case 'attributes':
            mutationConfig = { attributes: true, attributeOldValue: true };
            break
        case 'childlist':
            mutationConfig = { childList: true };
            break
        case 'attributes_subtree':
            mutationConfig = { attributes: true, attributeOldValue: true, subtree: true };
            break
        case 'childlist_subtree':
            mutationConfig = { childList: true, subtree: true };
            break
        default:
            return console.error("addMutationListener: " + mutationType + " is not a valid mutation to listen for, refer to Parameter 2 documentation for options.");
    }

    var mutationElement = document.querySelectorAll(element);
    if (mutationElement.length > 1) {
        console.warn("addMutationListener: There are " + mutationElement.length + " elements with " + JSON.stringify(element) + " as their selector, listening to the first one that was found");
    }
    mutationElement = mutationElement[0];
    var observer = new MutationObserver(function (mutationsList, observer) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList' && mutationType.toLowerCase() === 'childlist') { return action(mutation); }
            if (mutation.type === 'attributes' && mutationType.toLowerCase() === 'attributes') { return action(mutation); }
            if (mutation.type === 'childList' && mutationType.toLowerCase() === 'childlist_subtree') { return action(mutation); }
            if (mutation.type === 'attributes' && mutationType.toLowerCase() === 'attributes_subtree') { return action(mutation); }
        })
    });
    observer.observe(mutationElement, mutationConfig);
}

function mutationHandler(mutation) {
    // console.log(mutation.type + " returned the following:", mutation);

    if(mutation.type === 'childList' && mutation.addedNodes[0].className === supervisorClassName && mutation.addedNodes[0].nodeName === supervisorNodeName){
        console.log(mutation);
    }

    if(mutation.type === 'attributes' && mutation.target.classList.contains(supervisorClassName) && mutation.target.nodeName === supervisorNodeName){
        console.log(mutation);
    }



    // console.log(mutation);

}




setTimeout(function () {

    // text node changed (text node is a child of the h1, so subtree is needed here when listening on the parent of the h1).
    // let h1Elem = document.querySelector(".container h1");
    // h1Elem.innerHTML = "Title was changed";
    // h1Elem.innerHTML = "Title was changed again";

    // addedNode changed. (span is a direct child that is added to the .container so childlist is needed here).
    let containerElem = document.querySelector(".container");
    let span = document.createElement("span");
    span.classList.add("added-span");
    containerElem.appendChild(span);

    // let figure = document.createElement("figure");
    // figure.classList.add("added-figure");
    // containerElem.appendChild(figure);

    // attribute changed. (attribute_subtree is needed here because the change happened to a child of the element we were listening to: .container)
    document.querySelector(".container h1").classList.add("my-new-class");
    // document.querySelector(".container h1").classList.add("my-new-class2");



}, 2000)



