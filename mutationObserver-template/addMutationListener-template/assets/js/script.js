if ('MutationObserver' in window) {

    addMutationListener(".container", "childlist_subtree", {
        awNodeName: "p",
        awFullClassName: "added-p",
        awContainsClassName: "another-title"
    });
    //comments
    {
        // Parameter 1: element (class or Id) you want to listen to selector.
        // Parameter 2: mutation you want to listen for - possible settings (childList OR attributes OR childList_subtree OR attributes_subtree).
        // Parameter 3: strings containing the nodeName and the FullclassName or ContainsClassName of the added, removed, altered, or otherwise affected element which you want to act on.
        // All parameters are required (Parameter 3 will have an object of 3 empty strings the first time you run this, further explanation follows in the in depths section).

        // Parameter 1 in depths: You must provide an element by it's unique class or Id.
        // A class is produced by prefixing the name with a dot (.)
        // An id is produced by prefixing the name with a hashtag (#)

        // Parameter 2 in depths: You must provide a mutation you want to listen for.
        // The childList mutation will listen for changes to the direct children of the element you provided in parameter 1.
        // The attributes mutation will listen for attribute changes on the element you provided in parameter 1.
        // The childList_subtree mutation will listen for changes to the direct children of the element you provided in parameter 1, but it will also listen for changes on children of children.
        // The attributes mutation will listen for attribute changes on the element you provided in parameter 1, but it will also listen for changes on children of children.

        // Parameter 3 in depths: An object with 3 string values used to narrow down the mutations that you are receiving to only the one you want to listen for. Initially all 3 strings will be empty, and you will need to find the 2 required values in the developer tool's console. The values are presented to you like seen in this image: https://explain.helloretail.com/OAunqA0j. Sometimes you will encounter more than one nodeName and className like seen in this image: https://explain.helloretail.com/Wnu0Jj2G, as a rule of thumb the last one should be used unless you have a reason not to.

        // When parameter 2 is childlist or childlist_subtree, only awNodeName and awFullClassName are required.
        // When parameter 2 is attributes or attributes_subtree, only awNodeName and awContainsClassName are required, only one class is accepted in the awContainsClassName string: https://explain.helloretail.com/4gul9gD8.  
        


        // Use cases:
        // The addMutationListener can be used to update cart recom titles when a page refresh is not triggered upon changing or updating the cart content.
        // The addMutationListener can be used to force a page reload when a given element or attribute changes.
        // The addMutationListener can be used to add a trigger selector to our search if the customers input fields are not present upon initialization of our script.
        // The addMutationListener can be used to trigger an upsell recom.
    }
}

function addMutationListener(element, mutationType, awConfig) {
    if (element == "" || !element || !isNaN(element)) return console.error(element + " is not a valid selector");
    if (mutationType == "" || !mutationType || !isNaN(mutationType)) return console.error(mutationType + " is not a valid mutationType");
    if (awConfig == "" || !awConfig || typeof (awConfig) !== 'object' || Object.keys(awConfig).length < 2 || !Object.entries(awConfig).every(function([key,value]){return typeof value === "string"})) return console.error("awConfig is not valid, only strings are allowed");

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
            mutationHandler(mutation, awConfig);
        });
    });
    observer.observe(mutationElement, mutationConfig);
}

function mutationHandler(mutation, awConfig) {
    if (mutation.type === 'attributes') {
        console.log("nodeName: " + mutation.target.nodeName + " | " + "className: " + mutation.target.className);
    }
    else if (mutation.type === 'childList') {
        console.log("nodeName: " + mutation.addedNodes[0].nodeName + " | " + "className: " +mutation.addedNodes[0].className);
    }

    if(mutation.type === 'childList' && mutation.addedNodes[0]){
        if (mutation.type === 'childList' && mutation.addedNodes[0].className === awConfig.awFullClassName || mutation.addedNodes[0].className === undefined && mutation.addedNodes[0].nodeName.toLowerCase() === awConfig.awNodeName) {
            // Block 1.
            console.log("Your code should go in Block 1.");
        }
    }

    if(mutation.type === 'childList' && mutation.removedNodes[0]){
        if (mutation.type === 'childList' && mutation.removedNodes[0].className === awConfig.awFullClassName || mutation.removedNodes[0].className === undefined && mutation.removedNodes[0].nodeName.toLowerCase() === awConfig.awNodeName) {
            // Block 2.
            console.log("Your code should go in Block 2.");
        }
    }

    
    if (mutation.type === 'attributes' && mutation.target.classList.contains(awConfig.awContainsClassName.split(" ")[0]) && mutation.target.nodeName.toLowerCase() === awConfig.awNodeName) {
        // Block 3.
        console.log("Your code should go in Block 3.");
    }

}


