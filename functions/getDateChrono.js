import { parse, isValid } from "date-fns";
import { parseDate } from "chrono-node";

const formats = ["dd/MM/yyyy", "dd-MM-yyyy", "dd MM yyyy", "dd.MM.yyyy"];

export const getDate = (dateStr, locale = "us") => {
    if (locale === "uk") {
        console.log("UK format detected");
        
        for (const format of formats) {
            try {
                const parsedDate = parse(dateStr, format, new Date());
                if (isValid(parsedDate)) {
                    return parsedDate; 
                }
            } catch (err) {
                
                continue;
            }
        }
        

        return 'Invalid date format for UK.';
    } else {
        try {
            const parsedDate = parseDate(dateStr);
            return parsedDate;
        } catch (err) {
            return err.message;
        }
    }
};
