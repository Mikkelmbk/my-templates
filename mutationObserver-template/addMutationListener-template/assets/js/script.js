if ('MutationObserver' in window) {
    // document.addMutationListener = function(element, mutationType, config, action) {
    //     if (element == "" || !element || !isNaN(element)) return;
    //     if (mutationType == "" || !mutationType || !isNaN(mutationType)) return;
    //     if (config == "" || !config || typeof (config) !== 'object' || Object.keys(config).length < 1) return;
    //     if(!action || typeof(action) !== 'function' || action == "" || action == "undefined") return;
    
    //     let mutationElement = document.querySelector(element);
    
    //     let observer = new MutationObserver(function (mutationsList, observer) {
    //         mutationsList.forEach((mutation) => {
    //             if (mutation.type === 'childList' && mutationType === 'childList') {
    //                 action(mutation);
    //             }
    //             if(mutation.type === 'attributes' && mutationType === 'attributes'){
    //                 action(mutation);
    //             }
    //         })
    //     });
    //     observer.observe(mutationElement, config);
    // };
    // document.addMutationListener('.container', "attributes", { childList: true, subtree: true, attributes: true, attributeOldValue: true}, yourFunction);






    addMutationListener('.container', "attributes", { childList: true, subtree: true, attributes: true, attributeOldValue: true}, yourFunction);
    // Parameter 1: element you want to listen to selector
    // Parameter 2: mutation you want to listen for - possible settings (childList, attributes)
    // Parameter 3: mutation Config - possible settings (childList, subtree, attributes, attributeOldValue)
    // Parameter 4: a reference to your function, no invocation, just referencing - you will receive the mutation/event as a parameter upon invocation by the mutationObserver.
    // All parameters are required.
}




function addMutationListener(element, mutationType, config, action) {
    if (element == "" || !element || !isNaN(element)) return;
    if (mutationType == "" || !mutationType || !isNaN(mutationType)) return;
    if (config == "" || !config || typeof (config) !== 'object' || Object.keys(config).length < 1) return;
    if(!action || typeof(action) !== 'function' || action == "" || action == "undefined") return;

    let mutationElement = document.querySelector(element);

    let observer = new MutationObserver(function (mutationsList, observer) {
        mutationsList.forEach((mutation) => {
            if (mutation.type === 'childList' && mutationType === 'childList') {
                action(mutation);
            }
            if(mutation.type === 'attributes' && mutationType === 'attributes'){
                action(mutation);
            }
        })
    });
    observer.observe(mutationElement, config);
}

function yourFunction(mutation) {
    console.log(mutation);

}




setTimeout(() => {

    document.querySelector(".container h1").innerHTML = "Title was changed";
    document.querySelector(".container h1").classList.add("my-new-class");

}, 2000)



