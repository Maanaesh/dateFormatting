## Usage
### getDate(dateStr, locale)
`dateStr`: The string representing the date you want to parse.
locale: An optional locale parameter. When set to "uk", the function will attempt to parse the date using common UK date formats. If not provided, it defaults to "us" and uses chrono-node to parse flexible date formats.
### Supported UK Formats:
- dd/MM/yyyy
- dd-MM-yyyy
- dd MM yyyy
- dd.MM.yyyy
### For non-UK locales:
- The function will use chrono-node to handle date parsing flexibly.

## Examples
### Non-UK format
```
console.log(getDate("03/05/2002").toDateString());
```

output:
```
Tue Mar 05 2002
```
### UK-Format

```
console.log(getDate("03/05/2002","uk").toDateString());
```

output:
```
UK format detected
Fri May 03 2002
```
