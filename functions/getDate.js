import { parse } from "date-fns";
import { getLocale } from "./getLocale.js";

const pattern = {

    "dd/MM/yyyy": "(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[0-2])/[0-9]{4}",
    "dd-MM-yyyy": "(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[0-2])-[0-9]{4}",
    "dd.MM.yyyy": "(0?[1-9]|[12][0-9]|3[01])\\.(0?[1-9]|1[0-2])\\.[0-9]{4}",
    "dd MM yyyy": "(0?[1-9]|[12][0-9]|3[01])\\s(0?[1-9]|1[0-2])\\s[0-9]{4}",
  };

export const getDate = (data,returnFormat) => {
  let output=[];
  let locale=getLocale(data);
  if (locale === "US") {
    data.forEach(element => {
      output.push(new Date(element));
    });
    return output;
   
    
  }
  const keys = Object.keys(pattern);
  data.forEach((element)=>{
    for (let i of keys) {
      const regexPattern = new RegExp(`^${pattern[i]}$`);
      // console.log(regexPattern);
      if (regexPattern.test(element)) {
        try {
          
          const parsedDate = parse(element, i, new Date());
          if (!isNaN(parsedDate)) {
            output.push(parsedDate);
          }
        } catch (e) {
          continue;
        }
      }
    }
  });
  return output;
};

const test= ["12/04/2022", "15/06/2023", "25/12/2020"];
let i = getDate(test);

i.forEach(element => {
  console.log(element.toDateString());
});