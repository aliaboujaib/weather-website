console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messge1 = document.querySelector('#Messege1')
const messge2 = document.querySelector('#Messege2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    
    messge1.textContent = 'Loading..'
    messge2.textContent = ''
 
    fetch('http://localhost:3000/weather?address='+location).then((response) => {
    response.json().then((data)=> {
        if(data.error){
            messge1.textContent = data.error 
        }
        else{
            messge1.textContent = data.location
            messge2.textContent = data.forecast

        }


    })
})

})