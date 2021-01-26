// function request all methods
const requestAjax = (url, callback, method = 'GET', data = {}) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback(JSON.parse(this.response))
            return true
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open(method, url)
    if (method === 'GET' || method === 'DELETE') {
        xhttp.send()
    } else {
        // put, patch, post
        xhttp.send(JSON.stringify({data}))
    }
}// put y post
const showResponse = (response) => {
    console.log(response)
}requestAjax(
    'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json',
    showResponse,
    'POST', 
    {
        lastname: "Paez",
        name: "Ale",
        urlPhoto: "https://loremflickr.com/320/240/person"
    }
)