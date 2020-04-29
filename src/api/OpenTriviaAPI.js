import GameConstants from "../constants/GameConstants";

const BASE_URL = "https://opentdb.com";
const QUESTIONS_END_POINT = "/api.php";
const QUESTION_CATEGORY_END_POINT = "/api_category.php";

export const responseConstants = {
    SUCCESS: 0,
    NO_RESULT: 1,
    INVALID_PARAMETER: 2,
    TOKEN_NOT_FOUND: 3,
    TOKEN_EMPTY: 4
}

export const getQuestions = (callback, params = GameConstants.DEFAULT_QUERY) => {
    const entries = Object.entries(params);

    const query = entries.reduce(
        (prev, [key, value], index) => prev + key + "=" + value + (index != (entries.length - 1) ? "&" : ""), "?encode=url3986&"
    );

    fetch(BASE_URL + QUESTIONS_END_POINT + query).then(
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

export const getQuestionCategories = (callback) => {
    fetch(BASE_URL + QUESTION_CATEGORY_END_POINT).then(
        (response) => response.json()
    ).then(
        (categories) => {
            callback(categories);
        }
    ).catch(
        (error) => {
            console.error("Cannot retrieve question categories!");

            callback(null);
        }
    );
}
