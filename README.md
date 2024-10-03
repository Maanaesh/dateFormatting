## Usage
### getDate(date,returnFormat)
`dateStr`: an array of dates 

`returnFormat`: a string representing how the return format of the 

`return`: function returns an array with the dates in the specified format.

refer : https://date-fns.org/v4.1.0/docs/format for more about formatting.

### Example:
```
const test= ["12/04/2022", "15/06/2023", "25/12/2020"];
let i = getDate(test,"dd/MMM/yyyy");

i.forEach(element => {
  console.log(element);
});
```
#### Output:
<img width="466" alt="image" src="https://github.com/user-attachments/assets/55e19ea2-179d-4516-a8a9-98cde2911245">
