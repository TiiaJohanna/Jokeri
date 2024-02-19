const table_numbers = document.querySelector('table#numbers')
const numbers = []

while (numbers.length < 8) {
    const random_number = Math.floor(Math.random() * 40) + 1
    if (!(numbers.includes(random_number))) {
        numbers.push(random_number)
    }
}

const first_seven_numbers = numbers.slice(0,7)
const additional_numbers = numbers[7]
first_seven_numbers.sort((a,b)=>a-b)


const tr = table_numbers.insertRow()
for (let i = 0;i<first_seven_numbers.length;i++) {
    const td = tr.insertCell()
    td.innerHTML = first_seven_numbers[i]
}
