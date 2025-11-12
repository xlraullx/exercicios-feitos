const crieSeuNick = (nick : string | number) => {
    return `O seu nick é ${nick}`;
}

console.log(crieSeuNick("DevMaster"));
console.log(crieSeuNick(12345));

