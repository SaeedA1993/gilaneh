export const formatWeight = (weight) => {
    const parsedWeight = parseFloat(weight);
    
    if (Number.isInteger(parsedWeight)) {
        return `${parsedWeight}`; 
    } else {
        return `${parsedWeight.toFixed(2)}`; 
    }
};