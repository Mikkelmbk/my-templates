let accessToken = `sgsdsddbkdghdksbhdahasgbsadgas`; // accessToken modtaget fra API eller server.
let floof = "123456"
document.cookie = `accessToken=${accessToken};max-age=${60 * 60}`;
document.cookie = `floof=${floof};max-age=${60 * 60}`;

document.cookie = `floof=;expires=Thu, 01 Jan 1970 00:00:00 GMT`; // man deleter en cookie ved at sætte dens value til at være tom, samt sætte dens expires til at være en dato i fortiden.

let cookies = {}; // gør objekt klar til at modtage cookies.

document.cookie.split('; ').forEach((cookie) => {// forEacher på de cookies der eksistere, og splitter på semikolon og mellemrum, da cookies bliver til en lang streng som er sepereret af semikolon og mellemrum.
    cookies[cookie.split("=")[0]] = cookie.split("=")[1]; // sætter værdien der er på venstre side af ligmed tegnet i min cookie til at være navnet forbundet med værdien på højre side af ligmed tegnet i min cookie, Eksempel: accessToken=VolapykTekst.
})



console.log(cookies);
