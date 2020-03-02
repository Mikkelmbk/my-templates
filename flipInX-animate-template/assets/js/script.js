


setTimeout(()=>{
    document.querySelector('.container h1').classList.remove('myH1'); // fjerner den class jeg har lavet som giver elementet opacity 0 for at skjule det indtil det skal animeres for til sidst at vises.
    document.querySelector('.container h1').classList.add('flipInX'); // tilføjer classen der skal animere elementet for til sidst at vise det.
},2000)