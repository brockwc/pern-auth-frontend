const url = `http://localhost:4000/api/v1`

class TeaModel {
    static all = () => {
        return fetch(`${url}/allteas`).then(res => res.json())
    }

    static show = (teaId) => {
        return fetch(`${url}/teas/${teaId}`).then(res => res.json())
    }

}