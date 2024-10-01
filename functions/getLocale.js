import { parse } from "date-fns";

export const getLocale = (dates) => {
    let ukVotes = 0; 
    let usVotes = 0; 

    const dateReg = new RegExp(/^\d{2}[./-]\d{2}[./-]\d{4}$/); 

    for (let element of dates) {
        if (dateReg.test(element)) {
            const day = parseInt(element.slice(0, 2), 10);   
            const month = parseInt(element.slice(3, 5), 10); 

    
            if (month > 12 && day <= 12) {
                usVotes++; 
            } else if (month <= 12 && day <= 31) {
                ukVotes++; 
            }
        }
    }
    if (ukVotes > usVotes) {
        return "UK";
    } else if (usVotes > ukVotes) {
        return "US";
    } else {
        return null ; 
    }
};

// const array = ["04-04-2002", "05-06-2002", "12-13-2002"];
// const result = getLocale(array);
// console.log(result);
