const elements = {
    correctBlock: document.querySelector(".correct"),
    errorBlock: document.querySelector(".error"),
    connectButton: document.querySelector(".connect__button"),
    connectForm: document.querySelector(".connect__form"),
    errorFormButton: document.querySelector(".error-form__button"),
    errorForm: document.querySelector(".error-form"),
    sendOk: document.querySelector(".send-ok"),
    sendOkButton: document.querySelector(".send-ok__button")
};

elements.connectButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    if (!elements.connectForm.reportValidity()) return;

    const formElements = elements.connectForm.elements;
    const vinInput = formElements.namedItem("vin");
    fetch("https://tooling.c-cars.tech/api/tc/public/vehicleExists?vin=" + vinInput.value)
        .then(json => json.json())
        .then(data => {
            const result = data.result;
            // const result = vinInput.value === "1";
            if (!result) {
                elements.correctBlock.classList.remove("correct__visibly");
                elements.errorBlock.classList.add("error__visibly");
            } else {
                elements.errorBlock.classList.remove("error__visibly");
                elements.correctBlock.classList.add("correct__visibly");
            }


        });
});

elements.errorFormButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    if (!elements.errorForm.reportValidity()) return;

    const formData = new FormData(elements.errorForm);
    fetch("/send.php", {
        method: "POST",
        body: formData
    })
        .then(() => {
            elements.errorBlock.classList.remove("error__visibly");
            elements.sendOk.classList.add("send-ok__visibly");
        });
});

elements.sendOkButton.addEventListener("click", function (event) {
    event.preventDefault();
    elements.sendOk.classList.remove("send-ok__visibly");
});