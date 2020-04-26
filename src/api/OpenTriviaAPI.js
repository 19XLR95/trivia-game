const BASE_URL = "https://opentdb.com/api.php";

export default (callback, params = {amount: 1}) => {
    const entries = Object.entries(params);

    const query = entries.reduce(
        (prev, [key, value], index) => prev + key + "=" + value + (index != (entries.length - 1) ? "&" : ""), "?"
    );

    fetch(BASE_URL + query).then(
        (response) => response.json()
    ).then(
        (questions) => {
            callback(questions);
        }
    ).catch(
        (error) => {
            console.error("Cannot retrieve questions!");

            callback(null);
        }
    );
}
