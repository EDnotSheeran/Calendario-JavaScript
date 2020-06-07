let calendar = document.querySelector('#calendar')
let language = calendar.attributes.getNamedItem('language').value
let today = new Date() 
let currentMonth = today.getMonth()
let currentYear = today.getFullYear()
let currentDay = today.getDate()
let months = getMonthsNames(language)
let monthAndYear = document.querySelector('#monthAndYear')

// Constroi o Calendario
showCalendar(currentMonth, currentYear)

function showCalendar(month, year) {
    showCalendarHeader()
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
// Volta para o mes anterior
function previous() {
    currentYear = currentMonth === 0 ? currentYear -1 : currentYear
    currentMonth = currentMonth === 0 ? 11: currentMonth - 1
    showCalendar(currentMonth, currentYear)
}
// Vai para o proximo mes
function next() {
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear
    currentMonth = (currentMonth + 1) % 12 
    showCalendar(currentMonth, currentYear) 
}
// Retorna o nome dos meses
function getMonthsNames(laguage){
    switch (laguage) {
        case 'pt-br':
            return ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
            break;
        case 'PT-BR':
            return ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
            break;
        default:
            return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            break;
    }
}
// Insere os dias da semana no calendario
function showCalendarHeader(){
    let tbl = document.querySelector('#calendar-head')

    tbl.innerHTML = ''

    let row = document.createElement('tr')
    let daysOfWeek = getDaysOfWeeksNames(language)
    for(let k = 0; k < 7; k++){
        let cell = document.createElement('th')
        let cellText = document.createTextNode(daysOfWeek[k])
        cell.appendChild(cellText)
        row.appendChild(cell)
    }
    tbl.appendChild(row)
}
// Retorna os nome dos dias da semana
function getDaysOfWeeksNames(language){
    switch (language) {
        case ('pt-br'):
            return  ["Dom", "Seg", "Ter" ,"Qua", "Qui", "Sex", "Sab"]
            break;
        case ('PT-BR'):
            return  ["Dom", "Seg", "Ter" ,"Qua", "Qui", "Sex", "Sab"]
            break;
        default:
            return ["Sun", "Mon", "Tue" ,"Wed", "Thu", "Fri", "Sat"]
            break;
    }
}