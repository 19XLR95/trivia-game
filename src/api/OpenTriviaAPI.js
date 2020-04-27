const BASE_URL = "https://opentdb.com/api.php";

export const responseConstants = {
    SUCCESS: 0,
    NO_RESULT: 1,
    INVALID_PARAMETER: 2,
    TOKEN_NOT_FOUND: 3,
    TOKEN_EMPTY: 4
}

export const getQuestions = (callback, params = {amount: 1}) => {
    const entries = Object.entries(params);

    const query = entries.reduce(
        (prev, [key, value], index) => prev + key + "=" + value + (index != (entries.length - 1) ? "&" : ""), "?encode=url3986&"
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
