let personName = ['Alish', 'Maharjan'];

function promiseReadArray(personName){
    return new Promise((resolve, reject)=>{
        if (personName.length > 0){
            resolve('The person name is correct')
        }
        else{
            reject('please enter your personal information')
        }
    })
}

promiseReadArray(personName).then(result => {
    console.log(`The user names are: `);
    let time = 1000;
    result.forEach((r,i)=>{
        setTimeout(()=>{
            console.log(`${i+1}) ${r}`);  
        }, time);
        time += 3000;
    })
}).catch(error=>{
    console.log(error);
})

// using async and await
let async_await_read_array = async (personName) => {
    try {
        let readArray = await promiseReadArray(personName);
        console.log(`through async and await`)  
        let time = 1000;
        readArray.forEach((r,i)=>{
            setTimeout(()=>{
                console.log(`${i+1}-${r}`)
            }, time);
            time += 3000;
        })
    } catch (error) {
        console.log("Error is: ");
        console.log(error);
    }
    
}

async_await_read_array(personName);




let userInfo = {
    'name': 'alish',
    'age': 22,
    'address': 'Panga',
    'college' : 'Institute of International Management and Science'
}

function promiseReadingObject(userInfo){
    return new Promise((resolve, reject)=>{
        if(userInfo){
            resolve(userInfo)
        }
        else{
            reject("Empty");
        }
    })
}

promiseReadingObject(userInfo)
    .then(result=>console.log(result))
    .catch(error=>console.log(error));



let fs = require('fs');

// function to read file/files and return a promise.
function jsonFile(file, encoding){
    return new Promise((resolve,reject)=>{
        fs.readFile(file, encoding, (err, data)=>{
            if(data){
                resolve(data)
            }
            else{
                reject(err)
            }
        })
    })
}

// To handle the returned promise using then and catch
jsonFile('./test_file/user.json', 'utf8')
    .then(result => {
        let data = JSON.parse(result);
        let time = 1000;
        data.forEach((d,i)=>{
            setTimeout(()=>{
                console.log(`${i+1}) Name: ${d.name}, Username: ${d.username}, Email: ${d.email}`)
            }, time);
            time += 1000;
        })
    })
    .catch(error=>{
        console.log(error);
    })


// using async and await to handle promise.
let readFileAsync =  async (file,encoding) => {
    try {
        let readJsonFileResult = await readJsonFile(file, encoding);
        let data = JSON.parse(readJsonFileResult);
        let time = 1000;
        console.log('Using async and await');
        data.forEach((d,i)=>{
            setTimeout(()=>{
                console.log(`${i+1}) Name: ${d.name}, Username: ${d.username}, Email: ${d.email}`)
            }, time);
            time += 1000;
        })
    } catch (error) {
      console.log(error)   
    }  
}

readFileAsync('./test_file/user.json', 'utf8');


//Read multiple file using Promise.all()

Promise.all([jsonFile('./test_file/user.json', 'utf8'), jsonFile('./test_file/file2.txt', 'utf8')])
    .then(result=>{
        let data = JSON.parse(result[0]);
        console.log(data)
    }).catch(error=>{
        console.log(error);
    })

let async_await = async () => {

    let readFiles = await Promise.all([jsonFile('./test_file/user.json', 'utf8'), jsonFile('./test_file/file2.txt', 'utf8')]);
    console.log(readFiles)
}

async_await()