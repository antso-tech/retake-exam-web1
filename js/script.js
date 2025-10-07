const titleExpense = document.getElementById('expense-title')
const expensePrice = document.getElementById('expense-price')
const selectCategory = document.getElementById('select-category')
const cancelExpense = document.getElementById('cancel')
const form = document.querySelector('form')

const title = "";
const price = 0;
const category = ""
console.log(titleExpense);

titleExpense.addEventListener("input",(e) =>{
    title = e.target.value
    
})

expensePrice.addEventListener("input", (e) => {
    price = e.target.value
    
})

selectCategory.addEventListener("input",(e) => {
     console.log(e.target.value);
     
})

form.addEventListener('submit',(e) => {
    e.preventDefault();

    document.getElementById('allExpense').innerHTML = `
            <tr>
                <tbody>1</tbody>
                <tbody>3</tbody>
                <tbody>2</tbody>
            </tr>
        `
    console.log('text');
    

})

