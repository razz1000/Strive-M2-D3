

let travel = document.querySelectorAll(".travel")
for (let i = 0; i < travel.length; i++) {
    console.log(travel[i].length)
}



let addSpans = () => {
    let summerbadge = document.querySelector(".welcome-summer")
    summerbadge.innerHTML = <span class="badge badge-pill badge-dark">new</span> 

}