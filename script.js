
// Var
let AwayScore = 0o0

let HomeScore = 0o0

function plus3Away() {
  AwayScore += 3
  console.log(`Home Score:Away Score`, HomeScore, `:`, AwayScore);

  const InputElement = document.getElementById(`Away`)

  if (AwayScore < 10) {
    InputElement.innerText = `0` + AwayScore
  } else
    InputElement.innerText = AwayScore
}

function plus1Away() {
  AwayScore++
  console.log(`Home Score:Away Score`, HomeScore, `:`, AwayScore);

  const InputElement = document.getElementById(`Away`)
  InputElement.innerText = AwayScore
}


function plus1Home() {
  HomeScore++
  console.log(`Home Score:Away Score`, HomeScore, `:`, AwayScore);


  const InputElement = document.getElementById(`Home`)
  InputElement.innerText = HomeScore


}

function plus3Home() {
  HomeScore += 3
  console.log(`Home Score:Away Score`, HomeScore, `:`, AwayScore);

  const InputElement = document.getElementById(`Home`)
  InputElement.innerText = HomeScore

}

function Reset() {
  AwayScore = 0
  HomeScore = 0
  console.log(`Home Score:Away Score`, HomeScore, `:`, AwayScore);

  const InputElement1 = document.getElementById(`Home`)
  const InputElement2 = document.getElementById(`Away`)
  InputElement1.innerText = AwayScore
  InputElement2.innerText = HomeScore

}
