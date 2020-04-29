export const randomKey = () => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=.";
    let key = "";

    for(let i = 0; i < 32; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);

        key += chars.charAt(randomIndex);
    }

    return key;
}
