// movie crud with node and express
const express = require('express');
const app = express();
const PORT = 3000;
let movies = [
    {
        "id": 1,
        "movie_title": "Endless Love",
        "genre": "Horror",
        "release_date": "2/1/1981",
        "director": "Karlie Dyball",
        "rating": 3.7,
        "box_office_revenue": "Yuan Renminbi",
        "main_actor": "Reeva McMurty",
        "production_company": "Trilia",
        "duration_minutes": 125,
        "plot_summary": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus."
    },
    {
        "id": 2,
        "movie_title": "Sign 'o' the Times",
        "genre": "Action",
        "release_date": "3/14/1980",
        "director": "Harvey Greasley",
        "rating": 3.4,
        "box_office_revenue": "Koruna",
        "main_actor": "Arnold Shallcroff",
        "production_company": "Skippad",
        "duration_minutes": 133,
        "plot_summary": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
    },
    {
        "id": 3,
        "movie_title": "Philosophers, The (After The Dark)",
        "genre": "Action",
        "release_date": "5/26/1994",
        "director": "Marten Attrey",
        "rating": 3.5,
        "box_office_revenue": "Real",
        "main_actor": "Dagmar MacLaig",
        "production_company": "Bubbletube",
        "duration_minutes": 201,
        "plot_summary": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
    },
    {
        "id": 4,
        "movie_title": "Lives of a Bengal Lancer, The",
        "genre": "Action",
        "release_date": "7/10/1990",
        "director": "Amelia Beales",
        "rating": 1.3,
        "box_office_revenue": "Rupiah",
        "main_actor": "Karna Camm",
        "production_company": "Shuffletag",
        "duration_minutes": 178,
        "plot_summary": "Phasellus in felis. Donec semper sapien a libero. Nam dui."
    },
    {
        "id": 5,
        "movie_title": "Back to the Secret Garden",
        "genre": "Comedy",
        "release_date": "3/20/1996",
        "director": "Miller Outright",
        "rating": 7.9,
        "box_office_revenue": "Peso",
        "main_actor": "Shari Daoust",
        "production_company": "Twitterworks",
        "duration_minutes": 165,
        "plot_summary": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo."
    },
    {
        "id": 6,
        "movie_title": "Mega Shark vs. Crocosaurus",
        "genre": "Action",
        "release_date": "1/25/2015",
        "director": "Cordy Crippell",
        "rating": 7.3,
        "box_office_revenue": "Dollar",
        "main_actor": "Randie Serraillier",
        "production_company": "Thoughtbeat",
        "duration_minutes": 63,
        "plot_summary": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
    },
    {
        "id": 7,
        "movie_title": "House (Hausu)",
        "genre": "Romance",
        "release_date": "12/21/2006",
        "director": "Ashlie Aykroyd",
        "rating": 1.3,
        "box_office_revenue": "Peso",
        "main_actor": "Sacha Cade",
        "production_company": "Zoomlounge",
        "duration_minutes": 154,
        "plot_summary": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
    },
    {
        "id": 8,
        "movie_title": "Barabbas",
        "genre": "Comedy",
        "release_date": "2/4/2008",
        "director": "Danice Tubby",
        "rating": 2.4,
        "box_office_revenue": "Euro",
        "main_actor": "Jorie Pullin",
        "production_company": "Topicware",
        "duration_minutes": 114,
        "plot_summary": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
    },
    {
        "id": 9,
        "movie_title": "Shut Up and Play the Hits",
        "genre": "Action",
        "release_date": "10/15/2005",
        "director": "Xylina Lendrem",
        "rating": 1.2,
        "box_office_revenue": "Yuan Renminbi",
        "main_actor": "Dorelia Salmoni",
        "production_company": "Zoozzy",
        "duration_minutes": 67,
        "plot_summary": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
    },
    {
        "id": 10,
        "movie_title": "Monkey's Mask, The",
        "genre": "Action",
        "release_date": "4/22/1970",
        "director": "Galven Dudman",
        "rating": 1.0,
        "box_office_revenue": "Rupiah",
        "main_actor": "Waite Pharaoh",
        "production_company": "Edgeify",
        "duration_minutes": 153,
        "plot_summary": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
    }
]
app.use(express.json());
const cors = require('cors');
app.use(cors());
// Define a route to get all movies
app.get('/api/movies', (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Movie Data Fetched",
            body: movies
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Network Error",
            error: err.message
        });
    }
});
// Define a route to get a movie by ID
app.get('/api/movies/:id', (req, res) => {
    try {
        const movieId = parseInt(req.params.id);
        const movie = movies.find(m => m.id === movieId);

        if (movie) {
            res.status(200).json({
                success: true,
                message: "Movie Data Fetched",
                body: movie
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Movie Not Found"
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Network Error",
            error: err.message
        });
    }
});
// Define a route to add a new movie
app.post('/api/movies', (req, res) => {
    try {
        let newMovie = {
            ...req.body,
            id: Date.now().toString()
        }
        movies.push(newMovie);
        res.status(201).json({
            success: true,
            message: "Movie Added Successfully",
            body: newMovie
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Network Error",
            error: err.message
        });
    }
});
// Define a route to update a movie by ID
app.put('/api/movies/:id', (req, res) => {
    try {
        const movieId = parseInt(req.params.id);
        const movieIndex = movies.findIndex(m => m.id === movieId);

        if (movieIndex !== -1) {
            movies[movieIndex] = { ...movies[movieIndex], ...req.body };
            res.status(200).json({
                success: true,
                message: "Movie Updated Successfully",
                body: movies[movieIndex]
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Movie Not Found"
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Network Error",
            error: err.message
        });
    }
});
// Define a route to delete a movie by ID
app.delete('/api/movies/:id', (req, res) => {
    try {
        const movieId = parseInt(req.params.id);
        const movieIndex = movies.findIndex(m => m.id === movieId);

        if (movieIndex !== -1) {
            const deletedMovie = movies.splice(movieIndex, 1);
            res.status(200).json({
                success: true,
                message: "Movie Deleted Successfully",
                body: deletedMovie[0]
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Movie Not Found"
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Network Error",
            error: err.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});