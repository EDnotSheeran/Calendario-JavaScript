let today = new Date()
let currentMonth = today.getMonth()
let currentYear = today.getFullYear()
let currentDay = today.getDate()

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let monthAndYear = document.querySelector('#monthAndYear')

showCalendar(currentMonth, currentYear)

function showCalendar(month, year) {
    let firstDay = new Date(year, month).getDay()// retorna o dia da semana
    let daysInMonth = 32 - new Date(year, month, 32).getDate()

    let tbl = document.querySelector('#calendar-body')// Corpo do calendario
     
    // Limpando o corpo do calendario
    tbl.innerHTML = ''

    // Preenchendo dados do mes e ano pelo DOM
    monthAndYear.innerHTML = months[month] + ' ' + year

    // Cria as celulas
    let date = 1
    for(let i = 0; i < 6; i++){
        // Cria uma linha na tabela
        let row = document.createElement('tr')

        // Cria celulas individuais preenchendo elas com a data
        for(let j = 0; j < 7; j++){
            if(i === 0 && j < firstDay){
                let cell = document.createElement('td')
                let cellText = document.createTextNode(' ')
                cell.appendChild(cellText)
                row.appendChild(cell)
            }else if(date > daysInMonth){
                break
            }else{
                let cell = document.createElement('td')
                let celltext = document.createTextNode(date)
                // Adiciona uma classe especial ao dia de hoje
                if(date === currentDay){
                    cell.classList.add('current-day')
                }
                cell.appendChild(celltext)
                row.appendChild(cell)
                date++
            }
        }

        tbl.appendChild(row)
    }
}

function previous() {
    currentYear = currentMonth === 0 ? currentYear -1 : currentYear
    currentMonth = currentMonth === 0 ? 11: currentMonth - 1
    showCalendar(currentMonth, currentYear)
}

function next() {
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear
    currentMonth = (currentMonth + 1) % 12 
    showCalendar(currentMonth, currentYear) 
}
