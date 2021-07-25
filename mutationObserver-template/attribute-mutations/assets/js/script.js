if('MutationObserver' in window){

    var customerElementToListenOn = "."+"title"; // This is a reference to the element that we want to listen to changes on.
    var customerElementChangeToListenFor = "Something" // This is the id or class that we want to listen for either being added or removed to the "customerElementToListenOn".
    var titleElement = document.querySelector(customerElementToListenOn);

    var config = { attributes:true, attributeOldValue:true };
    var watchCustomerElement = function(mutationsList, observer){
    // Mutations are an array, so we loop through it.
        mutationsList.forEach(function(mutation){
            if(mutation.type === 'attributes'){

                if(mutation.target === document.querySelector(customerElementToListenOn)){

                    if(classActiveChecker(mutation)){ // This is true if the specified class was added to the "customerElementToListenOn".

                    }
                    else if(classInactiveChecker(mutation)){ // This is true if the specified class was removed from "customerElementToListenOn".

                    }
                    else if(idActiveChecker(mutation)){ // This is true if the specified id was added to the "customerElementToListenOn".

                    }
                    else if(idInactiveChecker(mutation)){ // This is true if the specified id was removed from "customerElementToListenOn".

                    }
                    
                }

            }
        })

    };
    const observer = new MutationObserver(watchCustomerElement);
    observer.observe(titleElement,config);

    // console.log(observer);
    function classActiveChecker(mutation){
        if(mutation.attributeName === "class" && mutation.target.className !== mutation.oldValue) return mutation.target.classList.contains(customerElementChangeToListenFor);
    }
    function classInactiveChecker(mutation){
        if(mutation.attributeName === "class" && mutation.target.className !== mutation.oldValue) return !mutation.target.classList.contains(customerElementChangeToListenFor);
    }
    function idActiveChecker(mutation){
        if(mutation.attributeName === "id" && mutation.target.id !== mutation.oldValue) return mutation.target.id === customerElementChangeToListenFor;
    }
    function idInactiveChecker(mutation){
        if(mutation.attributeName === "id" && mutation.target.id !== mutation.oldValue) return mutation.target.id !== customerElementChangeToListenFor;
    }



   

    







    // Button is not necessary in supervisor, as the button is only used to simulate the adding of a class.
    const buttonAddClassElement = document.querySelector('.addClass');
    buttonAddClassElement.addEventListener("click",function(){
        titleElement.classList.add(customerElementChangeToListenFor);
    });

    const buttonRemoveClassElement = document.querySelector('.removeClass');
    buttonRemoveClassElement.addEventListener("click",function(){
        titleElement.classList.remove(customerElementChangeToListenFor);
    });



    const buttonAddIdElement = document.querySelector('.addId');
    buttonAddIdElement.addEventListener("click",function(){
        titleElement.id = customerElementChangeToListenFor;
    });

    const buttonRemoveIdElement = document.querySelector('.removeId');
    buttonRemoveIdElement.addEventListener("click",function(){
        titleElement.id = "";
    });

    const buttonAddDataAttributeElement = document.querySelector('.addDataAttribute');
    buttonAddDataAttributeElement.addEventListener("click",function(){
        titleElement.dataset.benchmark = "Hello";

    });

    // setInterval(()=>{
    //     titleElement.classList.toggle(customerElementChangeToListenFor);

    // },5000)




}
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver