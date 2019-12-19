class mamadb {
    /**
     * Constructor
     */
    constructor() {
        this.urlStore = new Map();
    }
    /**
     * get new file with corresponse url and file's name
     * @param {String} url 
     * @param {String} filename 
     */
    getUrl(url, filename) {
        return Prosmise(function (resolve, reject) {
            if (typeof (url) === String) {
                fetch(url)
                    .then(dat => dat.blob())
                    .then(dat => resolve(new File([dat], filename)))
                    .catch(err => {
                        return reject(err);
                    })
            }
            return reject(new Error("Url not a string"));
        })
    }
    /**
     * Get item with correspond key
     * @param {String} key 
     */
    getItem(key) {
        if(typeof(key)!== "string")
        {
            return new Error("Key is not a string");
        }
        var urlToFetch = this.urlStore.get(key);
        if (urlToFetch === undefined)
        {
            return new Error("Unable to get item");
        }
        // Valid key
        if (urlToFetch) {
            this.getUrl(urlToFetch, key)
                .then(value => value)
                .catch(err => {
                    console.log(err);
                    return err;
                })
        }
    }
    /**
     * Put item to mamadb
     * @param {File} file 
     * @param {String} key 
     */
    putItem(file, key) {
        if (typeof (key) !== "string" || key===null) {
            return new Error("invalid type");
        }
        if (typeof (file) !== "File" || file===null) {
            return new Error("invalid type");
        }
        url = URL.createObjectURL(file);
        this.urlStore.set(key, url);
        return;
    }
}
module.exports = mamadb;