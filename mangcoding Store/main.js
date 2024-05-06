/* increasing number */
let nums = document.querySelectorAll('.num');
let increasingNumbersSection = document.querySelector('.section2');

let increasingStarted = false;

window.onscroll = function () {
    if (increasingStarted == false && window.scrollY >= increasingNumbersSection.offsetTop -200) {
            console.log(window.scrollY)

        increasingStarted = true;
        nums.forEach((num) => {
            num.textContent = 0;

            let updateNums = () => setTimeout(() => {
                let newValue = num.getAttribute('data-val');
                let currentValue = +(parseInt(num.textContent));
                let increment = newValue / 50;
                if (currentValue < newValue) {
                    num.textContent = Math.ceil(currentValue + increment) + " +";
                    setTimeout(updateNums, 20);
                }
            }, 1);

            updateNums();

        });//forEach

    }//if
}

/* login */

/* sign up */