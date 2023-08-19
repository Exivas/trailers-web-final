export default function Remove(id){
    const url = `http://localhost:3000/api/delete/${id}`;
fetch(url, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

}
