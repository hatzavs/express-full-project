
const albums = [];
let counter = 0;

class Albums {
    static getAll(req, res) {
        res.json(albums);
    }

    static create(req, res) {
        const title = req.body.title;
        if (!title) {
            res.status(400).send('No title entered');
            return;
        }
        counter++;
        const newAlbum = {
            id: counter,
            title: title,
            date: new Date().toLocaleDateString()
        }
        albums.push(newAlbum);
        res.sendStatus(201);
    }

    static delete(req, res) {
        const albumId = parseInt(req.params.id);
        const indexToDelete = Albums.find(albumId);
        if (indexToDelete < 0) {
            res.sendStatus(404);
            return;
        }
        albums.splice(indexToDelete, 1);
        res.sendStatus(204);
    }

    static edit(req, res) {
        const albumId = parseInt(req.params.id);
        const albumToEdit = albums[Albums.find(albumId)];
        if (req.body.title) {
            albumToEdit.title = req.body.title;
            res.sendStatus(202);
        }
    }

    static find(albumId) {
        return albums.findIndex(album => album.id === albumId);
    }
}

module.exports = Albums;