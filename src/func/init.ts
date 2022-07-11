export const init = (callback: () => void): void => {
    console.log("default initialization finished");
    callback();
    console.log("All initialization finished");
};
