const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let books = {
    'The priory of the Orange Tree': {
        
        'authorName': 'Samantha Shannon',
        'publishdate': '22 February 2019', 
        'genre': 'Fantasy',
        'ISBN': ' 9781635575569 (ISBN10: 1635575567)',
        'Language': 'English',
      
    },
    'A court of thorns and roses': {
        
        'authorName': 'Sarah J. Maas',
        'publishdate': '2 June 2020', 
        'genre': 'Fantasy',
        'ISBN': ' 9781635575569 (ISBN10: 1635575567)',
        'Language': 'English',
      
    },
    'Malice': {
        
        'authorName': 'Heather Walter',
        'publishdate': '13 April 2021', 
        'genre': 'Fantasy',
        'ISBN': ' 9781984818652 (ISBN10: 1984818651)',
        'Language': 'English',
      
      
    },
    'Misrule': {
        
        'authorName': 'Heather Walter',
        'publishdate': '10 May 2022', 
        'genre': 'Fantasy',
        'ISBN': ' 9781635575569 (ISBN10: 1635575567)',
        'Language': 'English',
      
    },
    'The first Days': {
        
        'authorName': 'Rhiannon Frater',
        'publishdate': '14 August 2008', 
        'genre': 'Fantasy',
        'ISBN': ' 9781635575569 (ISBN10: 1635575567)',
        'Language': 'English',
      
      
    },
    'unknown': {
        
        'authorName': 'Sarah J. Maas',
        'publishdate': '2 June 2020', 
        'genre': 'Fantasy',
        'ISBN': ' 9780765331267 (ISBN10: 0765331268)',
        'Language': 'English',
      
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if(books[authorName]){
        response.json(books[authorName])
    }else{
        response.json(books['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
