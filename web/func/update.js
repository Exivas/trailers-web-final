
export default function updateMovie(id,movie) {
    const url = `http://localhost:3000/api/put/${id}`;
fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

}
