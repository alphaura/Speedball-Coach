// Sliding drill 3 section

let randomSet = document.getElementById("random-set")
let getSet = document.getElementById("btn-getSet")
let arr = ["L1", "L2", "L3", "R1", "R2", "R3","L1", "L2", "L3", "R1", "R2", "R3","L1", "L2", "L3"]

getSet.addEventListener("click", function() {
        let getRandomSet = "";
        // Shuffle the array to get a different order each time
        const shuffledArr = arr.sort(() => Math.random() - 0.5);

        // Show only the first 15 elements
        const selectedSet = shuffledArr.slice(0, 15);

        for (let i = 0; i < selectedSet.length; i++) {
            getRandomSet += selectedSet[i] + " ";
        }

        randomSet.textContent = getRandomSet.trim();
    });
