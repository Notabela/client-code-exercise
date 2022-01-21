var peopleService = function () {

    this.getPeople = function () {
        return fetch("http://jsonplaceholder.typicode.com/users");
    };
}

export default peopleService;