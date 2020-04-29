export default {
    POINTS: {
        easy: 100,
        medium: 150,
        hard: 200
    },
    DIFFICULTIES: [
        {id: "", name: "Difficulty", param: "difficulty"},
        {id: "", name: "Any", param: "difficulty"},
        {id: "easy", name: "Easy", param: "difficulty"},
        {id: "medium", name: "Medium", param: "difficulty"},
        {id: "hard", name: "Hard", param: "difficulty"}
    ],
    TYPES: [
        {id: "", name: "Question Type", param: "type"},
        {id: "", name: "Any", param: "type"},
        {id: "multiple", name: "Multiple Choice", param: "type"},
        {id: "boolean", name: "True / False", param: "type"}
    ],
    AMOUNTS: [
        {id: 10, name: "Number of Questions", param: "amount"},
        {id: 10, name: "10", param: "amount"},
        {id: 20, name: "20", param: "amount"},
        {id: 30, name: "30", param: "amount"},
        {id: 40, name: "40", param: "amount"},
        {id: 50, name: "50", param: "amount"}
    ],
    CATEGORIES: [
        {id: "", name: "Category", param: "category"},
        {id: "", name: "Any", param: "category"}
    ],
    DEFAULT_QUERY: {
        amount: 10,
        category: "",
        difficulty: "",
        type: ""
    }
};
